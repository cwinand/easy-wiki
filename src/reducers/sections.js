import { combineReducers } from 'redux'

import * as pages_types from '../constants/pages_types'

const sectionsById = ( state = {}, action ) => {
  switch ( action.type ) {
    case pages_types.GET_PAGE_SUCCESS:
      return action.data.entities.sections

    default:
      return state
  }
}

const sections = combineReducers({
  byId: sectionsById
})

export default sections