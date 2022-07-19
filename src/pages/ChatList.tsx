import React from 'react'
import styled from 'styled-components'
import HeaderChatApp from '../components/HeaderChatApp'
import { Link } from 'react-router-dom'

import chatRooms from '../data/chatRooms'

const ChatListContainer = styled.div`
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
const ListContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`

const ChatRoomLink = styled(Link)`
  margin-bottom: .75em;
  padding: 1em;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, .3);
  width: 80%;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: #F2F2F2;
  text-decoration: none;
`

const ChatList = () => {
  return (
    <>
      <HeaderChatApp />
      <ChatListContainer>
        <ListContainer>
          {chatRooms.map((chatRoom) => {
            return (
              <ChatRoomLink key={chatRoom.id} to={`/room/${chatRoom.id}`}>
                  {chatRoom.title}
              </ChatRoomLink>
            )
          })}
        </ListContainer>
      </ChatListContainer>
    </>
  )
}

export default ChatList
