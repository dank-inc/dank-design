import { Meta } from '@storybook/react'
import { AppHeader } from '.'
import { Button } from '../../elements/Button'

const meta: Meta = {
  title: 'Layout/AppHeader',
}

export const Default = () => (
  <AppHeader>
    <div className="left">
      <h1>Header Left</h1>
      <a href="?blah">Header Link</a>
    </div>
    <div className="right">
      <Button>Header Right</Button>
    </div>
  </AppHeader>
)

export default meta
