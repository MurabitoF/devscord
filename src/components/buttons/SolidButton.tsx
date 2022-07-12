import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  onClick: () => void,
  bgColor: string,
  color: string
}

const SolidButton = ({ children, onClick, bgColor, color }:Props) => {
  const StyleButton = styled.button`
    background-color: ${bgColor};
    color: ${color};
    padding: .75em 1rem;
    border: none;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: filter .2s ease-in-out;

    &:hover,
    &:focus {
      transition: filter .2s ease-in-out;
      filter: opacity(.85);
    }

    svg {
      margin-right: 10px
    }
  `
  return (
    <StyleButton onClick={onClick}>{children}</StyleButton>
  )
}

export default SolidButton
