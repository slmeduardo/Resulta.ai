import { ReactNode } from 'react'
import * as S from './styles'
type ButtonProps = {
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => <S.Button>{children}</S.Button>

export default Button
