import {withRouter} from 'react-router-dom'

import {MdOutlineStar} from 'react-icons/md'

import './index.css'

const UpcomingMovieItem = props => {
  const {item} = props
  const {id, imageUrl, title, rating} = item
  const showDetails = () => {
    const {history} = props
    history.replace(`movies/${id}`)
  }
  return (
    <li className="movie-item-u">
      <img className="movie-image-u" src={imageUrl} alt={`${title}`} />
      <div className="content-container-u">
        <p className="movie-heading-u">{title}</p>
        <div className="rating-container-u">
          <MdOutlineStar className="star-image-u" />
          <p className="movie-heading-u">{rating}</p>
        </div>
        <button className="view-details-u" onClick={showDetails}>
          View Details
        </button>
      </div>
    </li>
  )
}
export default withRouter(UpcomingMovieItem)
