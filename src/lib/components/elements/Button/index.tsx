import { ReactNode } from 'react'
import './style.scss'

type Props = {
  children: ReactNode
  kind?: 'primary' | 'link' | 'default'
}
export const Button = ({ children, kind = 'default' }: Props) => {
  return <button className={`dank-button ${kind}`}>{children}</button>
}
