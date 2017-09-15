import { arrayMove } from 'react-sortable-hoc'

export const formatForPutCategories = ( categoriesById, categoryIds, oldIndex, newIndex ) => {

  const reordered = arrayMove( categoryIds, oldIndex, newIndex )
  const lowIndex = oldIndex < newIndex ? oldIndex : newIndex;
  const highIndex = oldIndex > newIndex ? oldIndex : newIndex;

  const ids = reordered.slice( lowIndex, highIndex + 1 );

  const updates = reordered.reduce( ( acc, categoryId, index ) => {
    let category = categoriesById[ categoryId ]

    if ( category.order == index ) {
      return acc
    }

    return acc.concat({
      ...category,
      order: index
    })
  }, [])

  return { ids, updates }
}

