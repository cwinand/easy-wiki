export const addCategory = (title) => {
  return {
    type: 'ADD_CATEGORY',title
  };
}

export const removeCategory = (index) => {
  return {
    type: 'REMOVE_CATEGORY',
    index
  };
}
