import React from 'react'
import styled from 'styled-components'
import MessageText from './MessageText'

const Bar = styled.div`
  padding: .5em .75em;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 456px;
  backdrop-filter: blur(10px);
`
interface Props {
  scroll: React.MutableRefObject<HTMLDivElement>
}

const BottomBar = ({ scroll }:Props) => {
  return (
    <Bar>
      <MessageText scroll={scroll} />
    </Bar>
  )
}

export default BottomBar
