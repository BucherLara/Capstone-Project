import MiniNav from "../../components/Navigation/MiniNavbar";
import { StyledHeading } from "../schlafen";
import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";

export default function Medizin({ facilities }) {
  const filtered = facilities.filter((facility) => {
    return facility.category.includes("Medizin");
  });

  return (
    <>
      <StyledHeading>Medizinischen Versorgung</StyledHeading>
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
