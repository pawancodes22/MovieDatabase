import React from 'react'

const MovieDatabaseContext = React.createContext({
  searchValue: '',
  changeSearchValue: () => {},
  currentSearchValue: '',
  changeCurrentSearchValue: () => {},
})

export default MovieDatabaseContext
