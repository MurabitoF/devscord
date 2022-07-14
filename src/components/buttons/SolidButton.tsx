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

const StyleButton = styled.button<Props>`
    background-color: ${props => props.bgColor || '#fff'};
    color: ${props => props.color || '#000'};
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

    ${props => props.css}
  `

const SolidButton = ({ children, onClick, type, ...rest }:Props) => {
  return (
    <StyleButton type={type} onClick={onClick} {...rest}>{children}</StyleButton>
  )
}

export default SolidButton
