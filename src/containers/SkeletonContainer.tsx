import { ReactNode } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      {children}
    </SkeletonTheme>
  )
}

export default SkeletonContainer
