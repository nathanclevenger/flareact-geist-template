import { GeistProvider, CssBaseline } from '@geist-ui/react'
import Head from "flareact/head";
        
export default function Application({ Component, pageProps }) {
    return (
        <GeistProvider>
            <Head>
                <title>Flareact Geist Template</title>
                <link rel="canonical" href="https://saas.dev/template" />
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
        </GeistProvider>
    )
}