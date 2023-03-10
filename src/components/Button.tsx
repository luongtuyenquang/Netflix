import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ButtonLinkTS, ButtonNoLinkTS } from '../interface/button'

export const ButtonLink: React.FC<ButtonLinkTS> = ({ children, href, className, target }) => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [widthScreen])

  return (
    <Link href={href}>
      <a
        className={className}
        target={widthScreen >= 1024 && target ? target : ''}
        rel={target && 'noopener noreferrer'}
      >
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
