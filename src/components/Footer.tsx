import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/images/logo-netflix.svg'
import { ButtonLink } from '../common/Button'
import footerLink from '../store-data/footer/footerLink'

const Footer: React.FC = () => {
  return (
    <section className='footer__container'>
      <div className='footer__item'>
        <Link href='/'>
          <a className='footer__logo'>
            <Image src={logo} width='90' height='30' />
          </a>
        </Link>
        <p className='footer__item-text footer__item--pr-7 footer__item-text--unhover'>
          Xem phim mới miễn phí nhanh chất lượng cao. Xem Phim online Việt Sub, Thuyết minh, lồng
          tiếng chất lượng HD. Xem phim nhanh online chất lượng cao
        </p>
      </div>
      <div className='footer__item'>
        <p className='footer__item-title'>Phim mới</p>
        {footerLink.newMovie.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <a className={item.className}>{item.name}</a>
            </Link>
          )
        })}
      </div>
      <div className='footer__item'>
        <p className='footer__item-title'>Phim lẻ</p>
        {footerLink.singleMovie.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <a className={item.className}>{item.name}</a>
            </Link>
          )
        })}
      </div>
      <div className='footer__item'>
        <p className='footer__item-title'>Liên hệ với tôi</p>
        <p className='footer__item-text footer__item-text--unhover'>
          Điện thoại: <span className='footer__item--bold'>032 948 6975</span>
        </p>
        <p className='footer__item-text footer__item-text--unhover'>
          Email: <span className='footer__item--bold'>luongtuyenquang.it@gmail.com</span>
        </p>
        <p className='footer__item-text footer__item-text--unhover'>
          Facebook:
          <ButtonLink
            href='https://www.facebook.com/fb.luongtuyenquang'
            className='footer__item--bold footer__item--fb'
            target='_blank'
          >
            Lương Tuyên Quang
          </ButtonLink>
        </p>
      </div>
    </section>
  )
}

export default Footer
