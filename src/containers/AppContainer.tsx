import { ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AppContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className='header'>
        <Header />
      </div>

      <div className='container-fluid'>
        <div className='container'>{children}</div>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </>
  )
}

export default AppContainer
