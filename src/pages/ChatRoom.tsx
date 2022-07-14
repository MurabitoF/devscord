import React, { useRef } from 'react'
import BottomBar from '../components/BottomBar'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, limit, orderBy, query } from 'firebase/firestore'
import { firestore } from '../firebase/client'
import styled from 'styled-components'
import Message from '../components/Message'
import HeaderChatRoom from '../components/HeaderChatRoom'

const ChatRoomContainer = styled.div`
  display:flex;
  flex-direction:column-reverse;
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
  const messageRef = collection(firestore, 'message')
  const q = query(messageRef, orderBy('createdAt', 'desc'), limit(25))
  const [messages] = useCollectionData(q)

  const scroll = useRef() as React.MutableRefObject<HTMLDivElement>

  return (
    <RoomContainer>
      <HeaderChatRoom />
      <ChatRoomContainer>
        <div ref={scroll}></div>
        {messages?.map((message) => {
          return <Message
            key={message.id}
            message={message.message}
            username={message.user.displayName}
            photoURL={message.user.photoURL}
            />
        })}
      </ChatRoomContainer>
      <BottomBar scroll={scroll}/>
    </RoomContainer>
  )
}

export default ChatRoom
