import {faBars} from '@fortawesome/free-solid-svg-icons'

import {FaSearch} from 'react-icons/fa'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {useState} from 'react'

import {Link} from 'react-router-dom'

import MovieDatabaseContext from '../../context/MovieDatabaseContext'

import './index.css'

const Header = () => {
  const [showHamburgerMenu, setVisibility] = useState(false)

  const changeVisibility = () => {
    setVisibility(prev => !prev)
  }

  return (
    <MovieDatabaseContext.Consumer>
      {value => {
        const {searchValue, changeSearchValue} = value
        return (
          <div className="main-container-header">
            <div className="div-container-header">
              <Link className="large-item" to="/">
                <h1 className="heading-header">MovieDB</h1>
              </Link>
              <div className="search-box-container">
                <input
                  className="search-box"
                  placeholder="Enter movie name"
                  value={searchValue}
                  onChange={changeSearchValue}
                />
                <button className="no-border-button">
                  <FaSearch className="search-icon" />
                </button>
              </div>
              <button
                className="basic-button-header"
                onClick={changeVisibility}
              >
                <FontAwesomeIcon className="hamburger-icon" icon={faBars} />
              </button>
              <ul className="mobile-options-container large-options-container">
                <li className="large-option-item">
                  <Link className="large-item" to="/">
                    Popular
                  </Link>
                </li>
                <li className="large-option-item">
                  <Link className="large-item" to="/top-rated">
                    Top Rated
                  </Link>
                </li>
                <li className="large-option-item">
                  <Link className="large-item" to="/upcoming">
                    Upcoming
                  </Link>
                </li>
              </ul>
            </div>

            {showHamburgerMenu && (
              <ul className="mobile-options-container">
                <li className="mobile-option-item">
                  <Link className="mobile-item-header" to="/">
                    Popular
                  </Link>
                  <hr className="horizontal-line-header" />
                </li>
                <li className="mobile-option-item">
                  <Link className="mobile-item-header" to="/top-rated">
                    Top Rated
                  </Link>
                  <hr className="horizontal-line-header" />
                </li>
                <li className="mobile-option-item">
                  <Link className="mobile-item-header" to="/upcoming">
                    Upcoming
                  </Link>
                  <hr className="horizontal-line-header" />
                </li>
              </ul>
            )}
          </div>
        )
      }}
    </MovieDatabaseContext.Consumer>
  )
}
export default Header
