import {useState, useEffect} from 'react'

import MovieDatabaseContext from '../../context/MovieDatabaseContext'

import TopRatedMovieItem from '../TopRatedMovieItem'

import './index.css'

const TopRated = () => {
  const [topRatedMovies, setTopRatedMoviesData] = useState([])

  const topRatedMoviesApiUrl =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=a2c9b2e6e94158353df482647afdbe9e&language=en-US&page=1'

  const fetchApi = async () => {
    const response = await fetch(topRatedMoviesApiUrl)
    const jsonResponse = await response.json()
    const rearrangedResponse = jsonResponse.results.map(item => ({
      imageUrl: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      title: item.original_title,
      rating: item.vote_average,
      id: item.id,
    }))
    setTopRatedMoviesData(rearrangedResponse)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <MovieDatabaseContext.Consumer>
      {value => {
        const {currentSearchValue} = value
        const newMovieItems = topRatedMovies.filter(item =>
          item.title.toLowerCase().includes(currentSearchValue.toLowerCase()),
        )
        return (
          <div className="page-div-tr">
            <div className="top-rated-movies-container-tr">
              {newMovieItems.map(item => (
                <TopRatedMovieItem item={item} key={item.id} />
              ))}
            </div>
          </div>
        )
      }}
    </MovieDatabaseContext.Consumer>
  )
}
export default TopRated
