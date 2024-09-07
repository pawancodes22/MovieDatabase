import styled from 'styled-components'

export const PageDiv = styled.div`
  padding: 20px;
  background-color: #cea8e3;
  min-height: 100vh;
  font-family: 'Roboto';
`

export const MainHeading = styled.h1`
  margin: 0px;
  padding; 0px;
  font-style: italic;
  font-size: 20px;
  text-decoration: underline;
  margin-bottom: 20px;
`

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MovieImage = styled.img`
  height: 180px;
  width: 150px;
  align-self: center;
`

export const MovieContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const MovieName = styled.p`
  font-family: 'Bree Serif';
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  align-self: center;
  margin-bottom: 15px;
`

export const OtherMovieItem = styled.p`
  font-family: 'Roboto';
  margin: 0px;
`

export const GenreItem = styled.span`
  margin-right: 7px;
`

export const ContentContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`

export const GenreValuesContainer = styled.ul`
  padding: 0px;
  margin: 0px;
`

export const ContentHeading = styled(OtherMovieItem)`
  font-weight: bold;
  font-style: italic;
  margin-right: 10px;
`

export const BufferContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #cea8e3;
`

export const CastContainer = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
