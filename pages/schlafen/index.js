import styled from "styled-components";
import MiniNav from "../../components/Navigation/MiniNavbar";
import { ListItem } from "../../components/FacilityList";
import { Facility } from "../../components/Facility";
import { StyledList } from "../../components/Facility";

export default function Schlafen({ facilities }) {
  const filtered = facilities.filter((facility) => {
    return facility.category.includes("Schlafen");
  });

  return (
    <>
      <StyledHeading>Unterkünfte</StyledHeading>
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

const StyledHeading = styled.h2`
  margin-bottom: 20px;
`;

export { StyledHeading };
