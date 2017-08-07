import * as actions from './categories';
import * as types from '../constants/action_types';

describe('Category actions', () => {
  
  test('should create an action to add a category', () => {
    const title = 'Action creator test';
    const expectedAction = {
      type: types.ADD_CATEGORY,
      title,
      id: 1
    };

    expect(actions.addCategory( title ) ).toEqual( expectedAction );
  });

  test('should create an action to remove a category', () => {
    const expectedAction = {
      type: types.REMOVE_CATEGORY,
      id: 1,
      order: 0
    };

    expect(actions.removeCategory(1, 0)).toEqual(expectedAction);
  });

  test('should create an action to move a category', () => {
    const expectedAction = {
      type: types.MOVE_CATEGORY,
      oldIndex: 0,
      newIndex: 1
    };

    expect(actions.moveCategory(0, 1)).toEqual(expectedAction);
  });

});
