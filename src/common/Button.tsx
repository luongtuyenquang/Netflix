import Link from 'next/link'
import { ButtonLinkTS, ButtonNoLinkTS } from '../interface/button'

export const ButtonLink: React.FC<ButtonLinkTS> = ({ children, href, className, target, rel }) => {
  return (
    <Link href={href}>
      <a className={className} target={target} rel={rel}>
        {children}
      </a>
    </Link>
  )
}

export const ButtonNoLink: React.FC<ButtonNoLinkTS> = ({ children, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}
