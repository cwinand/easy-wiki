export const removeFromObject = ( obj, toRemove ) => {
  return Object.keys( obj ).reduce( ( acc, currentKey ) => {
    if ( currentKey === toRemove ) {
      return acc
    }

    return { ...acc, [ currentKey ]: obj[ currentKey ] }
  }, {})
}
