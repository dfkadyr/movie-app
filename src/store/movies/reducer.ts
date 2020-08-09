import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
} from './actions'
import { IMoviesState, IResult, IAction, IError } from './interface'

const initialState = {
  isFetching: false,
  result: null,
  error: null,
}

export const getMoviesReducer = (
  state: IMoviesState = initialState,
  { type, payload }: IAction<IResult | IError>,
): IMoviesState => {
  switch (type) {
    case GET_MOVIES_REQUEST:
      return {
        isFetching: true,
        result: null,
        error: null,
      }
    case GET_MOVIES_SUCCESS:
      return {
        isFetching: false,
        result: payload as IResult,
        error: null,
      }
    case GET_MOVIES_ERROR:
      return {
        isFetching: false,
        result: null,
        error: payload as IError,
      }
    default:
      return state
  }
}
