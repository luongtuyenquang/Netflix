import Image from 'next/image'
import logo from '../public/assets/images/logo-netflix.svg'

function Footer() {
    return (
        <section className='footer'>
            <div className='footer__item'>
                <a href='#1'>
                    <Image src={logo} width='90' height='30' />
                </a>
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
                    <a
                        href='https://www.facebook.com/fb.luongtuyenquang'
                        target='_blank'
                        className='footer__item--bold'
                    >
                        Lương Tuyên Quang
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Footer
