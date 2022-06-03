import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "global-styles/globals"
import { theme } from "global-styles/theme"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Roundnet Card Generator</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
