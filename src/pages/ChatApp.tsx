import React from 'react'

import { User } from 'firebase/auth'
import ChatRoom from './ChatRoom'

interface Props {
  user: User
}

const ChatApp = ({ user }:Props) => {
  return (
    <>
      <ChatRoom />
    </>
  )
}

export default ChatApp
