import { type SchemaTypeDefinition } from 'sanity'
import { ilanType } from './ilanType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ilanType],
}