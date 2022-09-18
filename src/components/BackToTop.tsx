import $ from 'jquery'
import { useEffect } from 'react'

function BackToTop() {
  useEffect(() => {
    const backTop = document.querySelector('.back-top') as HTMLDivElement

    const handleShowIcon = () => {
      backTop.classList.toggle('back-top', window.scrollY > 400)
      backTop.style.display = 'block'
    }

    const handleBackToTop = () => {
      $('html,body').animate({ scrollTop: 0 }, 'slow')
    }

    window.addEventListener('scroll', handleShowIcon)
    backTop.addEventListener('click', handleBackToTop)

    return () => {
      window.removeEventListener('scroll', handleShowIcon)
      backTop.removeEventListener('click', handleBackToTop)
    }
  }, [])

  return (
    <div className='back-top'>
      <i className='bx bx-chevron-up back-top-icon'></i>
    </div>
  )
}

export default BackToTop
