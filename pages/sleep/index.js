import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility/styled.facility";
import { useState } from "react";
import {
  StyledForm,
  StyledLabel,
  CheckboxInput,
  StyledDiv,
} from "../../components/Form/styled.form";

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
            id="sofort"
            value="now"
            checked={selectedFilters.includes("now")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="sofort"> sofort</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <CheckboxInput
            type="checkbox"
            name="u25"
            id="personen-u25"
            value="u25"
            checked={selectedFilters.includes("u25")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="personen-u25"> unter 25 Jahren</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <CheckboxInput
            type="checkbox"
            name="dog"
            id="mit-hund"
            value="dog"
            checked={selectedFilters.includes("dog")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="mit-hund"> mit Hund</StyledLabel>
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
