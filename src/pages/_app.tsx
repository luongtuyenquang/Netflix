import Head from 'next/head'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import '../assets/scss/index.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import store, { persistor } from '../modules/redux/store'
import AppContainer from '../containers/AppContainer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name='description' content='Netflix đỉnh cow' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
