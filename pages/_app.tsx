import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import '../styles/index.scss'
import store from '../redux/store'
import Layout from '../common/Layout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp
