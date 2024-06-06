import GlobalStyle from '../src/theme/GlobalStyle';

//tudo escrito aqui é passado ao resto do programa(main)
function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;