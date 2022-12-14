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

export default function Medicine({
  facilities,
  toggleBookmark,
  deleteFacility,
}) {
  const medicinFacilities = facilities.filter((facility) => {
    return facility.category === "Medizin";
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
            id="allgemein-medizin"
            value="general"
            checked={selectedFilters.includes("general")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="allgemein-medizin"> Allgemein</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <CheckboxInput
            type="checkbox"
            name="psychologist"
            id="psycholog*in"
            value="psychologist"
            checked={selectedFilters.includes("psychologist")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="psycholog*in"> Psycholog*in</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <CheckboxInput
            type="checkbox"
            name="gynecologist"
            id="gynäkolog*in"
            value="gynecologist"
            checked={selectedFilters.includes("gynecologist")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="gynäkolog*in"> Frauenärzt*in</StyledLabel>
        </StyledDiv>
      </StyledForm>
      <StyledList>
        {filteredFacilities.map((filteredFacility) => {
          return (
            <ListItem key={filteredFacility.id}>
              <Facility
                facility={filteredFacility}
                toggleBookmark={toggleBookmark}
                deleteFacility={deleteFacility}
              />
            </ListItem>
          );
        })}
      </StyledList>
    </>
  );
}
