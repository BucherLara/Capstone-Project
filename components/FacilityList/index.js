import Facility from "../Facility";
import styled from "styled-components";
import { StyledList } from "../Facility";
export default function FacilityList({ facilities }) {
  return (
    <>
      <StyledList>
        {facilities.map((facility) => {
          return (
            <ListItem key={facility.id}>
              <Facility facility={facility} />
            </ListItem>
          );
        })}
      </StyledList>
    </>
  );
}

const ListItem = styled.li`
  list-style: none;
  padding-left: -10px;
`;
export { ListItem };
