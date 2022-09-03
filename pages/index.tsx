import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home: NextPage = () => {
    return (
        <div className=''>
            <Head>
                <title>Netflix - Trang chủ</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className='container-fluid'>
                <div className='container'>
                    <Header />
                    <Banner />
                </div>
            </div>
        </div>
    )
}

export default Home
