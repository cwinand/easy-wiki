let nextCategoryId = 1;
export const addCategory = (title) => {
  return {
    type: 'ADD_CATEGORY',
    id: nextCategoryId++,
    title
  };
}

export const removeCategory = (id, order) => {
  return {
    type: 'REMOVE_CATEGORY',
    id,
    order
  };
}

export const moveCategory = (oldIndex, newIndex) => {
  return {
    type: 'MOVE_CATEGORY',
    oldIndex,
    newIndex
  }
}
