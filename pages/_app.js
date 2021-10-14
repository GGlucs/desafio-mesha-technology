import { GlobalStyle } from "../styles"


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
