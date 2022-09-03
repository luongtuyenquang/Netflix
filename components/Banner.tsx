import Image from 'next/image'
import logo from '../public/assets/images/banner.jpg'

function Banner() {
    return (
        <section className='banner'>
            <Image src={logo} layout='fill' className='banner__image' alt='banner' />
            <div className='banner__info'>
                <p className='banner__info-title'>Dưới Màn Lửa</p>
                <p className='banner__info-content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugiat
                    at blanditiis ipsam culpa quod sit officiis tempora ex, cupiditate, vitae sunt.
                    Dolorem aspernatur repudiandae, soluta sit repellat quos sapiente?
                </p>
                <div className='banner__btn'>
                    <div className='btn banner__btn--mr'>
                        <i className='bx bx-play'></i>
                        <span className='banner__btn-title'>Play</span>
                    </div>
                    <div className='btn'>
                        <i className='bx bx-info-circle'></i>
                        <span className='banner__btn-title'>More Info</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
