import * as utils from './categories'

test( 'converts an array of objects to be an object with the item\'s id prop as the key', () => {
  const data = [ { id: 1 }, { id: 2 } ]
  const expected = {
    1: { id: 1 },
    2: { id: 2 }
  }

  expect( utils.normalizeById( data ) ).toEqual( expected )
})

test( 'returns a new array with an item moved, and that item\'s order prop reflects new position', () => {
  const data = [ { id: 1, order: 0 }, { id: 2, order: 1 }, { id: 3, order: 2 } ]
  const expectedMoveBack = [ { id: 2, order: 0 }, { id: 3, order: 1 }, { id: 1, order: 2 } ]
  const expectedMoveForward = [ { id: 3, order: 0 }, { id: 1, order: 1 }, { id: 2, order: 2 } ]

  expect( utils.arrayMoveUpdateOrder( data, 0, 2 ) ).toEqual( expectedMoveBack );
  expect( utils.arrayMoveUpdateOrder( data, 2, 0 ) ).toEqual( expectedMoveForward );
})

test( 'returns the slice of an array that needs updated based on two indeces, and a new array of those items id\'s', () => {
  const data = [ { id: 1, order: 0 }, { id: 2, order: 1 }, { id: 3, order: 2 } ]
  const expectedIds = [ 2, 1 ]
  const expectedUpdates = [ { id: 2, order: 0 }, { id: 1, order: 1 } ]

  const tested = utils.normalizeForPutCategories( data, 0, 1 )

  expect( tested.ids ).toEqual( expectedIds )
  expect( tested.updates ).toEqual( expectedUpdates )
})
