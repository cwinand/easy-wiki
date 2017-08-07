import categories from './categories';
import * as types from '../constants/action_types';

describe('Categories reducer', () => {
  test('adds category to state', () => {
    const oldState = [];
    const newState = categories( oldState, {
      type: types.ADD_CATEGORY,
      title: 'Test Category', 
      id: 1
    });

    expect(newState).toEqual([
      {
        title: 'Test Category', 
        order: 0,
        id: 1
      }
    ]);
  });

  test('removes category from state', () => {
    const oldState = [
      {
        title: 'testing remove category',
        order: 0,
        id: 1
      }
    ];
    const newState = categories(oldState, {
      type: types.REMOVE_CATEGORY,
      id: 1
    });

    expect(newState).toEqual([]);
  });

  test('moves category in state', () => {
    const oldState = [
      {
        title: 'Test Category',
        order: 0,
        id: 1
      },
      {
        title: 'Test Category Two',
        order: 1,
        id: 2
      }
    ];
    const newState = categories(oldState, {
      type: types.MOVE_CATEGORY,
      oldIndex: 0,
      newIndex: 1
    });

    expect(newState[0].id).toEqual(oldState[1].id);
    expect(newState[1].id).toEqual(oldState[0].id);
    expect(newState[0].order).toEqual(0);
    expect(newState[1].order).toEqual(1);
  });
});
