import * as types from '../constants/action_types';

let nextCategoryId = 1;
export const addCategory = (title) => {
  return {
    type: types.ADD_CATEGORY,
    id: nextCategoryId++,
    title
  };
}

export const removeCategory = (id, order) => {
  return {
    type: types.REMOVE_CATEGORY,
    id,
    order
  };
}

export const moveCategory = (oldIndex, newIndex) => {
  return {
    type: types.MOVE_CATEGORY,
    oldIndex,
    newIndex
  }
}
