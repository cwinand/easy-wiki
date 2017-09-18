import { schema } from 'normalizr'

export const sectionEntity = new schema.Entity( 'sections' )

export const pageEntity = new schema.Entity( 'pages', {
  sections: [ sectionEntity ]
})

export const categoryEntity = new schema.Entity( 'categories', {
  pages: [ pageEntity ]
})

export const categoriesSchema = [ categoryEntity ]

// Currently planned state tree
// {
//   categories: {
//     byId: {
//       "1": {
//         data: {},
//       }
//     },
//     allIds: [],
//     selected: 1,
//     showAddCategoryForm: false,
//     showAddPageForm: false,
//     isFetching: false
//   },
//   selectedCategory: {
//     id: 1,
//     showEditForm: false,
//   },
//   pages: {
//     byId: {
//       "1": {
//         data: {},
//         showEditForm: false
//       }
//     },
//     allIds: [],
//     isFetching: false,
//     active: 1
//   },
//   sections: {
//     byId: {
//       "1": {
//         data: {},
//         showEditForm: false
//       }
//     },
//     allIds: [],
//     isFetching: false
//   }
// }
