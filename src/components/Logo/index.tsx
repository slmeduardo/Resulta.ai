import Image from 'next/image'
import * as S from './styles'
import { useRouter } from 'next/router'

export default function Logo() {
  const router = useRouter()

  return (
    <S.LogoWrapper>
      <Image
        onClick={() => router.push(`../`)}
        src="/img/logo.svg"
        alt="Logotipo do site."
        layout="fixed"
        width="177px"
        height="36px"
      />
    </S.LogoWrapper>
  )
}
