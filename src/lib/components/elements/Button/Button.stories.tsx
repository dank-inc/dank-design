import { Meta } from '@storybook/react'
import { Button } from '.'

const meta: Meta = {
  title: 'Elements/Button',
}

export const Default = () => <Button>Click Meh!</Button>
export const Link = () => <Button kind="link">Click Meh!</Button>
export const Primary = () => <Button kind="primary">Click Meh!</Button>

export default meta
