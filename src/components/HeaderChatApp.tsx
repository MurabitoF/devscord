import React from 'react'
import styled from 'styled-components'
import { auth } from '../firebase/client'
import SolidButton from './buttons/SolidButton'
import { Link } from 'react-router-dom'
import Arrow from './icons/Arrow'
import Exit from './icons/Exit'

const Header = styled.div`
  background-color: rgba(0, 0, 0, .3);
  color: #F2F2F2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em 1em;

  & > h1{
    margin: 0;
  }
`

interface Props {
  title?: string,
}

const HeaderChatApp = ({ title }:Props) => {
  return (
    <Header>
      {
        title && (
        <Link to='/'>
          <Arrow fill='#F2F2F2' width={30} height={30}/>
        </Link>
        )
      }

      <h1>{title || 'Devscord'}</h1>
      <SolidButton onClick={() => auth.signOut()} bgColor='#F2F2F2'>
        <Exit fill='#030303' width={20} height={20} />
      </SolidButton>
    </Header>
  )
}

export default HeaderChatApp
