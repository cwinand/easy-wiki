import * as types from '../constants/pages_types'

const initialState = {
  isFetching: false,
  items: [],
  active: {
    data: {
      sections: []
    }
  }
}

const pages = ( state = initialState, action ) => {
  switch( action.type ) {
    case types.PAGES_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.GET_PAGE_SUCCESS:
      return {
        ...state,
        active: {
          data: action.data
        }
      }
    default:
      return state;
  }
}

export default pages;
