import { useEffect } from 'react'
import MessageProp from '../interface/messageProp'

const Toastify: React.FC<MessageProp> = ({ isIndex, icon, message }) => {
  useEffect(() => {
    const toastify = document.querySelector('.toastify') as HTMLElement

    function showMessage() {
      toastify.classList.add('toastify--show')
    }

    function hiddenMessage() {
      toastify.classList.remove('toastify--show')
    }

    if (isIndex) {
      showMessage()
    }

    if (isIndex) {
      setTimeout(() => {
        hiddenMessage()
      }, 2500)
    }

    toastify.addEventListener('click', hiddenMessage)

    return () => {
      toastify.removeEventListener('click', hiddenMessage)
    }
  }, [isIndex])

  return (
    <div className='toastify'>
      <i className={`${icon} toastify__icon-success`}></i>
      <p className='toastify__message'>{message}</p>
      <i className='bx bx-x toastify__icon-close'></i>
    </div>
  )
}

export default Toastify
