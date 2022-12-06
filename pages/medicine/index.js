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

export default function Medicine({ facilities, toggleBookmark }) {
  const medicinFacilities = facilities.filter((facility) => {
    return facility.category === "medizin";
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
  let filteredFacilities = medicinFacilities;

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
            name="general"
            id="general"
            value="general"
            checked={selectedFilters.includes("general")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="general"> Allgemein</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <CheckboxInput
            type="checkbox"
            name="psychologist"
            id="psychologist"
            value="psychologist"
            checked={selectedFilters.includes("psychologist")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="psychologist"> Psycholog*in</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <CheckboxInput
            type="checkbox"
            name="gynecologist"
            id="gynecologist"
            value="gynecologist"
            checked={selectedFilters.includes("gynecologist")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="gynecologist"> Frauenärzt*in</StyledLabel>
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
