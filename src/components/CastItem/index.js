import {
  CastItemContainer,
  CastImage,
  CharacterName,
  MainName,
} from './styledComponents'

const CastItem = props => {
  const {item} = props
  const {imageUrl, originalName, characterName} = item
  return (
    <CastItemContainer>
      <CastImage src={imageUrl} alt={`${originalName}`} />
      <MainName>{originalName}</MainName>
      <CharacterName>as {characterName}</CharacterName>
    </CastItemContainer>
  )
}

export default CastItem
