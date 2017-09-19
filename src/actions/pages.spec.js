import * as actions from './pages'
import * as types from '../constants/pages_types'
import * as categories_types from '../constants/categories_types'

import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
axios.defaults.adapter = httpAdapter;

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { normalize } from 'normalizr'
import { pageEntity } from './schema'

const mockStore = configureMockStore( [ thunkMiddleware ] )

describe( 'Synchronous page actions', () => {
  test( 'creates an action to set the page request status', () => {
    const expectedFetchingAction = {
      type: types.PAGES_REQUEST_STATUS,
      status: true
    }
    const expectedFinishedAction = {
      type: types.PAGES_REQUEST_STATUS,
      status: false
    }

    expect( actions.pageFetching( true ) ).toEqual( expectedFetchingAction );
    expect( actions.pageFetching( false ) ).toEqual( expectedFinishedAction );
  })

  test( 'creates an action to receive a single page', () => {
    const expectedAction = {
      type: types.GET_PAGE_SUCCESS,
      data: normalize( { id: 1 }, pageEntity )
    }

    expect( actions.getPageSuccess( { id: 1 } ) ).toEqual( expectedAction )
  })
})

describe( 'Asynchronous page actions', () => {
  afterEach( () => {
    nock.cleanAll()
  })

  test( 'creates GET_PAGE_SUCCESS action when request has succeeded', () => {
    const expectedActions = [
      {
        type: types.PAGES_REQUEST_STATUS,
        status: true
      },
      {
        type: types.PAGES_REQUEST_STATUS,
        status: false
      },
      {
        type: types.GET_PAGE_SUCCESS,
        data: normalize( { id: 1 }, pageEntity )
      }
    ]

    nock( 'http://localhost:3002' )
      .get( '/api/pages/1' )
      .reply( 200, { id: 1 } )

    const store = mockStore()

    return store.dispatch( actions.apiGetPage( 1 ) ).then( () => {
      expect( store.getActions() ).toEqual( expectedActions )
    })
  })
})
