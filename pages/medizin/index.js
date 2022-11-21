import MiniNav from "../../components/Navigation/MiniNavbar";
import { StyledHeading } from "../Schlafen";
import styled from "styled-components";
import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";

export default function Medizin({ facilities }) {
  const filtered = facilities.filter((facility) => {
    return facility.category.includes("Medizin");
  });

  return (
    <>
      <StyledHeading>Einrichtungen zur medizinischen Versorgung</StyledHeading>
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
