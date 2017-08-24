import * as types from '../constants/action_types';
import { normalizeById } from '../utils/categories'

import axios from 'axios';

export const selectCategory = ( id ) => {
  return {
    type: types.SELECT_CATEGORY,
    id
  }
}

export const categoriesRequest = () => {
  return {
    type: types.CATEGORIES_REQUEST,
  }
}

export const getCategoriesSuccess = ( data ) => {
  return {
    type: types.GET_CATEGORIES_SUCCESS,
    data
  }
}

export const getCategoriesFailure = ( error ) => {
  return {
    type: types.GET_CATEGORIES_FAILURE,
    error
  }
}

export const postCategorySuccess = ( data ) => {
  return {
    type: types.POST_CATEGORY_SUCCESS,
    data
  }
}

export const postCategoryFailure = ( error ) => {
  return {
    type: types.POST_CATEGORY_FAILURE,
    error
  }
}

export const putCategorySuccess = ( data ) => {
  return {
    type: types.PUT_CATEGORY_SUCCESS,
    data
  }
}

export const putCategoryFailure = ( error ) => {
  return {
    type: types.PUT_CATEGORY_FAILURE,
    error
  }
}

export const putCategoriesSuccess = ( data ) => {
  return {
    type: types.PUT_CATEGORIES_SUCCESS,
    data
  }
}

export const putCategoriesFailure = ( error ) => {
  return {
    type: types.PUT_CATEGORIES_FAILURE,
    error
  }
}

export const deleteCategorySuccess = ( id ) => {
  return {
    type: types.DELETE_CATEGORY_SUCCESS,
    id
  };
}

export const deleteCategoryFailure = ( error ) => {
  return {
    type: types.DELETE_CATEGORY_FAILURE,
    error
  };
}

export const apiGetCategories = () => {
  return dispatch => {
    dispatch( categoriesRequest() );
    return axios.get( 'http://localhost:3002/api/categories' )
      .then( response => {
        dispatch(getCategoriesSuccess( response.data ));
      }, error => {
        dispatch(getCategoriesFailure( error ))
      })
  }
}

export const apiPostCategory = ( title ) => {
  return dispatch => {
    dispatch( categoriesRequest() );
    return axios.post( 'http://localhost:3002/api/categories', { title } )
      .then( response => {
        dispatch(postCategorySuccess( response.data ) );
      }, error => {
        dispatch( postCategoryFailure( error ) );
      })
  }
}

export const apiPutCategory = ( id, updates ) => {
  return dispatch => {
    dispatch( categoriesRequest() );
    return axios.put( 'http://localhost:3002/api/categories/' + id, updates )
      .then( response => {
        dispatch( putCategorySuccess( response.data ) );
      }, error => {
        dispatch( putCategoryFailure( error ) )
      })
  }
}

export const apiPutCategories = ( ids, updates ) => {
  return dispatch => {
    dispatch( categoriesRequest() );
    return axios.put( 'http://localhost:3002/api/categories', { ids, updates } )
      .then( response => {
        const normalizedData = normalizeById( response.data );
        dispatch( putCategoriesSuccess( normalizedData ) );
      }, error => {
        dispatch( putCategoriesFailure( error ) )
      })
  }
}

export const apiDeleteCategory = ( id ) => {
  return dispatch => {
    dispatch( categoriesRequest() );
    return axios.delete( 'http://localhost:3002/api/categories/' + id )
      .then( response => {
        dispatch( deleteCategorySuccess( id ) );
      }, error => {
        dispatch( deleteCategoryFailure( error ) )
      })
  }
}


