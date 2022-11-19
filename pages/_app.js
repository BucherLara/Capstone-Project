import { useEffect } from "react";
import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
import initialState from "../db.json";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
  const [facilities, setFacilities] = useLocalStorage(
    "facilities",
    initialState
  );
  const [storage, setStorage] = useLocalStorage("flamingo-capstone", []);

  // useEffect(() => {
  //   window.localStorage.setItem("rest", "ghzgdzhs");
  // }, []);

  return (
    <>
      <Header />
      <GlobalStyles />
      <Component
        {...pageProps}
        facilities={facilities}
        setFacilities={setFacilities}
      />
    </>
  );
}

export default MyApp;
