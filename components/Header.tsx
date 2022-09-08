import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import logo from '../public/assets/images/logo-netflix.svg'
import headerScroll from '../common/HeaderScroll'
import MovieFavouriteTS from './../interface/movieFavourite'
import { RootState } from '../redux/store'

function Header() {
    const router = useRouter()
    const movies = useSelector<RootState, MovieFavouriteTS[]>((state) => state.movies)

    const activeLink = (url: string, pathName: string) => (url === pathName ? 'header--active' : '')

    useEffect(() => {
        const header = document.querySelector('.header') as HTMLElement

        headerScroll({
            header: header,
            pathName: router.pathname,
            pathNameUrl: '/',
            color: 'transparent',
        })

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
                            <a className={`header__nav-link ${activeLink('/', router.pathname)}`}>
                                Trang chủ
                            </a>
                        </Link>
                    </li>
                    <li className='header__nav-list'>
                        <Link href='/movie/all'>
                            <a
                                className={`header__nav-link ${activeLink(
                                    '/movie/all',
                                    router.pathname
                                )}`}
                            >
                                Tất cả phim
                            </a>
                        </Link>
                    </li>
                    <li className='header__nav-list'>
                        <Link href='/movie/series'>
                            <a
                                className={`header__nav-link ${activeLink(
                                    '/movie/series',
                                    router.pathname
                                )}`}
                            >
                                Phim bộ
                            </a>
                        </Link>
                    </li>
                    <li className='header__nav-list'>
                        <Link href='/movie/favourite'>
                            <a
                                className={`header__nav-link ${
                                    movies.length === 0 ? '' : 'header__nav-link--relative'
                                } ${activeLink('/movie/favourite', router.pathname)}`}
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
