import { MouseEventHandler, ReactNode } from 'react'

export interface ButtonLinkTS {
  children: ReactNode
  href: string
  className: string
  target?: string
  rel?: string
}

export interface ButtonNoLinkTS {
  children: ReactNode
  className: string
  onClick: MouseEventHandler
}
