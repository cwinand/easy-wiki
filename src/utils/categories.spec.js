import * as utils from './categories'

test( 'returns the slice of an array that needs updated based on two indeces, and a new array of those items id\'s', () => {
  const byId = { 1: { id: 1, order: 0 }, 2: { id: 2, order: 1 }, 3: { id: 3, order: 2 } }
  const allIds = [ 1, 2, 3 ]

  const expectedIds = [ 2, 1 ]
  const expectedUpdates = [ { id: 2, order: 0 }, { id: 1, order: 1 } ]

  const tested = utils.formatForPutCategories( byId, allIds, 0, 1 )

  expect( tested.ids ).toEqual( expectedIds )
  expect( tested.updates ).toEqual( expectedUpdates )
})
