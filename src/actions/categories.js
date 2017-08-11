import * as types from '../constants/action_types';
import axios from 'axios';

import { arrayMove } from 'react-sortable-hoc';

export const makeRequest = () => {
  return {
    type: types.MAKE_REQUEST
  }
}

export const receiveCategories = (data) => {
  return {
    type: types.RECEIVE_CATEGORIES,
    data
  }
}

export const receiveCategory = (data) => {
  return {
    type: types.RECEIVE_CATEGORY,
    data
  }
}

export const deleteCategory = (id) => {
  return {
    type: types.DELETE_CATEGORY,
    id
  };
}

export const moveCategory = (oldIndex, newIndex) => {
  return {
    type: types.MOVE_CATEGORY,
    oldIndex,
    newIndex
  }
}

export const updateCategory = (data) => {
  return {
    type: types.UPDATE_CATEGORY,
    data
  }
}

export const updateCategories = ( data ) => {
  return {
    type: types.UPDATE_CATEGORIES,
    data
  }
}

export const updateCategoriesError = ( error ) => {
  return {
    type: types.UPDATE_CATEGORIES_ERROR,
    error
  }
}
export const apiGetCategories = () => {
  return dispatch => {
    dispatch( makeRequest() );
    return axios.get('http://localhost:3002/api/categories')
      .then( response => {
        dispatch(receiveCategories( response.data ));
      });
  }
}

export const apiPostCategory = (title) => {
  return dispatch => {
    dispatch( makeRequest() );
    return axios.post('http://localhost:3002/api/categories', { title })
      .then( response => {
        dispatch(receiveCategory( response.data ) );
      });
  }
}

export const apiPutCategory = (id, updates) => {
  return dispatch => {
    dispatch( makeRequest() );
    return axios.put('http://localhost:3002/api/categories/' + id, updates)
      .then( response => {
        dispatch( updateCategory( response.data ) );
      });
  }
}

export const apiPutCategories = (ids, updates) => {
  return dispatch => {
    dispatch( makeRequest() );
    return axios.put('http://localhost:3002/api/categories', { ids, updates })
      .then( response => {
        const normalizedData = normalizeById(response.data);
        dispatch( updateCategories( normalizedData ) );
      })
      .catch( error => {
        dispatch( updateCategoriesError( error ) )
      })
  }
}

export const apiDeleteCategory = (id) => {
  return dispatch => {
    dispatch( makeRequest() );
    return axios.delete('http://localhost:3002/api/categories/' + id)
      .then( response => {
        dispatch( deleteCategory( id ) );
      });
  }
}

export const updateCategoriesOrder = (oldIndex, newIndex, categories) => {
  const reordered = arrayMove( categories, oldIndex, newIndex )
    .map((item, index) => {
      item.order = index;
      return { 
        order: index,
        id: item.id
      }
    });

  const lowIndex = oldIndex < newIndex ? oldIndex : newIndex;
  const highIndex = oldIndex > newIndex ? oldIndex : newIndex;

  const updates = reordered.slice(lowIndex, highIndex + 1);
  const ids = updates.reduce( (acc, item) => acc.concat(item.id), [] );

  return dispatch => {
    dispatch( apiPutCategories( ids, updates ) )
  }
}

const normalizeById = (data) => {
  return data.reduce( (obj, item) => { 
    let newObj = {};
    newObj[item.id] = item;
    return Object.assign( obj, newObj ) 
  }, {})
}
