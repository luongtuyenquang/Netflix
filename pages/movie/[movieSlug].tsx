import Image from 'next/image'
import image from '../../public/assets/images/dead-zone.jpg'

function MovieSlug() {
    return (
        <section className='movie-detail'>
            <div className='movie-detail__group'>
                <div className='movie-detail__image'>
                    <div className='movie-detail__image-parent'>
                        <Image src={image} layout='fill' priority />
                        <div className='movie-detail__image-group'>
                            <div className='btn movie-detail__btn'>
                                <i className='bx bxs-heart'></i>
                                <span className='banner__btn-title'>Yêu thích</span>
                            </div>
                            <div className='btn movie-detail__btn'>
                                <i className='bx bx-play'></i>
                                <span className='banner__btn-title'>Watch</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='movie-detail__info'>
                    <div className='movie-detail__info-group'>
                        <p className='movie-detail__info-name'>Người nhện: Không còn nhà</p>
                        <p className='movie-detail__info-origin-name'>Spiderman Người nhện</p>
                    </div>
                    <div className='movie-detail__info-movie'>
                        <p className='movie-detail__info-general'>
                            Trạng thái: <span>HD + Vietsub</span>
                        </p>
                        <p className='movie-detail__info-general'>
                            Đạo diễn: <span></span>
                        </p>
                        <p className='movie-detail__info-general'>
                            Quốc gia: <span>Mỹ</span>
                        </p>
                        <p className='movie-detail__info-general'>
                            Năm sản xuất: <span>2018</span>
                        </p>
                        <p className='movie-detail__info-general'>
                            Thể loại: <span>Hành động, Viễn tưởng</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='movie-detail__description'>
                <p className='movie-detail__description-title'>Nội dung phim:</p>
                <p className='movie-detail__description-name'>
                    Người nhện: Không còn nhà - Spiderman
                </p>
                <p className='movie-detail__description-content'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum exercitationem
                    accusantium sapiente incidunt. Quidem, velit debitis nesciunt odio obcaecati
                    pariatur at aut aperiam vitae quisquam? Doloribus nesciunt explicabo dolores
                    commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    exercitationem accusantium sapiente incidunt. Quidem, velit debitis nesciunt
                    odio obcaecati pariatur at aut aperiam vitae quisquam? Doloribus nesciunt
                    explicabo dolores commodi.
                </p>
            </div>
        </section>
    )
}

export default MovieSlug
