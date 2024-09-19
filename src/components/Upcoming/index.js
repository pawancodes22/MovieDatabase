import {useState, useEffect} from 'react'

import UpcomingMovieItem from '../UpcomingMovieItem'

import './index.css'

const Upcoming = () => {
  const [upcomingMovies, setUpcomingMoviesData] = useState([])

  const upcomingMoviesApiUrl =
    'https://api.themoviedb.org/3/movie/upcoming?api_key=a2c9b2e6e94158353df482647afdbe9e&language=en-US&page=1'

  const fetchApi = async () => {
    const response = await fetch(upcomingMoviesApiUrl)
    const jsonResponse = await response.json()
    const rearrangedResponse = jsonResponse.results.map(item => ({
      imageUrl: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      title: item.original_title,
      rating: item.vote_average,
      id: item.id,
    }))
    setUpcomingMoviesData(rearrangedResponse)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="page-div-u">
      <ul className="upcoming-movies-container-u">
        {upcomingMovies.map(item => (
          <UpcomingMovieItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}
export default Upcoming
