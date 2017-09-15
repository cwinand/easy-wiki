import categories from './categories'
import * as types from '../constants/categories_types'

import { normalize } from 'normalizr'
import { categoriesSchema, categoryEntity } from '../actions/schema'

describe( 'Categories Reducer', () => {
  test( 'adds multiple categories', () => {
    const action = {
      type: types.GET_CATEGORIES_SUCCESS,
      data: normalize( [ { id: 1 }, { id: 2 } ], categoriesSchema )
    }

    const state = categories( {}, action )

    expect( state.byId ).toEqual( { 1: { id: 1 }, 2: { id: 2 } } )
    expect( state.allIds ).toEqual( [ 1, 2 ] )
  })

  test( 'adds a single category', () => {
    const action = {
      type: types.POST_CATEGORY_SUCCESS,
      data: normalize( { id: 1 }, categoryEntity )
    }

    const state = categories( {}, action )

    expect( state.byId ).toEqual( { 1: { id: 1 } } )
    expect( state.allIds ).toEqual( [ 1 ] )
  })

  test( 'updates a single category', () => {
    const action = {
      type: types.PUT_CATEGORY_SUCCESS,
      data: normalize( { id: 1, title: "Changed" }, categoryEntity )
    }
    const oldState = {
      byId: {
        1: {
          id: 1,
          title: "Not changed"
        }
      }
    }
    const state = categories( oldState, action )

    expect( state.byId ).toEqual( { 1: { id: 1, title: "Changed" } } )
  })

  test( 'removes a single category', () => {
    const action = {
      type: types.DELETE_CATEGORY_SUCCESS,
      id: 1
    }
    const oldState = {
      byId: {
        1: {
          id: 1,
        }
      },
      allIds: [ 1 ]
    }
    const state = categories( oldState, action )

    expect( state.byId ).toEqual( {} )
    expect( state.allIds ).toEqual( [] )
  })

  test( 'updates multiple categories', () => {
    const action = {
      type: types.PUT_CATEGORIES_SUCCESS,
      data: normalize( [ { id: 2, order: 0 }, { id: 1, order: 1 } ], categoriesSchema )
    }
    const oldState = {
      byId: {
        1: {
          id: 1,
          order: 0
        },
        2: {
          id: 2,
          order: 1
        }
      }
    }
    const state = categories( oldState, action )

    expect( state.byId ).toEqual( { 1: { id: 1, order: 1 }, 2: { id: 2, order: 0 } } )
  })

  test( 'moves a category in the allIds array', () => {
    const action = {
      type: types.MOVE_CATEGORY,
      data: {
        categoryIds: [ 1, 2 ],
        oldIndex: 1,
        newIndex: 0
      }
    }
    const oldState = {
      allIds: [ 1, 2 ]
    }
    const state = categories( oldState, action )

    expect( state.allIds ).toEqual( [ 2, 1 ])
  })

  test( 'resets allIds if save failed', () => {
    const action = {
      type: types.PUT_CATEGORIES_FAILURE,
      previousCategoryIds: [ 1, 2 ]
    }
    const oldState = {
      allIds: [ 2, 1 ]
    }
    const state = categories( oldState, action )

    expect( state.allIds ).toEqual( [ 1, 2 ] )
  })

  test( 'sets id of selectedCategory', () => {
    const action = {
      type: types.SELECT_CATEGORY,
      id: 1
    }
    const oldState = {
      selectedCategory: {
        id: null
      }
    }
    const state = categories( oldState, action )

    expect( state.selectedCategory.id ).toEqual( 1 )
  })

  test( 'sets status of selected category edit form visibility', () => {
    const action = {
      type: types.CHANGE_EDIT_VISIBILITY,
      status: true
    }
    const oldState = {
      selectedCategory: {
        isFormShown: false
      }
    }
    const state = categories( oldState, action )

    expect( state.selectedCategory.isFormShown ).toBe( true )
  })

  test( 'sets status of new category form visibility', () => {
    const action = {
      type: types.CHANGE_NEW_VISIBILITY,
      status: true
    }
    const oldState = {
      isFormShown: false
    }
    const state = categories( oldState, action )

    expect( state.isFormShown ).toBe( true )
  })

  test( 'sets status of category isFetching flag', () => {
    const action = {
      type: types.CATEGORIES_REQUEST_STATUS,
      status: true
    }
    const oldState = {
      isFetching: false
    }
    const state = categories( oldState, action )

    expect( state.isFetching ).toBe( true )
  })
})
