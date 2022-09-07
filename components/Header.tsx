import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import logo from '../public/assets/images/logo-netflix.svg'
import headerScroll from '../common/HeaderScroll'

function Header() {
    const movies = useSelector((state) => state.movies)
    const router = useRouter()

    useEffect(() => {
        const header = document.querySelector('.header')

        headerScroll(header, router.pathname, '/', 'transparent')

        const handleScrollHeader = () => {
            header?.classList.toggle('header--scroll', window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScrollHeader)
    }, [router])

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
                        <Link href='/'>
                            <a className='header__nav-link header--active'>Trang chủ</a>
                        </Link>
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
                        <Link href='/movie/favourite'>
                            <a
                                className={`header__nav-link ${
                                    movies.length === 0 ? '' : 'header__nav-link--relative'
                                }`}
                            >
                                Phim yêu thích của tôi{' '}
                                <span>{movies.length === 0 ? '' : movies.length}</span>
                            </a>
                        </Link>
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
