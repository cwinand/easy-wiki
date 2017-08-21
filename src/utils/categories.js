import { arrayMove } from 'react-sortable-hoc'

export const normalizeById = (data) => {
  return data.reduce( (obj, item) => { 
    let newObj = {};
    newObj[item.id] = item;
    return Object.assign( obj, newObj ) 
  }, {})
}

export const normalizeForPutCategories = ( categories, oldIndex, newIndex ) => {
  const reordered = arrayMoveUpdateOrder( categories, oldIndex, newIndex )
  const lowIndex = oldIndex < newIndex ? oldIndex : newIndex;
  const highIndex = oldIndex > newIndex ? oldIndex : newIndex;

  const updates = reordered.slice(lowIndex, highIndex + 1);
  const ids = updates.reduce( (acc, item) => acc.concat(item.id), [] );

  return { ids, updates }
}

export const arrayMoveUpdateOrder = ( categories, oldIndex, newIndex ) => {
  return arrayMove( categories, oldIndex, newIndex )
    .map((item, index) => {
      item.order = index;
      return { 
        order: index,
        id: item.id
      }
    });
}

