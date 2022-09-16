import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react'
import allMovies from '../store-data/allMovies'
import removeVietNameseTones from '../utils/removeVietNameseTones'
import MovieTS from '../interface/movie'

const SearchMovie: React.FC<{ setSortAllMovies: Dispatch<SetStateAction<MovieTS[]>> }> = ({
  setSortAllMovies,
}) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>
  const [valueInput, setValueInput] = useState('')

  const handleResetValue = () => {
    setValueInput('')
    setSortAllMovies(allMovies)
    inputRef.current?.focus()
  }

  useEffect(() => {
    const elmInput = inputRef.current

    elmInput.onkeyup = (e) => {
      if (e.which === 13) {
        const resultSearch = allMovies.filter((item) => {
          return (
            item.movie.name.toLowerCase().includes(valueInput.trim().toLowerCase()) ||
            item.movie.category
              .join(', ')
              .toLowerCase()
              .includes(valueInput.trim().toLowerCase()) ||
            removeVietNameseTones(item.movie.name.toLowerCase()).includes(
              valueInput.trim().toLowerCase()
            ) ||
            removeVietNameseTones(item.movie.category.join(', ').toLowerCase()).includes(
              valueInput.trim().toLowerCase()
            )
          )
        })
        setSortAllMovies(resultSearch)
        window.scrollTo(0, 0)
      }
      if (valueInput === '') {
        setSortAllMovies(allMovies)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput])

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
    <div className='search-movie'>
      <i className='bx bx-search search-movie__icon' onClick={() => inputRef?.current?.focus()}></i>
      <input
        type='text'
        placeholder='Nhập tên phim, thể loại...'
        className='search-movie__input'
        ref={inputRef}
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      {valueInput !== '' ? (
        <i className='bx bx-x search-movie__clear' onClick={handleResetValue}></i>
      ) : null}
    </div>
  )
}

export default SearchMovie
