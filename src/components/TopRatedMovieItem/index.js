import {withRouter} from 'react-router-dom'

import {MdOutlineStar} from 'react-icons/md'

import './index.css'

const TopRatedMovieItem = props => {
  const {item} = props
  const {id, imageUrl, title, rating} = item
  const showDetails = () => {
    const {history} = props
    history.replace(`movies/${id}`)
  }
  return (
    <li className="movie-item-tr">
      <img className="movie-image-tr" src={imageUrl} alt={`${title}`} />
      <div className="content-container-tr">
        <p className="movie-heading-tr">{title}</p>
        <div className="rating-container">
          <MdOutlineStar className="star-image-tr" />
          <p className="movie-heading-tr">{rating}</p>
        </div>
        <button className="view-details-tr" onClick={showDetails}>
          View Details
        </button>
      </div>
    </li>
  )
}
export default withRouter(TopRatedMovieItem)
