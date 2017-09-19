import { normalize } from 'normalizr'
import axios from 'axios';

import * as types from '../constants/pages_types';
import { pageEntity } from '../actions/schema'

export const pageFetching = ( status ) => {
  return {
    type: types.PAGES_REQUEST_STATUS,
    status
  }
}

export const getPageSuccess = ( data ) => {
  return {
    type: types.GET_PAGE_SUCCESS,
    data: normalize( data, pageEntity )
  }
}

export const getPageFailure = ( error ) => {
  return {
    type: types.GET_PAGE_FAILURE,
    error
  }
}

export const apiGetPage = ( id ) => {
  return dispatch => {
    dispatch( pageFetching( true ) );
    return axios.get( `http://localhost:3002/api/pages/${ id }` )
      .then( response => {
        dispatch( pageFetching( false ) );
        dispatch( getPageSuccess( response.data ) )
      }, error => {
        dispatch( pageFetching( false ) );
        dispatch( getPageFailure( error ) )
      })
  }
}
