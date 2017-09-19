import * as actions from './categories';
import * as types from '../constants/categories_types';

import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
axios.defaults.adapter = httpAdapter;

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { normalize } from 'normalizr'
import { categoryEntity, categoriesSchema } from './schema'

const mockStore = configureMockStore( [ thunkMiddleware ] )

describe( 'Synchronous category actions', () => {

  test( 'should create an action to select a single category', () => {
    const expectedAction = {
      type: types.SELECT_CATEGORY,
      id: 1
    }

    expect( actions.selectCategory( 1 ) ).toEqual( expectedAction )
  })

  test( 'should create an action to show/hide the add category form', () => {
    const expectedShowAction = {
      type: types.CHANGE_NEW_VISIBILITY,
      status: true
    }
    const expectedHideAction = {
      type: types.CHANGE_NEW_VISIBILITY,
      status: false
    }

    expect( actions.changeNewVisibility( true ) ).toEqual( expectedShowAction )
    expect( actions.changeNewVisibility( false ) ).toEqual( expectedHideAction )
  })

  test( 'should create an action to show/hide the edit category form', () => {
    const expectedShowAction = {
      type: types.CHANGE_EDIT_VISIBILITY,
      status: true
    }
    const expectedHideAction = {
      type: types.CHANGE_EDIT_VISIBILITY,
      status: false
    }

    expect( actions.changeEditVisibility( true ) ).toEqual( expectedShowAction )
    expect( actions.changeEditVisibility( false ) ).toEqual( expectedHideAction )
  })

  test( 'should create an action to indicate the status of a categories API request', () => {
    const expectedFetchingAction = {
      type: types.CATEGORIES_REQUEST_STATUS,
      status: true
    }
    const expectedFinishedAction = {
      type: types.CATEGORIES_REQUEST_STATUS,
      status: false
    }

    expect( actions.categoriesFetching( true ) ).toEqual( expectedFetchingAction );
    expect( actions.categoriesFetching( false ) ).toEqual( expectedFinishedAction );
  })

  test( 'should create an action to move a category in the array of categories', () => {
    const expectedAction = {
      type: types.MOVE_CATEGORY,
      data: {}
    }

    expect( actions.moveCategory( {} ) ).toEqual( expectedAction )
  })

  test( 'should create an action to receive multiple categories', () => {
    const expectedAction = {
      type: types.GET_CATEGORIES_SUCCESS,
      data: normalize( [ { id: 1 }, { id: 2 } ], categoriesSchema )
    }

    expect( actions.getCategoriesSuccess( [ { id: 1 }, { id: 2 } ] ) ).toEqual( expectedAction );
  })

  // Add test to handle failure of get request

  test( 'should create an action to receive a single category', () => {
    const expectedAction = {
      type: types.POST_CATEGORY_SUCCESS,
      data: normalize( { id: 1 }, categoryEntity )
    }

    expect( actions.postCategorySuccess( { id: 1 } ) ).toEqual( expectedAction );
  });

  // Add test to handle failure of post request

  test( 'should create an action to update a category', () => {
    const expectedAction = {
      type: types.PUT_CATEGORY_SUCCESS,
      data: normalize( { id: 1 }, categoryEntity )
    }

    expect( actions.putCategorySuccess( { id: 1 } ) ).toEqual( expectedAction );
  });

  test( 'should create an action to update multiple categories', () => {
    const expectedAction = {
      type: types.PUT_CATEGORIES_SUCCESS,
      data: normalize( [ { id: 1, order: 1 } ], categoriesSchema )
    }

    expect( actions.putCategoriesSuccess( [ { id: 1, order: 1 } ] ) ).toEqual( expectedAction );
  })

  test( 'should create an action to revert multiple categories', () => {
    const expectedAction = {
      type: types.PUT_CATEGORIES_FAILURE,
      error: 'Error',
      previousCategoryIds: [ 0, 1 ]
    }

    expect( actions.putCategoriesFailure( 'Error', [ 0, 1 ] ) ).toEqual( expectedAction )
  })

  test( 'should create an action to delete a category', () => {
    const expectedAction = {
      type: types.DELETE_CATEGORY_SUCCESS,
      id: 1
    }

    expect( actions.deleteCategorySuccess( 1 ) ).toEqual( expectedAction );
  });
});

describe( 'Asynchronous category functions', () => {
  afterEach( () => {
    nock.cleanAll()
  })

  test( 'creates GET_CATEGORIES_SUCCESS when request has succeeded', () => {
    const expectedActions = [
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: true
      },
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: false
      },
      {
        type: types.GET_CATEGORIES_SUCCESS,
        data: normalize( [ { id: 1 }, { id: 2 } ], categoriesSchema )
      }
    ]

    nock( 'http://localhost:3002' )
      .get( '/api/categories' )
      .reply( 200, [ { id: 1 }, { id: 2 } ] )

    const store = mockStore()

    return store.dispatch( actions.apiGetCategories() ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions )
    })
  })

  test( 'creates POST_CATEGORY_SUCCESS when request has succeeded', () => {
    const expectedActions = [
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: true
      },
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: false
      },
      {
        type: types.POST_CATEGORY_SUCCESS,
        data: normalize( { id: 1, title: "Test" }, categoryEntity )
      }
    ]

    nock( 'http://localhost:3002' )
      .post( '/api/categories' )
      .reply( 200, { id: 1, title: "Test"} )

    const store = mockStore()

    return store.dispatch( actions.apiPostCategory( "Test" ) ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions )
    })
  })

  test( 'creates PUT_CATEGORY_SUCCESS when request has succeeded', () => {
    const expectedActions = [
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: true
      },
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: false
      },
      {
        type: types.PUT_CATEGORY_SUCCESS,
        data: normalize( { id: 1, title: "Test" }, categoryEntity )
      }
    ]

    nock( 'http://localhost:3002' )
      .put( '/api/categories/1' )
      .reply( 200, { id: 1, title: "Test" } )

    const store = mockStore()

    return store.dispatch( actions.apiPutCategory( 1, { title: "Test" } ) ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions )
    })
  })

  test( 'creates PUT_CATEGORIES_SUCCESS when request has succeeded', () => {
    const expectedActions = [
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: true
      },
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: false
      },
      {
        type: types.PUT_CATEGORIES_SUCCESS,
        data: normalize( [ { id: 1, order: 1 } ], categoriesSchema )
      }
    ]

    nock( 'http://localhost:3002' )
      .put( '/api/categories' )
      .reply( 200, [ { id: 1, order: 1 } ] )

    const store = mockStore()

    return store.dispatch( actions.apiPutCategories( [ 1 ], [ { id: 1, order: 1 } ] ) ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions )
    })
  })

  test( 'creates PUT_CATEGORIES_FAILURE when request has failed', () => {
    const expectedActions = [
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: true
      },
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: false
      },
      {
        type: types.PUT_CATEGORIES_FAILURE,
        error: new Error( 'Error' ),
        previousCategoryIds: [ 2, 1 ]
      }
    ]

    nock( 'http://localhost:3002' )
      .put( '/api/categories' )
      .replyWithError( 'Error' )

    const store = mockStore()

    return store.dispatch( actions.apiPutCategories( [ 1, 2 ], [ { id: 1, order: 0 }, { id: 2, order: 1 } ], [ 2, 1 ] ) )
      .then( () => {
        expect( store.getActions() ).toEqual( expectedActions )
      })
  })

  test( 'creates DELETE_CATEGORY_SUCCESS when request has succeeded', () => {
    const expectedActions = [
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: true
      },
      {
        type: types.CATEGORIES_REQUEST_STATUS, 
        status: false
      },
      {
        type: types.DELETE_CATEGORY_SUCCESS,
        id: 1
      }
    ]

    nock( 'http://localhost:3002' )
      .delete( '/api/categories/1' )
      .reply( 204 )

    const store = mockStore()

    return store.dispatch( actions.apiDeleteCategory( 1 ) ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions )
    })
  })
});

