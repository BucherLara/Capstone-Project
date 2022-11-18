import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
