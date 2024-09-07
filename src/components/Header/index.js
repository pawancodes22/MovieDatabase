import {faBars} from '@fortawesome/free-solid-svg-icons'

import {useState} from 'react'

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
} from './styledComponents'

const Header = () => {
  const [showHamburgerMenu, setVisibility] = useState(false)

  const changeVisibility = () => {
    setVisibility(prev => !prev)
  }

  return (
    <MainContainer>
      <DivContainer>
        <LargeItem to="/">
          <Heading>MovieDB</Heading>
        </LargeItem>
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
}
export default Header
