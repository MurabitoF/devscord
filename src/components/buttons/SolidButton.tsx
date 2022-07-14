import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

interface Props {
  children: React.ReactNode
  onClick?: any,
  type?: 'button' | 'submit',
  bgColor?: string,
  color?: string
  css?: FlattenSimpleInterpolation
}

const SolidButton = ({ children, onClick, bgColor, color, css, type }:Props) => {
  const StyleButton = styled.button`
    background-color: ${bgColor || '#fff'};
    color: ${color || '#000'};
    padding: .75em;
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

    ${css}
  `
  return (
    <StyleButton type={type} onClick={onClick}>{children}</StyleButton>
  )
}

export default SolidButton
