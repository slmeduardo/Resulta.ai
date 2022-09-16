import * as S from './styles'

const imgUrl =
  'https://img-cdn.hltv.org/gallerypicture/m8ac0BHQQghYJ5eYy39WEa.jpg?ixlib=java-2.1.0&m=%2Fm.png&mw=213&mx=39&my=947&w=1600&s=3adb5f31b897062951e3a8c5fb662219'

const imgStyle = {
  borderRadius: '2rem',
  backgroundImage: 'url(' + imgUrl + ')',
  marginBottom: '1.5rem'
}

const TopImg = () => <S.WrapperImg style={imgStyle} />

export default TopImg
