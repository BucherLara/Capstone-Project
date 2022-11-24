import styled from "styled-components";
import MiniNav from "../../components/Navigation/MiniNavbar";
import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";
import { useState } from "react";
import { useEffect } from "react";

export default function Schlafen({ facilities }) {
  // console.log(facilities);
  const filtered = facilities.filter((facility) => {
    return facility.category.includes("Schlafen");
  });

  const [schlafenFacilities, setSchlafenFacilities] = useState(filtered);
  const [currentFilter, setCurrentFilter] = useState("all");

  const [nowFilter, setNowFilter] = useState(false);
  const [dogFilter, setDogFilter] = useState(false);
  const [under25Filter, setUnder25Filter] = useState(false);

  useEffect(() => {
    function handleFilter() {
      console.log("now = " + nowFilter);
      console.log("dog = " + dogFilter);
      console.log("under25 = " + under25Filter);
    }
  });

  function toggleNowFilter(event) {
    setNowFilter(event.target.checked);
    handleFilter();
  }
  function toggleDogFilter(event) {
    setDogFilter(event.target.checked);
    handleFilter();
  }
  function toggleUnder25Filter(event) {
    setUnder25Filter(event.target.checked);
    handleFilter();
  }

  return (
    <>
      <StyledHeading>Unterkünfte</StyledHeading>
      <form>
        <fieldset>
          <legend>Was benötigst du?</legend>
          <div>
            <input
              type="checkbox"
              name="sofort"
              id="sofort"
              onChange={(event) => toggleNowFilter(event)}
            />
            <label htmlFor="sofort"> sofort</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="u25"
              id="u25"
              onChange={(event) => toggleUnder25Filter(event)}
            />
            <label htmlFor="u25"> unter 25 Jahren</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="Hund"
              id="Hund"
              onChange={(event) => toggleDogFilter(event)}
            />
            <label htmlFor="Hund"> mit Hund</label>
          </div>
        </fieldset>
      </form>
      <StyledList>
        <ListItem key={filtered.id}>
          <Facility
            onClick={() => toggleCheckFacility(filtered.id)}
            filterCriteria={filtered.filterCriteria}
          />
        </ListItem>
      </StyledList>

      <MiniNav />
    </>
  );
}

const StyledHeading = styled.h2`
  margin-bottom: 20px;
`;

export { StyledHeading };

{
  /* {filtered.map((filteredFacility) => {
          return (
            <ListItem key={filteredFacility.id}>
              <Facility facility={filteredFacility} />
            </ListItem>
          );
        })} */
}
// schlafenFacilities={filteredFacilities.filter(
//   (schlafenFacilityChecked) => !schlafenFacilityChecked.isChecked
// )}
