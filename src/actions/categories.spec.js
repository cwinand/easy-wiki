import * as actions from './categories';
import * as types from '../constants/action_types';

import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
axios.defaults.adapter = httpAdapter;

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

describe('Synchronous category actions', () => {
  
  test('should create an action to indicate a categories API request is ocurring', () => {
    const expectedAction = {
      type: types.CATEGORIES_REQUEST
    }

    expect( actions.categoriesRequest() ).toEqual( expectedAction );
  });

  test('should create an action to receive multiple categories', () => {
    const expectedAction = {
      type: types.GET_CATEGORIES_SUCCESS,
      data: [{}, {}, {}]
    }

    expect( actions.getCategoriesSuccess([{}, {}, {}]) ).toEqual( expectedAction );
  })

  // Add test to handle failure of get request

  test('should create an action to receive a single category', () => {
    const expectedAction = {
      type: types.POST_CATEGORY_SUCCESS,
      data: { id: 1 }
    }

    expect( actions.postCategorySuccess({ id: 1 }) ).toEqual( expectedAction );
  });

  // Add test to handle failure of post request

  test('should create an action to update a category', () => {
    const expectedAction = {
      type: types.PUT_CATEGORY_SUCCESS,
      data: { id: 1 }
    }

    expect( actions.putCategorySuccess({ id: 1 }) ).toEqual( expectedAction );
  });

  test('should create an action to delete a category', () => {
    const expectedAction = {
      type: types.DELETE_CATEGORY_SUCCESS,
      id: 1
    }

    expect( actions.deleteCategorySuccess( 1 ) ).toEqual( expectedAction );
  });


  // test('should create an action to move a category', () => {
  //   const expectedAction = {
  //     type: types.MOVE_CATEGORY,
  //     oldIndex: 0,
  //     newIndex: 1
  //   };

  //   expect(actions.moveCategory(0, 1)).toEqual(expectedAction);
  // });

});

describe('Asynchronous category functions', () => {
  afterEach( () => {
    nock.cleanAll()
  })

  test('creates GET_CATEGORIES_SUCCESS when request has succeeded', () => {
    const expectedActions = [
      { type: types.CATEGORIES_REQUEST },
      { type: types.GET_CATEGORIES_SUCCESS, data: [{ id: 1 }] }
    ]

    nock('http://localhost:3002')
      .get('/api/categories')
      .reply( 200, [{ id: 1 }] )

    const store = mockStore({ items: [] })

    return store.dispatch(actions.apiGetCategories()).then( () => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  test('creates POST_CATEGORY_SUCCESS when request has succeeded', () => {
    const expectedActions = [
      { type: types.CATEGORIES_REQUEST },
      { type: types.POST_CATEGORY_SUCCESS, data: {id: 1, title: "Test"} }
    ]

    nock('http://localhost:3002')
      .post('/api/categories')
      .reply( 200, { id: 1, title: "Test"} )

    const store = mockStore({ items: [] })

    return store.dispatch( actions.apiPostCategory( "Test" ) ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions )
    })
  })

  test('creates PUT_CATEGORY_SUCCESS when request has succeeded', () => {
    const expectedActions = [
      { type: types.CATEGORIES_REQUEST },
      { type: types.PUT_CATEGORY_SUCCESS, data: {id: 1, title: "Test"} }
    ]

    nock('http://localhost:3002')
      .put('/api/categories/1')
      .reply( 200, { id: 1, title: "Test" } )

    const store = mockStore({ items: [] })

    return store.dispatch( actions.apiPutCategory( 1, { title: "Test" } ) ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions )
    })
  })

  test('creates PUT_CATEGORIES_SUCCESS when request has succeeded', () => {
    const expectedActions = [
      { type: types.CATEGORIES_REQUEST },
      { type: types.PUT_CATEGORIES_SUCCESS, data: {1: {id: 1, order: 1}} }
    ]

    nock('http://localhost:3002')
      .put('/api/categories')
      .reply( 200, [{ id: 1, order: 1 }] )

    const store = mockStore({ items: [] })

    return store.dispatch( actions.apiPutCategories( [1], [{ id: 1, order: 1 }] ) ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions )
    })
  })

  test('creates DELETE_CATEGORY_SUCCESS when request has succeeded', () => {
    const expectedActions = [
      { type: types.CATEGORIES_REQUEST },
      { type: types.DELETE_CATEGORY_SUCCESS, id: 1 }
    ]

    nock('http://localhost:3002')
      .delete('/api/categories/1')
      .reply( 200, {id: 1} )

    const store = mockStore({ items: [] })

    return store.dispatch( actions.apiDeleteCategory( 1 ) ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions )
    })
  })
});

