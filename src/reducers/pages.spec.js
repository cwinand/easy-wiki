import pages from './pages'
import * as categories_types from '../constants/categories_types'
import * as types from '../constants/pages_types'

import { normalize } from 'normalizr'
import { pageEntity } from '../actions/schema'

describe( 'Pages reducer', () => {
  test( 'adds multiple pages from categories request', () => {
    const action = {
      type: categories_types.GET_CATEGORIES_SUCCESS,
      data: normalize( [ { id: 1 }, { id: 2 } ], [ pageEntity ] )
    }

    const state = pages( {}, action )

    expect( state.byId ).toEqual( { 1: { id: 1 }, 2: { id: 2 } } )
  })

  test( 'updates a single page', () => {
    const action = {
      type: types.GET_PAGE_SUCCESS,
      data: normalize( { id: 1, title: "Title" }, pageEntity )
    }
    const oldState = {
      byId: {
        1: {
          id: 1
        }
      }
    }
    const state = pages( oldState, action )

    expect( state.byId ).toEqual( { 1: { id: 1, title: "Title" } } )
  })

  test( 'sets id of active page', () => {
    const action = {
      type: types.GET_PAGE_SUCCESS,
      data: normalize( { id: 1 }, pageEntity )
    }
    const oldState = {
      active: null
    }
    const state = pages( oldState, action )

    expect( state.active ).toBe( 1 )
  })

  test( 'sets status of page isFetching flag', () => {
    const action = {
      type: types.PAGES_REQUEST_STATUS,
      status: true
    }
    const oldState = {
      isFetching: false
    }
    const state = pages( oldState, action )

    expect( state.isFetching ).toBe( true )
  })
})
