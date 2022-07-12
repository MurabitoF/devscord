import React from 'react'

import { getAuth } from 'firebase/auth'

const auth = getAuth()

const ChatApp = () => {
  return (<>
    <div>ChatApp</div>
    <button onClick={() => auth.signOut()}>Sign Out</button>
    </>
  )
}

export default ChatApp
