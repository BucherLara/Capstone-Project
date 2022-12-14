import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility/styled.facility";
import { ListItem } from "../../components/FacilityList";
import { useState } from "react";

import {
  StyledForm,
  StyledLabel,
  CheckboxInput,
  StyledDiv,
} from "../../components/Form/styled.form";

export default function Hygiene({
  facilities,
  toggleBookmark,
  deleteFacility,
}) {
  const hygieneFacilities = facilities.filter((facility) => {
    return facility.category === "Hygiene";
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
  let filteredFacilities = hygieneFacilities;

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
            name="mobile"
            id="mobil"
            value="mobile"
            checked={selectedFilters.includes("mobile")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="mobil"> mobil</StyledLabel>
        </StyledDiv>
        <StyledDiv>
          <CheckboxInput
            type="checkbox"
            name="lGBTQIA+"
            id="lGBTQIA+-personen"
            value="lGBTQIA+"
            checked={selectedFilters.includes("lGBTQIA+")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="lGBTQIA+-personen+"> LGBTQIA+</StyledLabel>
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
