import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loader = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`
const rotateAnim = keyframes`
  from{
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`

const Circle = styled.div`
  border: 8px solid #140e1f;
  border-top-color:#2155b6;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotateAnim} infinite 1s ease;
`

const Spinner = () => {
  return (
    <Loader>
      <Circle />
    </Loader>
  )
}

export default Spinner
