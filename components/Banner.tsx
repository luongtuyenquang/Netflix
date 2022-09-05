import Image from 'next/image'
import Link from 'next/link'
import trendingNow from '../store-data/trendingNow'

function Banner() {
    const venomMovie = trendingNow[1]

    return (
        <section className='banner'>
            <Image
                src={venomMovie.movie.poster_url}
                layout='fill'
                className='banner__image'
                alt='banner'
            />
            <div className='banner__info'>
                <p className='banner__info-title'>{venomMovie.movie.name}</p>
                <p className='banner__info-content'>{venomMovie.movie.content}</p>
                <div className='banner__btn'>
                    <Link href={`${venomMovie.episodes[0].server_data[0].link_embed}`}>
                        <a
                            className='btn banner__btn--mr'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='bx bx-play'></i>
                            <span className='banner__btn-title'>Play</span>
                        </a>
                    </Link>

                    <Link href={`/movie/${venomMovie.movie.slug}`}>
                        <a className='btn'>
                            <i className='bx bx-info-circle'></i>
                            <span className='banner__btn-title'>More Info</span>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Banner
