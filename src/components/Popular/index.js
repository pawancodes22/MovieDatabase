import {useState, useEffect} from 'react'

import PopularMovieItem from '../PopularMovieItem'

import MovieDatabaseContext from '../../context/MovieDatabaseContext'

import {PageDiv, PopularMoviesContainer} from './styledComponents'

const Popular = () => {
  const [popularMovies, setPopularMoviesData] = useState([])
  const popularMoviesApiUrl =
    'https://api.themoviedb.org/3/movie/popular?api_key=a2c9b2e6e94158353df482647afdbe9e&language=en-US&page=1'

  const fetchApi = async () => {
    const response = await fetch(popularMoviesApiUrl)
    const jsonResponse = await response.json()
    const rearrangedResponse = jsonResponse.results.map(item => ({
      imageUrl: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      title: item.original_title,
      rating: item.vote_average,
      id: item.id,
    }))
    setPopularMoviesData(rearrangedResponse)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <MovieDatabaseContext.Consumer>
      {value => {
        const {searchValue} = value
        const newMovieItems = popularMovies.filter(item =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
        return (
          <PageDiv>
            <PopularMoviesContainer>
              {newMovieItems.map(item => (
                <PopularMovieItem item={item} key={item.id} />
              ))}
            </PopularMoviesContainer>
          </PageDiv>
        )
      }}
    </MovieDatabaseContext.Consumer>
  )
}
export default Popular
