import MiniNav from "../../components/Navigation/MiniNavbar";
import styled from "styled-components";
import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";

export default function Schlafen({ facilities }) {
  const filtered = facilities.filter((facility) => {
    return facility.category.includes("Schlafen");
  });

  return (
    <>
      <StyledHeading>Einrichtungen zum Übernachten</StyledHeading>
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

const StyledHeading = styled.h2`
  margin-bottom: 20px;
`;

export { StyledHeading };
