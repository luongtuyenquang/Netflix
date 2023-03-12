import Head from 'next/head'
import { ButtonLink } from '../components/Button'

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>Netflix - Not Found</title>
      </Head>

      <section className='not-found'>
        <div className='not-found__group'>
          <span className='not-found__404'>404</span>
          <p>Sorry !!!</p>
          <h1>Nội dung này mình chưa làm 😓</h1>
        </div>
        <ButtonLink href='/' className='btn not-found__btn'>
          <i className='bx bx-chevron-left'></i>
          <span className='not-found__btn-title'>Quay lại trang chủ</span>
        </ButtonLink>
      </section>
    </>
  )
}

export default NotFound
