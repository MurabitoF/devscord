import React from 'react'
import styled from 'styled-components'
import SolidButton from '../components/buttons/SolidButton'
import Github from '../components/icons/Github'
import { signInWithGithub } from '../firebase/client'

const H1 = styled.h1`
  font-weight: 900;
  font-size: 3rem;
`

const H2 = styled.h1`
  font-size: 2rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 3em;
  text-align: center;
`

const SignIn = () => {
  return (
  <Container>
    <H1>Welcome to <span style={{ color: '#3c0593' }}>Devscord</span></H1>
    <H2>Sign In</H2>
    <SolidButton bgColor="#030303" color="#FFF" onClick={signInWithGithub}>
      <Github width={24} height={24} fill='#fff'/> Sign In with Github
    </SolidButton>
  </Container>
  )
}

export default SignIn
