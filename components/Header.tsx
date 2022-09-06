import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import logo from '../public/assets/images/logo-netflix.svg'

function Header() {
    useEffect(() => {
        const header = document.querySelector('.header')

        const handleScrollHeader = () => {
            header?.classList.toggle('header--scroll', window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScrollHeader)
    }, [])

    return (
        <header className='header__container'>
            <div className='header__left'>
                <Link href='/'>
                    <a>
                        <Image src={logo} alt='Logo' width={90} height={30} />
                    </a>
                </Link>
                <ul className='header__nav'>
                    <li className='header__nav-list'>
                        <a href='#1' className='header__nav-link header--active'>
                            Trang chủ
                        </a>
                    </li>
                    <li className='header__nav-list'>
                        <a href='#1' className='header__nav-link'>
                            Tất cả phim
                        </a>
                    </li>
                    <li className='header__nav-list'>
                        <a href='#1' className='header__nav-link'>
                            Phim bộ
                        </a>
                    </li>
                    <li className='header__nav-list'>
                        <a href='#1' className='header__nav-link'>
                            Phim yêu thích của tôi
                        </a>
                    </li>
                </ul>
            </div>
            <div className='header__right'>
                <i className='bx bx-search'></i>
                <i className='bx bxs-bell'></i>
            </div>
        </header>
    )
}

export default Header
