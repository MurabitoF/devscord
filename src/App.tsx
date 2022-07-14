import React from 'react'

import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import Spinner from './components/Spinner'
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
  height: 100vh;

  @media (min-width: 480px) {
    width: 480px;
    height: 90vh; 
  }
`

function App () {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <Container>
        <Section>
          <Spinner />
        </Section>
      </Container>
    )
  }

  return (
    <Container className="App">
      <Section>
        {user ? <ChatApp user={user} /> : <SignIn />}
      </Section>
    </Container>
  )
}

export default App
