import categories from './categories';
import * as types from '../constants/action_types';

describe( 'Categories reducer', () => {
  test( 'sets isFetching to true', () => {
    const oldState = {
      isFetching: false,
      items: []
    }
    const newState = categories( oldState, { type: types.CATEGORIES_REQUEST } )

    expect( newState.isFetching ).toBe( true );
  });

  test( 'adds multiple categories to state', () => {
    const oldState = {
      isFetching: true,
      items: []
    }
    const newState = categories( oldState, {
      type: types.GET_CATEGORIES_SUCCESS,
      data: [ {}, {}, {} ]
    });

    expect( newState.items.length ).toBe( 3 );
  });

  test( 'adds single category to state', () => {
    const oldState = {
      isFetching: true,
      items: []
    };
    const newState = categories( oldState, {
      type: types.POST_CATEGORY_SUCCESS,
      data: {
        title: 'Test Category',
        order: 0,
        id: 1
      }
    });

    expect( newState.isFetching ).toBe( false );
    expect( newState.items ).toEqual([
      {
        title: 'Test Category',
        order: 0,
        id: 1
      }
    ]);
  });

  test( 'removes single category from state', () => {
    const oldState = {
      isFetching: true,
      items: [
        {
          title: 'Test Category',
          order: 0,
          id: 1
        }
      ]
    };
    const newState = categories( oldState, {
      type: types.DELETE_CATEGORY_SUCCESS,
      id: 1
    });

    expect( newState.isFetching ).toBe( false );
    expect( newState.items ).toEqual( [] );
  });

  test( 'updates single category in state', () => {
    const oldState = {
      isFetching: true,
      items: [
        {
          title: 'Test Category',
          order: 0,
          id: 1
        }
      ]
    }
    const newState = categories( oldState, {
      type: types.PUT_CATEGORY_SUCCESS,
      data: {
        title: 'Test Category Changed',
        order: 1,
        id: 1
      }
    });

    expect( newState.isFetching ).toBe( false );
    expect( newState.items[ 0 ] ).toEqual({
      title: 'Test Category Changed',
      order: 1,
      id: 1
    });
  });

  test( 'updates multiple categories in state', () => {
    const oldState = {
      isFetching: true,
      items: [
        {
          title: 'Test Category 1',
          id: 1,
          order: 0
        },
        {
          title: 'Test Category 2',
          id: 2,
          order: 1
        },
        {
          title: 'Test Category 3',
          id: 3,
          order: 2
        }
      ]
    };
    const newState = categories( oldState, {
      type: types.PUT_CATEGORIES_SUCCESS,
      data: {
        1: {
          title: 'Test Category 1',
          id: 1,
          order: 1
        },
        2: {
          title: 'Test Category 2',
          id: 2,
          order: 0
        }
      }
    });

    expect( newState.isFetching ).toBe( false );
    expect( newState.items[ 0 ] ).toEqual({
      title: 'Test Category 1',
      id: 1,
      order: 1
    });
    expect( newState.items[ 1 ] ).toEqual({
      title: 'Test Category 2',
      id: 2,
      order: 0
    });
    expect( newState.items[ 2 ] ).toEqual({
      title: 'Test Category 3',
      id: 3,
      order: 2
    });
  });
});
