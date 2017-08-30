import * as types from '../constants/categories_types'

const initialState = {
  isFormShown: false,
  data: {
    id: undefined,
    title: '',
    pages: []
  }
}

const category = ( state = initialState, action ) => {
  switch( action.type ) {
    case types.CHANGE_EDIT_FORM_VISIBILITY:
      return {
        ...state,
        isFormShown: action.status
      }
    default:
      return state
  }
}

export default category;
