import GlobalStyles from "../components/GlobalStyles";
import initialState from "../helpers/db.json";
import { useLocalStorage } from "../helpers/hooks";
import { nanoid } from "nanoid";
import Layout from "../components/Layout";

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

  function toggleBookmark(facilityId) {
    setFacilities((facilities) => {
      const newValue = facilities.map((facility) => {
        if (facility.id === facilityId) {
          return { ...facility, isBookmarked: !facility.isBookmarked };
        } else {
          return facility;
        }
      });
      return newValue;
    });
  }

  function deleteFacility(facilityId) {
    setFacilities((facilities) => {
      const newValue = facilities.filter(
        (facility) => facility.id !== facilityId
      );
      return newValue;
    });
  }

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          facilities={facilities}
          setFacilities={setFacilities}
          addFacilities={addFacilities}
          toggleBookmark={toggleBookmark}
          deleteFacility={deleteFacility}
        />
      </Layout>
    </>
  );
}

export default MyApp;
