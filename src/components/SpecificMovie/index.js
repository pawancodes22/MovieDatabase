import {useEffect, useState} from 'react'

import {Triangle} from 'react-loader-spinner'

import CastItem from '../CastItem'

import './index.css'

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
    <div className="page-div-spm">
      <h1 className="main-heading-spm">Movie Details:</h1>
      <div className="movie-details-container-spm">
        <img
          className="movie-image-spm"
          src={movieDetails.imageUrl}
          alt="movie"
        />
        <div className="movie-content-spm">
          <p className="movie-name-spm">{movieDetails.title}</p>
          <div className="content-container-spm">
            <p className="content-heading-spm">Genres:</p>
            <ul className="genre-values-container-spm">
              {movieDetails.genres.map(item => (
                <span className="genre-item-spm" key={item.id}>
                  {item.name}
                </span>
              ))}
            </ul>
          </div>
          <div className="content-container-spm">
            <p className="content-heading-spm">Duration:</p>
            <p className="other-movie-item-spm">{movieDetails.duration} mins</p>
          </div>
          <div className="content-container-spm">
            <p className="content-heading-spm">Release Year:</p>
            <p className="other-movie-item-spm">{movieDetails.releaseYear}</p>
          </div>
          <div className="content-container-spm">
            <p className="content-heading-spm">Rating:</p>
            <p className="other-movie-item-spm">{movieDetails.rating}</p>
          </div>
        </div>
      </div>
      <h1 className="main-heading-spm">Cast Details:</h1>
      <ul className="cast-container-spm">
        {castDetails.map(item => (
          <CastItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )

  const displayLoader = () => (
    <div className="buffer-container-spm">
      <Triangle
        height="80"
        width="80"
        color="#c603fc"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )

  return apiStatus ? displayData() : displayLoader()
}
export default SpecificMovie
