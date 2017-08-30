import axios from 'axios'
import * as types from '../constants/categories_types'
import { categoriesRequest } from './categories'

export const changeFormVisibility = ( status ) => {
  return {
    type: types.CHANGE_EDIT_FORM_VISIBILITY,
    status
  }
}

const putCategorySuccess = ( data ) => {
  return {
    type: types.PUT_CATEGORY_SUCCESS,
    data
  }
}

const putCategoryFailure = ( error ) => {
  return {
    type: types.PUT_CATEGORY_FAILURE,
    error
  }
}

export const apiPutCategory = ( id, title ) => {
  const formattedUpdates = { title }
  return dispatch => {
    dispatch( categoriesRequest() );
    return axios.put( 'http://localhost:3002/api/categories/' + id, formattedUpdates )
      .then( response => {
        dispatch( putCategorySuccess( response.data ) );
      }, error => {
        dispatch( putCategoryFailure( error ) )
      })
  }
}



