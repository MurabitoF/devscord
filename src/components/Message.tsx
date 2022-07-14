import React from 'react'
import styled from 'styled-components'
import useUser from '../hooks/useUser'

interface Props {
  message: string,
  username: string,
  photoURL: string,
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  `

const ImageConteiner = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  overflow: hidden;
  margin: 0 5px;
  border-radius: 50%;
  border: 1px solid #210057;
`

const MessageDiv = styled.div`
  background-color: #2155b6;
  color: #F2F2F2;
  margin: 10px 0;
  padding: 10px 15px;
  border-radius: 9999px;
`

const Message = ({ message, username, photoURL }:Props) => {
  const user = useUser()

  const displayName = user ? user.displayName : 'Desconocido'
  console.log(displayName, username)

  const MessageCont = styled.div`
    display: flex;
    flex-direction: ${displayName === username ? 'row-reverse' : 'row'};
    justify-content: space-around;
    align-items: center;
    align-self: ${displayName === username ? 'flex-end' : 'flex-start'};
    word-break: break-all;
    max-width: 75%;
  `
  return (
    <MessageCont>
      <ImageConteiner>
        <Image src={photoURL} />
      </ImageConteiner>
      <MessageDiv>
        {message}
      </MessageDiv>
    </MessageCont>
  )
}

export default Message
