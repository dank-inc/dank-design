import { ReactNode } from 'react'
import './style.scss'

type Props = {
  children: ReactNode
}
export const Button = ({ children }: Props) => {
  return <button>{children}</button>
}
