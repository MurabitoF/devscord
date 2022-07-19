import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { User } from 'firebase/auth'
import ChatList from './ChatList'
import ChatRoom from './ChatRoom'

interface Props {
  user: User
}

const ChatApp = ({ user }:Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChatList />}>
        </Route>
        <Route path="/room/:chatRoom" element={<ChatRoom />} />
      </Routes>
    </>
  )
}

export default ChatApp
