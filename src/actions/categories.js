import * as types from '../constants/categories_types'
import { normalize } from 'normalizr'
import axios from 'axios';

import { categoryEntity, categoriesSchema } from './schema'

export const selectCategory = ( id ) => {
  return {
    type: types.SELECT_CATEGORY,
    id
  }
}

export const changeFormVisibility = ( status ) => {
  return {
    type: types.CHANGE_FORM_VISIBILITY,
    status
  }
}

export const categoriesFetching = ( status ) => {
  return {
    type: types.CATEGORIES_REQUEST_STATUS,
    status
  }
}

export const moveCategory = ( data ) => {
  return {
    type: types.MOVE_CATEGORY,
    data
  }
}

export const getCategoriesSuccess = ( data ) => {
  return {
    type: types.GET_CATEGORIES_SUCCESS,
    data: normalize( data, categoriesSchema )
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
    data: normalize( data, categoryEntity )
  }
}

export const postCategoryFailure = ( error ) => {
  return {
    type: types.POST_CATEGORY_FAILURE,
    error
  }
}
export const putCategoriesSuccess = ( data ) => {
  return {
    type: types.PUT_CATEGORIES_SUCCESS,
    data: normalize( data, categoriesSchema )
  }
}

export const putCategoriesFailure = ( error, previousCategoryIds ) => {
  return {
    type: types.PUT_CATEGORIES_FAILURE,
    error,
    previousCategoryIds
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
    dispatch( categoriesFetching( true ) );
    return axios.get( 'http://localhost:3002/api/categories' )
      .then( response => {
        dispatch( categoriesFetching( false ) );
        dispatch(getCategoriesSuccess( response.data ));
      }, error => {
        dispatch( categoriesFetching( false ) );
        dispatch(getCategoriesFailure( error ))
      })
  }
}

export const apiPostCategory = ( title ) => {
  return dispatch => {
    dispatch( categoriesFetching( true ) );
    return axios.post( 'http://localhost:3002/api/categories', { title } )
      .then( response => {
        dispatch( categoriesFetching( false ) );
        dispatch(postCategorySuccess( response.data ) );
      }, error => {
        dispatch( categoriesFetching( false ) );
        dispatch( postCategoryFailure( error ) );
      })
  }
}
export const apiPutCategories = ( ids, updates, previousCategoryIds ) => {
  return dispatch => {
    dispatch( categoriesFetching( true ) );
    return axios.put( 'http://localhost:3002/api/categories', { ids, updates } )
      .then( response => {
        dispatch( categoriesFetching( false ) );
        dispatch( putCategoriesSuccess( response.data ) );
      }, error => {
        dispatch( categoriesFetching( false ) );
        dispatch( putCategoriesFailure( error, previousCategoryIds ) )
      })
  }
}

export const apiDeleteCategory = ( id ) => {
  return dispatch => {
    dispatch( categoriesFetching( true ) );
    return axios.delete( 'http://localhost:3002/api/categories/' + id )
      .then( response => {
        dispatch( categoriesFetching( false ) );
        dispatch( deleteCategorySuccess( id ) );
      }, error => {
        dispatch( categoriesFetching( false ) );
        dispatch( deleteCategoryFailure( error ) )
      })
  }
}
