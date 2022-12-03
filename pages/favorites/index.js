import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";
import { ListItem } from "../../components/FacilityList";
import Head from "next/head";

export default function Favorites({
  toggleBookmark,
  facilities,
  setFacilities,
}) {
  return (
    <>
      <Head>
        <title>Favoriten</title>
        <meta key="title" content="Meine Favoriten" />
      </Head>
      <StyledList>
        {facilities.map(
          (facility) =>
            facility.isBookmarked && (
              <ListItem key={facility.id}>
                <Facility
                  facility={facility}
                  toggleBookmark={toggleBookmark}
                  isBookmarked={facility.isBookmarked}
                  setFacilities={setFacilities}
                />{" "}
              </ListItem>
            )
        )}
      </StyledList>
    </>
  );
}
