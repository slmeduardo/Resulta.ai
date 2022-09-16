import { ReactNode } from 'react'
import * as S from './styles'
type LinkProps = {
  children: ReactNode
}

const Link = ({ children }: LinkProps) => <S.Link>{children}</S.Link>

export default Link
