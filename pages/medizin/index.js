import MiniNav from "../../components/Navigation/MiniNavbar";
import { StyledHeading } from "../schlafen";
import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";
import { useState } from "react";

export default function Medicin({ facilities }) {
  const medicinFacilitis = facilities.filter((facility) => {
    return facility.category === "medicin";
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
  let filteredFacilities = medicinFacilitis;

  for (let i = 0; i < selectedFilters.length; i++) {
    filteredFacilities = filteredFacilities.filter((facility) => {
      return facility.filterCriteria.includes(selectedFilters[i]);
    });
  }

  return (
    <>
      <StyledHeading>Medizinischen Versorgung</StyledHeading>
      <form>
        <fieldset>
          <legend>Was benötigst du?</legend>
          <div>
            <input
              type="checkbox"
              name="general"
              id="general"
              value="general"
              checked={selectedFilters.includes("general")}
              onChange={handleToggleFilter}
            />
            <label htmlFor="general"> Allgemein</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="psychologist"
              id="psychologist"
              value="psychologist"
              checked={selectedFilters.includes("psychologist")}
              onChange={handleToggleFilter}
            />
            <label htmlFor="psychologist"> Psycholog*in</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="gynecologist"
              id="gynecologist"
              value="gynecologist"
              checked={selectedFilters.includes("gynecologist")}
              onChange={handleToggleFilter}
            />
            <label htmlFor="gynecologist"> Frauenärzt*in</label>
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
