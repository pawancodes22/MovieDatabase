import styled from 'styled-components'

export const CastItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  margin: 0px 15px 15px 0px;
`

export const CastImage = styled.img`
  width: 100%;
`

export const MainName = styled.p`
  margin: 0px;
  font-size: 14px;
  font-family: 'Bree Serif';
`

export const CharacterName = styled(MainName)`
  color: grey;
`
