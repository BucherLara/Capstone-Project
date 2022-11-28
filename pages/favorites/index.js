import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";
import { ListItem } from "../../components/FacilityList";
import { StyledHeading } from "../sleep";
import HomeLink from "../../components/Navigation/HomeLink";
import FavoriteLink from "../../components/Navigation/FavoriteLink";

export default function Favorites({
  toggleBookmark,
  facilities,
  setFacilities,
}) {
  return (
    <>
      <StyledHeading>Meine Favoriten</StyledHeading>
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
      <HomeLink />
      <FavoriteLink />
    </>
  );
}