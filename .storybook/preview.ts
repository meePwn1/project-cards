import '@/styles/index.scss'
import 'react-image-crop/dist/ReactCrop.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
