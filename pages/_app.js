import GlobalStyles from "../components/GlobalStyles";
import initialState from "../helpers/db.json";
import { useLocalStorage } from "../helpers/hooks";
import { nanoid } from "nanoid";
// import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [facilities, setFacilities] = useLocalStorage(
    "facilities",
    initialState
  );

  function addFacilities(
    name,
    category,
    address,
    link,
    target,
    requirements,
    filterCriteria,
    tel
  ) {
    setFacilities((oldFacilities) => [
      ...oldFacilities,
      {
        id: nanoid(),
        name,
        category,
        address,
        link,
        target,
        requirements,
        image: "/icons/app.png",
        filterCriteria,
        tel,
        isBookmarked: false,
      },
    ]);
  }

  return (
    <>
      <GlobalStyles />
      {/* <Layout> */}
      <Component
        {...pageProps}
        facilities={facilities}
        setFacilities={setFacilities}
        addFacilities={addFacilities}
      />
      {/* </Layout> */}
    </>
  );
}

export default MyApp;
