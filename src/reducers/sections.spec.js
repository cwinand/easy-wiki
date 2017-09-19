import sections from './sections'
import * as page_types from '../constants/pages_types'

import { normalize } from 'normalizr'
import { sectionEntity } from '../actions/schema'

describe( 'Sections reducer', () => {
  test( 'adds multiple sections according to currently active page', () => {
    const action = {
      type: page_types.GET_PAGE_SUCCESS,
      data: normalize( [ { id: 1 } ], [ sectionEntity ] )
    }
    const oldState = {}
    const state = sections( oldState, action )

    expect( state.byId ).toEqual( { 1: { id: 1 } } )
  })
})
