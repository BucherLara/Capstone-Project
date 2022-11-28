import HomeLink from "../../components/Navigation/HomeLink";
import { StyledHeading } from "../sleep";
import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";
import { useState } from "react";
import FavoriteLink from "../../components/Navigation/FavoriteLink";

export default function Medicine({ facilities, setFacilities }) {
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
              <Facility
                facility={filteredFacility}
                setFacilities={setFacilities}
              />
            </ListItem>
          );
        })}
      </StyledList>

      <HomeLink />
      <FavoriteLink />
    </>
  );
}
