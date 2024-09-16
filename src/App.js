import {useState} from 'react'

import {Switch, Route} from 'react-router-dom'

import Popular from './components/Popular'

import TopRated from './components/TopRated'

import Upcoming from './components/Upcoming'

import Header from './components/Header'

import SpecificMovie from './components/SpecificMovie'

import MovieDatabaseContext from './context/MovieDatabaseContext'

import './App.css'

// write your code here
const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [currentSearchValue, setCurrentSearchValue] = useState('')

  const changeSearchValue = event => {
    setSearchValue(event.target.value)
    console.log(searchValue, event.target.value)
  }

  const changeCurrentSearchValue = () => {
    setCurrentSearchValue(searchValue)
  }

  return (
    <MovieDatabaseContext.Provider
      value={{
        searchValue,
        changeSearchValue,
        currentSearchValue,
        changeCurrentSearchValue,
      }}
    >
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Popular} />
          <Route path="/top-rated" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/movies/:id" component={SpecificMovie} />
        </Switch>
      </>
    </MovieDatabaseContext.Provider>
  )
}

export default App
