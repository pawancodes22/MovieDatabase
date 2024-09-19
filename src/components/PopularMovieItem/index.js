import {withRouter} from 'react-router-dom'

import {MdOutlineStar} from 'react-icons/md'

import './index.css'

const PopularMovieItem = props => {
  const {item} = props
  const {id, imageUrl, title, rating} = item
  const showDetails = () => {
    const {history} = props
    history.replace(`movies/${id}`)
  }
  return (
    <li className="movie-item-pi">
      <img className="movie-image-pi" src={imageUrl} alt={`${title}`} />
      <div className="content-container-pi">
        <p className="movie-heading-pi">{title}</p>
        <div className="rating-container-pi">
          <MdOutlineStar className="star-image-pi" />
          <p className="movie-heading-pi">{rating}</p>
        </div>
        <button className="view-details-pi" onClick={showDetails}>
          View Details
        </button>
      </div>
    </li>
  )
}
export default withRouter(PopularMovieItem)
