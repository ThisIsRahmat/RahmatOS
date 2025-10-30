import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {media} from 'sanity-plugin-media'

import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'rahmatos-blog',
  title: 'RahmatOS Blog',

  projectId: 'your-project-id', // You'll need to replace this
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    codeInput(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})