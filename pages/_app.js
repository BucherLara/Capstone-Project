import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
import initialState from "../helpers/db.json";
import { useLocalStorage } from "../helpers/hooks";
import { nanoid } from "nanoid";

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
      <Header />
      <GlobalStyles />
      <Component
        {...pageProps}
        facilities={facilities}
        setFacilities={setFacilities}
        addFacilities={addFacilities}
      />
    </>
  );
}

export default MyApp;
