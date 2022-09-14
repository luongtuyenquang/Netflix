import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import logo from '../assets/images/logo-netflix.svg'
import headerScroll from '../common/HeaderScroll'
import MovieFavouriteTS from '../interface/movieFavourite'
import { RootState } from '../redux/store'

const Header: React.FC = () => {
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

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement
    const iconOpen = document.querySelector('.header__open') as HTMLElement
    const iconClose = document.querySelector('.header__close') as HTMLElement
    const nav = document.querySelector('.header__nav') as HTMLElement
    const headerLeft = document.querySelector('.header__left') as HTMLElement
    const navLink = document.querySelectorAll('.header__nav-link')
    const search = document.querySelector('.search-movie')

    function openHeader() {
      header.classList.add('playing')
      nav.classList.add('header__nav--mobile')
      headerLeft.classList.add('header__left--mobile')
      document.body.style.overflow = 'hidden'
      search?.classList.add('search-movie--none')
    }

    function closeHeader() {
      header.classList.remove('playing')
      nav.classList.remove('header__nav--mobile')
      headerLeft.classList.remove('header__left--mobile')
      document.body.style.overflow = 'visible'
      search?.classList.remove('search-movie--none')
    }

    navLink.forEach((item) => {
      item.addEventListener('click', closeHeader)
    })

    iconOpen?.addEventListener('click', openHeader)
    iconClose?.addEventListener('click', closeHeader)

    return () => {
      iconOpen?.removeEventListener('click', openHeader)
      iconClose?.removeEventListener('click', closeHeader)
    }
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
              <a className={`header__nav-link ${activeLink('/', router.pathname)}`}>Trang chủ</a>
            </Link>
          </li>
          <li className='header__nav-list'>
            <Link href='/movie/all'>
              <a className={`header__nav-link ${activeLink('/movie/all', router.pathname)}`}>
                Tất cả phim
              </a>
            </Link>
          </li>
          <li className='header__nav-list'>
            <Link href='/movie/series'>
              <a className={`header__nav-link ${activeLink('/movie/series', router.pathname)}`}>
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
                Phim yêu thích của tôi <span>{movies.length === 0 ? '' : movies.length}</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className='header__right'>
                <i className='bx bx-search'></i>
                <i className='bx bxs-bell'></i>
            </div> */}
      <i className='bx bx-x header__close'></i>
      <i className='bx bx-menu-alt-right header__open'></i>
    </header>
  )
}

export default Header
