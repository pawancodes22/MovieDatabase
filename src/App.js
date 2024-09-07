import {Switch, Route} from 'react-router-dom'

import Popular from './components/Popular'

import TopRated from './components/TopRated'

import Upcoming from './components/Upcoming'

import Header from './components/Header'

import SpecificMovie from './components/SpecificMovie'

import './App.css'

// write your code here
const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Popular} />
      <Route path="/top-rated" component={TopRated} />
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/movies/:id" component={SpecificMovie} />
    </Switch>
  </>
)

export default App
