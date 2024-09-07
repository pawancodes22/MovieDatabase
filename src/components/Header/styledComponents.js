import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const DivContainer = styled.div`
  padding: 15px;
  font-family: 'Roboto';
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BasicButton = styled.button`
  background-color: transparent;
  border-style: none;
  @media (min-width: 768px) {
    display: none;
  }
`

export const HamburgerIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 20px;
`

export const Heading = styled.h1`
  margin: 0px;
  padding: 0px;
  color: white;
  font-family: 'Bree Serif';
  font-size: 20px;
`

export const MainContainer = styled.div`
  background-color: #963bc4;
`

export const MobileOptionsContainer = styled.ul`
  padding: 0 15px 15px 15px;
  margin: 0px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileOptionItem = styled.li`
  list-style-type: none;
  margin-bottom: 0px;
`

export const MobileItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  padding: 0px 0px 0px 5px;
`

export const HorizontalLine = styled.hr`
  margin: 5px 0px 5px 0px;
`

export const LargeOptionsContainer = styled(MobileOptionsContainer)`
  display: flex;
  justify-content: space-between;
  padding: 0px;
  width: 230px;
  media (min-width: 768px) {
    display: inline;
  }
  @media (max-width: 767px) {
    display: none;
  }
`

export const LargeOptionItem = styled(MobileOptionItem)``

export const LargeItem = styled(MobileItem)`
  font-size: 15px;
`
