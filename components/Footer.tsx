import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/assets/images/logo-netflix.svg'
import { ButtonLink } from '../common/Button'

const Footer: React.FC = () => {
    return (
        <section className='footer__container'>
            <div className='footer__item'>
                <Link href='/'>
                    <a>
                        <Image src={logo} width='90' height='30' />
                    </a>
                </Link>
                <p className='footer__item-text footer__item--pr-7'>
                    Xem phim mới miễn phí nhanh chất lượng cao. Xem Phim online Việt Sub, Thuyết
                    minh, lồng tiếng chất lượng HD. Xem phim nhanh online chất lượng cao
                </p>
            </div>
            <div className='footer__item'>
                <p className='footer__item-title'>Phim mới</p>
                <p className='footer__item-text'>Phim bộ mới</p>
                <p className='footer__item-text'>Phim sắp chiếu</p>
                <p className='footer__item-text'>Phim thuyết minh</p>
                <p className='footer__item-text'>Phim chiếu rạp</p>
            </div>
            <div className='footer__item'>
                <p className='footer__item-title'>Phim lẻ</p>
                <p className='footer__item-text'>Phim hành động</p>
                <p className='footer__item-text'>Phim kinh dị</p>
                <p className='footer__item-text'>Phim hoạt hình</p>
                <p className='footer__item-text'>Phim viễn tưởng</p>
            </div>
            <div className='footer__item'>
                <p className='footer__item-title'>Liên hệ với tôi</p>
                <p className='footer__item-text'>
                    Điện thoại: <span className='footer__item--bold'>032 948 6975</span>
                </p>
                <p className='footer__item-text'>
                    Email: <span className='footer__item--bold'>luongtuyenquang.it@gmail.com</span>
                </p>
                <p className='footer__item-text'>
                    Facebook:
                    <ButtonLink
                        href='https://www.facebook.com/fb.luongtuyenquang'
                        className='footer__item--bold'
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
