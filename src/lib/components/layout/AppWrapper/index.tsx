import { ReactNode } from 'react'
import '../../../index.scss'

type Props = {
  children: ReactNode
}
export const AppWrapper = ({ children }: Props) => {
  return <div className="app-wrapper">{children}</div>
}
