import styled from 'styled-components'

import {MdOutlineStar} from 'react-icons/md'

export const MovieItem = styled.li`
  list-style-type: none;
  width: 180px;
  margin: 0px 15px 15px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-style: solid;
  border-color: #f803fc;
  border-radius: 5px;
`

export const MovieImage = styled.img`
  width: 100%;
`

export const MovieHeading = styled.p`
  margin: 0px;
  padding: 0px;
  font-family: 'Bree Serif';
  text-align: center;
`

export const StarImage = styled(MdOutlineStar)`
  color: yellow;
  margin-right: 5px;
  font-size: 20px;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin: 5px 0px 5px 0px;
`

export const ViewDetails = styled.button`
  color: white;
  background-color: #639af2;
  width: 100%;
  padding: 10px;
  border-style: none;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
