import { schema } from 'normalizr'

const section = new schema.Entity( 'sections' )

const page = new schema.Entity( 'pages', {
  sections: [ section ]
})

export const categoryEntity = new schema.Entity( 'categories', {
  pages: [ page ]
})

export const categoriesSchema = [ categoryEntity ]
