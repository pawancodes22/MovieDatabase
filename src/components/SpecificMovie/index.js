import {useEffect, useState} from 'react'

import {Triangle} from 'react-loader-spinner'

import CastItem from '../CastItem'

import {
  PageDiv,
  MainHeading,
  MovieDetailsContainer,
  MovieImage,
  MovieContent,
  MovieName,
  OtherMovieItem,
  ContentHeading,
  GenreItem,
  ContentContainer,
  GenreValuesContainer,
  BufferContainer,
  CastContainer,
} from './styledComponents'

const SpecificMovie = props => {
  const {match} = props
  const {params} = match
  const {id} = params
  const [apiStatus, setApiStatus] = useState(false)
  const [movieDetails, setMovieDetails] = useState({genres: []})
  const [castDetails, setCastDetails] = useState([])
  const apiKey = 'a2c9b2e6e94158353df482647afdbe9e'

  function changeApiStatus() {
    setTimeout(() => {
      setApiStatus(true)
    }, 2000)
  }

  const fetchMovieDetails = async () => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    const response = await fetch(movieUrl)
    const item = await response.json()
    const rearrangedResponse = {
      imageUrl: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      title: item.original_title,
      rating: item.vote_average,
      id: item.id,
      genres: item.genres.map(item2 => ({
        id: item2.id,
        name: item2.name,
      })),
      duration: item.runtime,
      releaseYear: item.release_date.slice(0, 4),
    }
    setMovieDetails(rearrangedResponse)
  }

  const fetchCastDetails = async () => {
    const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    const response = await fetch(castUrl)
    const jsonResponse = await response.json()
    const rearrangedResponse = jsonResponse.cast.map(item => ({
      imageUrl: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
      originalName: item.original_name,
      characterName: item.character,
      id: item.id,
    }))
    setCastDetails(rearrangedResponse)
  }

  useEffect(() => {
    fetchMovieDetails()
    fetchCastDetails()
    changeApiStatus()
  }, [])

  const displayData = () => (
    <PageDiv>
      <MainHeading>Movie Details:</MainHeading>
      <MovieDetailsContainer>
        <MovieImage src={movieDetails.imageUrl} alt="movie" />
        <MovieContent>
          <MovieName>{movieDetails.title}</MovieName>
          <ContentContainer>
            <ContentHeading>Genres:</ContentHeading>
            <GenreValuesContainer>
              {movieDetails.genres.map(item => (
                <GenreItem key={item.id}>{item.name}</GenreItem>
              ))}
            </GenreValuesContainer>
          </ContentContainer>
          <ContentContainer>
            <ContentHeading>Duration:</ContentHeading>
            <OtherMovieItem>{movieDetails.duration} mins</OtherMovieItem>
          </ContentContainer>
          <ContentContainer>
            <ContentHeading>Release Year:</ContentHeading>
            <OtherMovieItem>{movieDetails.releaseYear}</OtherMovieItem>
          </ContentContainer>
          <ContentContainer>
            <ContentHeading>Rating:</ContentHeading>
            <OtherMovieItem>{movieDetails.rating}</OtherMovieItem>
          </ContentContainer>
        </MovieContent>
      </MovieDetailsContainer>
      <MainHeading>Cast Details:</MainHeading>
      <CastContainer>
        {castDetails.map(item => (
          <CastItem key={item.id} item={item} />
        ))}
      </CastContainer>
    </PageDiv>
  )

  const displayLoader = () => (
    <BufferContainer>
      <Triangle
        height="80"
        width="80"
        color="#c603fc"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </BufferContainer>
  )

  return apiStatus ? displayData() : displayLoader()
}
export default SpecificMovie
