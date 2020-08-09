import { Dispatch } from 'redux'

export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST'
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR'

export const getReferenceExports = ({pageNumber, genres}) => async (dispatch: Dispatch): Promise<void> => {
  dispatch({
    type: GET_MOVIES_REQUEST,
  })
  const formatedGenres = genres.join(',');
  const APP_KEY = '4237669ebd35e8010beee2f55fd45546'
  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${formatedGenres}`

  try {
    const response = await fetch(URL)
    const data = await response.json()
    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_MOVIES_ERROR,
      payload: error,
      error: true,
    })
  }
}
