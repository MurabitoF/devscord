import React from 'react'
import styled from 'styled-components'
import { auth } from '../firebase/client'
import SolidButton from './buttons/SolidButton'
import Gear from './icons/Gear'

const Header = styled.div`
  background-color: rgba(0, 0, 0, .3);
  color: #F2F2F2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em 1em;
  
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  & > h1{
    margin: 0;
  }
`

const HeaderChatRoom = () => {
  return (
    <Header>
      <h1>CHAT</h1>
      <SolidButton onClick={() => auth.signOut()} bgColor='#F2F2F2'>
        <Gear fill='#030303' width={20} height={20} />
      </SolidButton>
    </Header>
  )
}

export default HeaderChatRoom
