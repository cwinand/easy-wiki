import categories from './categories';
import * as types from '../constants/action_types';

describe('Categories reducer', () => {
  test('sets isFetching to true', () => {
    const oldState = {
      isFetching: false,
      items: []
    }
    const newState = categories( oldState, { type: types.MAKE_REQUEST } )

    expect( newState.isFetching).toBe( true );
  });

  test('adds multiple categories to state', () => {
    const oldState = {
      isFetching: true,
      items: []
    }
    const newState = categories( oldState, {
      type: types.RECEIVE_CATEGORIES,
      data: [ {}, {}, {} ]
    });

    expect( newState.items.length ).toBe( 3 );
  });

  test('adds single category to state', () => {
    const oldState = {
      isFetching: true,
      items: []
    };
    const newState = categories( oldState, {
      type: types.RECEIVE_CATEGORY,
      data: {
        title: 'Test Category', 
        order: 0,
        id: 1
      }
    });

    expect(newState.isFetching).toBe(false);
    expect(newState.items).toEqual([
      {
        title: 'Test Category', 
        order: 0,
        id: 1
      }
    ]);
  });

  test('removes single category from state', () => {
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
    const newState = categories(oldState, {
      type: types.DELETE_CATEGORY,
      id: 1
    });

    expect(newState.isFetching).toBe(false);
    expect(newState.items).toEqual([]);
  });

  test('updates single category in state', () => {
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
      type: types.UPDATE_CATEGORY,
      data: {
        title: 'Test Category Changed',
        order: 1,
        id: 1
      }
    });

    expect(newState.isFetching).toBe(false);
    expect(newState.items[0]).toEqual({
        title: 'Test Category Changed',
        order: 1,
        id: 1
      });
  });

  test('updates multiple categories in state', () => {
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
      type: types.UPDATE_CATEGORIES,
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

    expect(newState.isFetching).toBe(false);
    expect(newState.items[0]).toEqual({
          title: 'Test Category 1',
          id: 1,
          order: 1
        });
    expect(newState.items[1]).toEqual({
          title: 'Test Category 2',
          id: 2,
          order: 0
        });
    expect(newState.items[2]).toEqual({
          title: 'Test Category 3',
          id: 3,
          order: 2
        });
  });

  // test('moves category in state', () => {
  //   const oldState = {
  //     isFetching: true,
  //     items: [
  //       {
  //         title: 'Test Category',
  //         order: 0,
  //         id: 1
  //       },
  //       {
  //         title: 'Test Category Two',
  //         order: 1,
  //         id: 2
  //       }
  //     ]
  //   }
  //   const newState = categories(oldState, {
  //     type: types.MOVE_CATEGORY,
  //     oldIndex: 0,
  //     newIndex: 1
  //   });

  //   expect(newState.items[0].id).toEqual(oldState.items[1].id);
  //   expect(newState.items[1].id).toEqual(oldState.items[0].id);
  //   expect(newState.items[0].order).toEqual(0);
  //   expect(newState.items[1].order).toEqual(1);
  // });
});
