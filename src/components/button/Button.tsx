import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.a`
  border: 0;
  outline: 0;
  background: transparent;
  padding: 0.25em 1em;

  cursor: pointer;
  font-family: Virgil;

  color: white;
  text-decoration: none;
  text-align: center;
  background: #355c7d;

  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`

type IProps = {
  title: string
  [key: string]: any
} & React.ButtonHTMLAttributes<{}>

export default function Button({ title, ...rest }: IProps) {
  return <ButtonStyled {...rest}>{title}</ButtonStyled>
}
