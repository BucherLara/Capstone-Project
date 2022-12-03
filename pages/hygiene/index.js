import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";
import { ListItem } from "../../components/FacilityList";
import { useState } from "react";
import Head from "next/head";
import { StyledForm, StyledLabel, CheckboxInput } from "../sleep";

export default function Hygiene({ facilities, setFacilities }) {
  const hygieneFacilities = facilities.filter((facility) => {
    return facility.category === "hygiene";
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
      <Head>
        <title>Duschmöglichkeiten</title>
        <meta key="title" content="Duschmöglichkeiten" />
      </Head>
      <StyledForm>
        <h2>Was benötigst du?</h2>
        <div>
          <CheckboxInput
            type="checkbox"
            name="mobile"
            id="mobile"
            value="mobile"
            checked={selectedFilters.includes("mobile")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="mobile"> mobil</StyledLabel>
        </div>
        <div>
          <CheckboxInput
            type="checkbox"
            name="lGBTQIA+"
            id="lGBTQIA+"
            value="lGBTQIA+"
            checked={selectedFilters.includes("lGBTQIA+")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="lGBTQIA+"> LGBTQIA+</StyledLabel>
        </div>
        <div>
          <CheckboxInput
            type="checkbox"
            name="u25"
            id="u25"
            value="u25"
            checked={selectedFilters.includes("u25")}
            onChange={handleToggleFilter}
          />
          <StyledLabel htmlFor="u25"> unter 25 Jahren</StyledLabel>
        </div>
      </StyledForm>
      <StyledList>
        {filteredFacilities.map((filteredFacility) => {
          return (
            <ListItem key={filteredFacility.id}>
              <Facility
                facility={filteredFacility}
                setFacilities={setFacilities}
              />
            </ListItem>
          );
        })}
      </StyledList>
    </>
  );
}
