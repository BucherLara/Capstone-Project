import Facility from "../Facility";
import styled from "styled-components";
import { StyledList } from "../Facility";

export default function FacilityList({ facilities, toggleBookmark }) {
  return (
    <>
      <StyledList>
        {facilities.map((facility) => {
          return (
            <ListItem key={facility.id}>
              <Facility facility={facility} toggleBookmark={toggleBookmark} />
            </ListItem>
          );
        })}
      </StyledList>
    </>
  );
}

const ListItem = styled.li`
  list-style: none;
`;

export { ListItem };
