import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import SolidButton from './buttons/SolidButton'
import Send from './icons/Send'

import { addNewMessage } from '../firebase/client'
import useUser from '../hooks/useUser'

const Area = styled.input`
  background-color: #242424;
  color: #F2F2F2;
  border: none;
  border-radius: 9999px 0 0 9999px;
  width: 90%;
  box-shadow: inset 1px 1px 5px rgba(0,0,0,.3);
  padding: 1.1em;
  word-wrap: break-word;

  &:focus {
    outline: none;
  }
`

const Form = styled.form`
  width: 100%;
  display: flex;
`

const btnCss = css`
  border-radius: 0 9999px 9999px 0;
  padding: .75em 1em;

  &:hover{
    filter: brightness(1.3);
  }
`

interface Props {
  scroll: React.MutableRefObject<HTMLDivElement>
}

const MessageText = ({ scroll }:Props) => {
  const [message, setMessage] = useState('')
  const user = useUser()

  const sendMessage = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (message.trim().length !== 0) {
      addNewMessage(message, user)
      setMessage('')
      scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Form onSubmit={sendMessage}>
      <Area value={message} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)} />
      <SolidButton type='submit' css={btnCss} bgColor="#35264d">
        <Send fill='#F2F2F2' width={18} height={18} />
      </SolidButton>
    </Form>
  )
}

export default MessageText
