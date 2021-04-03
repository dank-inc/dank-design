import { ReactNode } from 'react'
import './style.scss'

type Props = {
  children: ReactNode
}
export const Page = ({ children }: Props) => {
  return <div className="dank-page">{children}</div>
}
