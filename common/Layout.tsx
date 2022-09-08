import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
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

export default Layout
