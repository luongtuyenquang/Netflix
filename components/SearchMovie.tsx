import { useEffect, useRef } from 'react'

const SearchMovie: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const search = document.querySelector('.search-movie')
        const input = document.querySelector('.search-movie__input')

        function addClassFocus() {
            search?.classList.add('search-movie--focus')
        }

        function removeClassFocus() {
            search?.classList.remove('search-movie--focus')
        }

        input?.addEventListener('focus', addClassFocus)
        input?.addEventListener('blur', removeClassFocus)

        return () => {
            input?.removeEventListener('focus', addClassFocus)
            input?.removeEventListener('focus', removeClassFocus)
        }
    }, [])

    return (
        <form className='search-movie'>
            <i
                className='bx bx-search search-movie__icon'
                onClick={() => inputRef?.current?.focus()}
            ></i>
            <input
                type='text'
                placeholder='Nhập tên phim, thể loại...'
                className='search-movie__input'
                ref={inputRef}
            />
            <i className='bx bx-x search-movie__clear'></i>
        </form>
    )
}

export default SearchMovie
