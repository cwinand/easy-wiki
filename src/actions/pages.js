import * as types from '../constants/pages_types';

import axios from 'axios';

const pagesRequest = () => {
  return {
    type: types.PAGES_REQUEST
  }
}

const getPageSuccess = ( data ) => {
  return {
    type: types.GET_PAGE_SUCCESS,
    data
  }
}

const getPageFailure = ( error ) => {
  return {
    type: types.GET_PAGE_FAILURE,
    error
  }
}

export const apiGetPage = ( id ) => {
  return dispatch => {
    dispatch( pagesRequest() );
    return axios.get( `http://localhost:3002/api/pages/${ id }` )
      .then( response => {
        dispatch( getPageSuccess( response.data ) )
      }, error => {
        dispatch( getPageFailure( error ) )
      })
  }
}
