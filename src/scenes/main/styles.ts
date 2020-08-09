import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 20px;
`

export const GenresContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
`

export const GenresTitle = styled.h4`
  margin: 0;
  font-size: 24px;
  color: ${({theme}) => theme.colors.blue};
`

export const GenresList = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 20px;

  > button {
    margin: 5px;
  } 
`
