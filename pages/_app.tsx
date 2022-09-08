import Head from 'next/head'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/index.scss'
import store, { persistor } from '../redux/store'
import Layout from '../common/Layout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name='description' content='Netflix đỉnh cow' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </Provider>
        </>
    )
}

export default MyApp
