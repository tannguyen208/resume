import { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 16px;

  border-radius: 8px;
  box-shadow: 0px 8px 40px rgba(53, 119, 107, 0.12);
  background-color: #fff;
  width: fit-content;

  padding: 16px;

  --transition-property: transform;
  --transition-duration: 180ms;

  transition: var(--transition-property) var(--transition-duration) ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`

type CardProps = {
  color?: string
  [key: string]: any
} & React.ButtonHTMLAttributes<{}>

const Card = ({
  children,
  color = '#eee',
  ...rest
}: CardProps): JSX.Element => (
  <Container {...rest} color={color}>
    {children}
  </Container>
)

export default Card

