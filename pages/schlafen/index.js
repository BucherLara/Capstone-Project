import styled from "styled-components";
import MiniNav from "../../components/Navigation/MiniNavbar";
import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";
import { useState } from "react";

export default function Sleep({ facilities }) {
  const sleepFacilities = facilities.filter((facility) => {
    return facility.category === "sleep";
  });

  const [selectedFilters, setSelectedFilters] = useState([]);

  function handleToggleFilter(event) {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    if (selectedFilters.includes(selectedValue)) {
      const updatedFilters = selectedFilters.filter(
        (selectedFilter) => selectedFilter !== selectedValue
      );
      setSelectedFilters(updatedFilters);
    } else {
      setSelectedFilters((previousSelectedFilters) => [
        ...previousSelectedFilters,
        selectedValue,
      ]);
    }
  }

  let filteredFacilities = sleepFacilities;

  for (let i = 0; i < selectedFilters.length; i++) {
    filteredFacilities = filteredFacilities.filter((facility) => {
      return facility.filterCriteria.includes(selectedFilters[i]);
    });
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
              name="now"
              id="now"
              value="now"
              checked={selectedFilters.includes("now")}
              onChange={handleToggleFilter}
            />
            <label htmlFor="now"> sofort</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="u25"
              id="u25"
              value="u25"
              checked={selectedFilters.includes("u25")}
              onChange={handleToggleFilter}
            />
            <label htmlFor="u25"> unter 25 Jahren</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="dog"
              id="dog"
              value="dog"
              checked={selectedFilters.includes("dog")}
              onChange={handleToggleFilter}
            />
            <label htmlFor="dog"> mit Hund</label>
          </div>
        </fieldset>
      </form>
      <StyledList>
        {filteredFacilities.map((filteredFacility) => {
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
