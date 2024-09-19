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
        const {
          searchValue,
          changeSearchValue,
          currentSearchValue,
          changeCurrentSearchValue,
        } = value
        return (
          <div className="main-container-header">
            <div className="div-container-header">
              <Link className="large-item" to="/">
                <h1 className="heading-header">MovieDB</h1>
              </Link>
              <div className="search-box-container large-scn-search-box">
                <input
                  className="search-box"
                  placeholder="Enter movie name"
                  value={searchValue}
                  onChange={changeSearchValue}
                  type="search"
                />
                <button
                  className="no-border-button"
                  onClick={changeCurrentSearchValue}
                >
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
                  <div className="search-box-container small-scn-search-box">
                    <input
                      className="search-box"
                      placeholder="Enter movie name"
                      value={searchValue}
                      onChange={changeSearchValue}
                      type="search"
                    />
                    <button
                      className="no-border-button"
                      onClick={changeCurrentSearchValue}
                    >
                      <FaSearch className="search-icon" />
                    </button>
                  </div>
                </li>
                <li className="mobile-option-item">
                  <Link className="link-item-header" to="/">
                    Popular
                  </Link>
                  <hr className="horizontal-line-header" />
                </li>
                <li className="mobile-option-item">
                  <Link className="link-item-header" to="/top-rated">
                    Top Rated
                  </Link>
                  <hr className="horizontal-line-header" />
                </li>
                <li className="mobile-option-item">
                  <Link className="link-item-header" to="/upcoming">
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
