import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "global-styles/globals"
import { theme } from "global-styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
