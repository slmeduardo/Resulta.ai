import { ReactNode } from 'react'
import * as S from './styles'
type TitleProps = {
  children: ReactNode
}

const Title = ({ children }: TitleProps) => <S.Title>{children}</S.Title>

export default Title
