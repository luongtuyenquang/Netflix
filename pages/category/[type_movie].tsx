import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import allMovies from '../../store-data/allMovies'
import MovieCard from '../../common/MovieCard'
import headerScroll from '../../common/HeaderScroll'
import filterTypesMovie from '../../store-data/filterTypesMovie'

const TypeMovie: React.FC = () => {
    const router = useRouter()
    const [typeMovie, setTypeMovie] = useState<string>('')
    const [nameTypeMovie, setNameTypeMovie] = useState<string>('')
    const sortAllMovies = allMovies.sort((a, b) => b.movie.year - a.movie.year)

    useEffect(() => {
        const header = document.querySelector('.header') as HTMLElement

        headerScroll({
            header: header,
            pathName: router.pathname,
            pathNameUrl: '/category/[type_movie]',
            color: 'black',
        })
    }, [router])

    useEffect(() => {
        filterTypesMovie.map((type) => {
            if (type.slug === router.query.type_movie) {
                setTypeMovie(type.category)
                setNameTypeMovie(type.name)
            }
        })
    }, [router])

    return (
        <section className='all-movies'>
            <p className='movies__title'>
                Thể loại: <span>{nameTypeMovie}</span>
            </p>
            <div className='movies-list'>
                {sortAllMovies.length === 0 ? (
                    <p className='movies-favourite__empty'>
                        Không có tìm thấy phim trong danh sách !
                    </p>
                ) : (
                    sortAllMovies.map((item) => {
                        if (item.movie.category.join(', ').includes(typeMovie)) {
                            return (
                                <MovieCard
                                    image={item.movie.thumb_url}
                                    name={item.movie.name}
                                    originName={item.movie.origin_name}
                                    slug={item.movie.slug}
                                    key={item.movie._id}
                                />
                            )
                        }
                    })
                )}
            </div>
        </section>
    )
}

export default TypeMovie
