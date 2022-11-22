import MiniNav from "../../components/Navigation/MiniNavbar";
import { StyledHeading } from "../schlafen";
import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";
import { ListItem } from "../../components/FacilityList";

export default function Hygiene({ facilities }) {
  const filtered = facilities.filter((facility) => {
    return facility.category.includes("Hygiene");
  });

  return (
    <>
      <StyledHeading>Duschmöglichkeiten </StyledHeading>
      <StyledList>
        {filtered.map((filteredFacility) => {
          return (
            <ListItem key={filteredFacility.id}>
              <Facility facility={filteredFacility} />
            </ListItem>
          );
        })}
      </StyledList>
      <MiniNav />
    </>
  );
}
