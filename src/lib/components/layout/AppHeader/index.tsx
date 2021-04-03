import { ReactNode } from 'react'
import './style.scss'

type Props = {
  children: ReactNode
}
export const AppHeader = ({ children }: Props) => {
  return <div className="dank-app-header">{children}</div>
}
