import {withRouter} from 'react-router-dom'

import {
  MovieItem,
  MovieImage,
  MovieHeading,
  StarImage,
  RatingContainer,
  ViewDetails,
  ContentContainer,
} from './styledComponents'

const TopRatedMovieItem = props => {
  const {item} = props
  const {id, imageUrl, title, rating} = item
  const showDetails = () => {
    const {history} = props
    history.replace(`movies/${id}`)
  }
  return (
    <MovieItem>
      <MovieImage src={imageUrl} alt={`${title} image`} />
      <ContentContainer>
        <MovieHeading>{title}</MovieHeading>
        <RatingContainer>
          <StarImage />
          <MovieHeading>{rating}</MovieHeading>
        </RatingContainer>
        <ViewDetails onClick={showDetails}>View Details</ViewDetails>
      </ContentContainer>
    </MovieItem>
  )
}
export default withRouter(TopRatedMovieItem)
