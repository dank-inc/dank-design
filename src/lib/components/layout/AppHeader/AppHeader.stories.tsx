import { Meta } from '@storybook/react'
import { AppHeader } from '.'

const meta: Meta = {
  title: 'Layout/AppHeader',
}

export const Default = () => (
  <AppHeader>
    <p>Header Left</p>
    <p>Header Middle</p>
    <p>Header Right</p>
  </AppHeader>
)

export default meta
