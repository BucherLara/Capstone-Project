import Facility from "../Facility";
import styled from "styled-components";

export default function FacilityList({ facilities }) {
  return (
    <>
      <ul>
        {facilities.map((facility) => {
          return (
            <ListItem key={facility.id}>
              <Facility facility={facility} />
            </ListItem>
          );
        })}
      </ul>
    </>
  );
}

const ListItem = styled.li`
  list-style: none;
`;
