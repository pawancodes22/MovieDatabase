import {faBars} from '@fortawesome/free-solid-svg-icons'

import {useState} from 'react'

import MovieDatabaseContext from '../../context/MovieDatabaseContext'

import {
  MainContainer,
  DivContainer,
  Heading,
  HamburgerIcon,
  MobileOptionsContainer,
  MobileOptionItem,
  MobileItem,
  BasicButton,
  HorizontalLine,
  LargeOptionsContainer,
  LargeOptionItem,
  LargeItem,
  SearchBoxContainer,
  SearchBox,
  SearchIcon,
  NoBorderButton,
} from './styledComponents'

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
          <MainContainer>
            <DivContainer>
              <LargeItem to="/">
                <Heading>MovieDB</Heading>
              </LargeItem>
              <SearchBoxContainer>
                <SearchBox
                  placeholder="Enter movie name"
                  value={searchValue}
                  onChange={changeSearchValue}
                />
                <NoBorderButton>
                  <SearchIcon />
                </NoBorderButton>
              </SearchBoxContainer>
              <BasicButton onClick={changeVisibility}>
                <HamburgerIcon icon={faBars} />
              </BasicButton>
              <LargeOptionsContainer>
                <LargeOptionItem>
                  <LargeItem to="/">Popular</LargeItem>
                </LargeOptionItem>
                <LargeOptionItem>
                  <LargeItem to="/top-rated">Top Rated</LargeItem>
                </LargeOptionItem>
                <LargeOptionItem>
                  <LargeItem to="/upcoming">Upcoming</LargeItem>
                </LargeOptionItem>
              </LargeOptionsContainer>
            </DivContainer>

            {showHamburgerMenu && (
              <MobileOptionsContainer>
                <MobileOptionItem>
                  <MobileItem to="/">Popular</MobileItem>
                  <HorizontalLine />
                </MobileOptionItem>
                <MobileOptionItem>
                  <MobileItem to="/top-rated">Top Rated</MobileItem>
                  <HorizontalLine />
                </MobileOptionItem>
                <MobileOptionItem>
                  <MobileItem to="/upcoming">Upcoming</MobileItem>
                  <HorizontalLine />
                </MobileOptionItem>
              </MobileOptionsContainer>
            )}
          </MainContainer>
        )
      }}
    </MovieDatabaseContext.Consumer>
  )
}
export default Header
