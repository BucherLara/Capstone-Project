import MiniNav from "../../components/Navigation/MiniNavbar";
import { StyledHeading } from "../schlafen";
import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";

export default function Hygiene({ facilities }) {
  const filtered = facilities.filter((facility) => {
    return facility.category.includes("Hygiene");
  });

  return (
    <>
      <StyledHeading>Einrichtungen mit Duschmöglichkeit </StyledHeading>
      <ul>
        {filtered.map((filteredFacility) => {
          return (
            <ListItem key={filteredFacility.id}>
              <Facility facility={filteredFacility} />
            </ListItem>
          );
        })}
      </ul>
      <MiniNav />
    </>
  );
}
