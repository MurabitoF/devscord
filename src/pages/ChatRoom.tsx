import React, { useRef, useEffect } from 'react'
import BottomBar from '../components/BottomBar'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { firestore } from '../firebase/client'
import styled from 'styled-components'
import Message from '../components/Message'
import HeaderChatRoom from '../components/HeaderChatApp'
import Spinner from '../components/Spinner'
import { useParams, useNavigate } from 'react-router-dom'
import chatRooms from '../data/chatRooms'

const ChatRoomContainer = styled.div`
  display:flex;
  flex-direction:column-reverse;
  height: 100%;
  padding: .5em;
  overflow-y: scroll;
  position: relative;
  scrollbar-width: 1px;

  ::-webkit-scrollbar{
    width: 5px;
    background-color: #210057;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #3c0593;
    border-radius: 50px;
  }
`
const RoomContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const ChatRoom = () => {
  const params = useParams()
  const room = chatRooms.find(x => x.id === params.chatRoom)

  if (!room) {
    const nav = useNavigate()
    nav('/')
  }
  const roomId = room?.id ? room.id : ''
  const [messages, loading] = useCollectionData(query(
    collection(firestore, 'chat-rooms', roomId, 'messages'),
    orderBy('timestamp', 'desc')
  ))
  const scroll = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    if (!loading) {
      scroll.current.scrollIntoView({ behavior: 'auto' })
    }
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <RoomContainer>
      <HeaderChatRoom title={room?.title} />
      <ChatRoomContainer>
        <div ref={scroll}></div>
        {messages?.map((message, i) => {
          return <Message
            key={i}
            message={message.text}
            username={message.user.displayName}
            photoURL={message.user.photoURL}
            createAt={message.timestamp}
            />
        })}
      </ChatRoomContainer>
      <BottomBar scroll={scroll} roomId={roomId} />
    </RoomContainer>
  )
}

export default ChatRoom
