import React from 'react'

import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { auth } from './firebase/client'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

import ChatApp from './pages/ChatApp'
import SignIn from './pages/SignIn'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #444;
`

const Section = styled.section`
  background-color: #191224;
  width: 100%;
  height: 100%;

  @media (min-width: 480px) {
    width: 480px;
    height: 90vh; 
  }
`

function App () {
  const [user] = useAuthState(auth)
  return (
    <Container className="App">
      <Section>
        {user ? <ChatApp user={user} /> : <SignIn />}
      </Section>
    </Container>
  )
}

export default App
