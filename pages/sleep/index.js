import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";
import { useState } from "react";
import {
  StyledForm,
  StyledLabel,
  CheckboxInput,
  StyledDiv,
} from "../../components/Form";

export default function Sleep({ facilities, toggleBookmark }) {
  const sleepFacilities = facilities.filter((facility) => {
    return facility.category === "Schlafen";
  });

  const [selectedFilters, setSelectedFilters] = useState([]);

  function handleToggleFilter(event) {
    const selectedValue = event.target.value;

    if (selectedFilters.includes(selectedValue)) {
      setSelectedFilters((previousSelectedFilters) =>
        previousSelectedFilters.filter(
          (selectedFilter) => selectedFilter !== selectedValue
        )
      );
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
      <StyledForm>
        <h2>Was benötigst du?</h2>
        <StyledDiv>
          <CheckboxInput
            type="checkbox"
            name="now"
            id="now"
            value="now"
            checked={selectedFilters.includes("now")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="now"> sofort</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <CheckboxInput
            type="checkbox"
            name="u25"
            id="u25"
            value="u25"
            checked={selectedFilters.includes("u25")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="u25"> unter 25 Jahren</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <CheckboxInput
            type="checkbox"
            name="dog"
            id="dog"
            value="dog"
            checked={selectedFilters.includes("dog")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="dog"> mit Hund</StyledLabel>
        </StyledDiv>
      </StyledForm>
      <StyledList>
        {filteredFacilities.map((filteredFacility) => {
          return (
            <ListItem key={filteredFacility.id}>
              <Facility
                facility={filteredFacility}
                toggleBookmark={toggleBookmark}
              />
            </ListItem>
          );
        })}
      </StyledList>
    </>
  );
}
