import MiniNav from "../../components/Navigation/MiniNavbar";
import { StyledHeading } from "../schlafen";
import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";
import { ListItem } from "../../components/FacilityList";
import { useState } from "react";

export default function Hygiene({ facilities }) {
  const hygieneFacilities = facilities.filter((facility) => {
    return facility.category === "hygiene";
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
  let filteredFacilities = hygieneFacilities;

  for (let i = 0; i < selectedFilters.length; i++) {
    filteredFacilities = filteredFacilities.filter((facility) => {
      return facility.filterCriteria.includes(selectedFilters[i]);
    });
  }

  return (
    <>
      <StyledHeading>Duschmöglichkeiten </StyledHeading>
      <form>
        <fieldset>
          <legend>Was benötigst du?</legend>
          <div>
            <input
              type="checkbox"
              name="mobile"
              id="mobile"
              value="mobile"
              checked={selectedFilters.includes("mobile")}
              onChange={handleToggleFilter}
            />
            <label htmlFor="mobile"> mobil</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="lGBTQIA+"
              id="lGBTQIA+"
              value="lGBTQIA+"
              checked={selectedFilters.includes("lGBTQIA+")}
              onChange={handleToggleFilter}
            />
            <label htmlFor="lGBTQIA+"> LGBTQIA+</label>
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
