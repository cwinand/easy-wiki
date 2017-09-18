import { combineReducers } from 'redux'

import * as types from '../constants/pages_types'
import * as categories_types from '../constants/categories_types'

const pagesById = ( state = {}, action ) => {
  switch ( action.type ) {
    case categories_types.GET_CATEGORIES_SUCCESS:
      return action.data.entities.pages
    case types.GET_PAGE_SUCCESS:
      return {
        ...state,
        [ action.data.result ]: action.data.entities.pages[ action.data.result ]
      }
    default:
      return state
  }
}

const selectedPage = ( state = null, action ) => {
  switch ( action.type ) {
    case types.GET_PAGE_SUCCESS:
      return action.data.result
    default:
      return state
  }
}

const pageFetching = ( state = false, action ) => {
  switch ( action.type ) {
    case types.PAGES_REQUEST_STATUS:
      return action.status
    default:
      return state
  }
}

const pages = combineReducers({
  byId: pagesById,
  active: selectedPage,
  isFetching: pageFetching
})

export default pages;
