import * as actions from './categories';
import * as types from '../constants/action_types';


describe('Synchronous category actions', () => {
  
  test('should create an action to request all categories', () => {
    const expectedAction = {
      type: types.MAKE_REQUEST
    }

    expect( actions.makeRequest() ).toEqual( expectedAction );
  });

  test('should create an action to receive multiple categories', () => {
    const expectedAction = {
      type: types.RECEIVE_CATEGORIES,
      data: [{}, {}, {}]
    }

    expect( actions.receiveCategories([{}, {}, {}]) ).toEqual( expectedAction );
  });

  test('should create an action to receive a single category', () => {
    const expectedAction = {
      type: types.RECEIVE_CATEGORY,
      data: { id: 1 }
    }

    expect( actions.receiveCategory({ id: 1 }) ).toEqual( expectedAction );
  });

  test('should create an action to delete a category', () => {
    const expectedAction = {
      type: types.DELETE_CATEGORY,
      id: 1
    }

    expect( actions.deleteCategory( 1 ) ).toEqual( expectedAction );
  });

  test('should create an action to update a category', () => {
    const expectedAction = {
      type: types.UPDATE_CATEGORY,
      data: { id: 1 }
    }

    expect( actions.updateCategory({ id: 1 }) ).toEqual( expectedAction );
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
