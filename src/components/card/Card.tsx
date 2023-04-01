import { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  width: fit-content;

  padding: 32px;

  border: 2px solid var(--primary-color);
  border-radius: 92% 8% 95% 5% / 4% 92% 8% 96%;
  justify-content: space-around;
  color: var(--primary-color);
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

