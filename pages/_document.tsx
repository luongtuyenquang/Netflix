import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
    return (
        <Html>
            <Head>
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
