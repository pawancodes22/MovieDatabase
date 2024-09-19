import './index.css'

const CastItem = props => {
  const {item} = props
  const {imageUrl, originalName, characterName} = item
  return (
    <li className="cast-item-container">
      <img className="cast-image" src={imageUrl} alt={`${originalName}`} />
      <p className="main-name-ci">{originalName}</p>
      <p className="main-name-ci character-name-ci">as {characterName}</p>
    </li>
  )
}

export default CastItem
