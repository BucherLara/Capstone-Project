import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
import initialState from "../db.json";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [facilities, setFacilities] = useLocalStorage(
    "facilities",
    initialState
  );
  return (
    <>
      <Header />
      <GlobalStyles />
      <Component
        {...pageProps}
        storage={storage}
        setStorage={setStorage}
        facilities={facilities}
        setFacilities={setFacilities}
      />
    </>
  );
}

export default MyApp;
