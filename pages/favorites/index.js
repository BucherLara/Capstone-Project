import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility/styled.facility";
import { ListItem } from "../../components/FacilityList";

export default function Favorites({ toggleBookmark, facilities }) {
  return (
    <>
      <StyledList>
        {facilities.map(
          (facility) =>
            facility.isBookmarked && (
              <ListItem key={facility.id}>
                <Facility
                  facility={facility}
                  toggleBookmark={toggleBookmark}
                  isBookmarked={facility.isBookmarked}
                />{" "}
              </ListItem>
            )
        )}
      </StyledList>
    </>
  );
}
