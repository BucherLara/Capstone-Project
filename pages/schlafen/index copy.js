import styled from "styled-components";
import MiniNav from "../../components/Navigation/MiniNavbar";
import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";
import { useState } from "react";

export default function Schlafen({ facilities }) {
  // console.log(facilities);
  const filtered = facilities.filter((facility) => {
    return facility.category.includes("Schlafen");
  });

  const [schlafenFacilities, setSchlafenFacilities] = useState(filtered);
  const [currentFilter, setCurrentFilter] = useState("all");

  function handleCheckboxFilter(event) {
    const criteria = event.target.id;
    setCurrentFilter(criteria);

    // console.log(criteria);
  }

  function filterCheckboxes(currentFilter) {
    switch (currentFilter) {
      case "all":
        console.log(schlafenFacilities);
        return schlafenFacilities;

      case "sofort":
        return schlafenFacilities.filter(
          (facility) => facility.filterCriteria === "Sofort"
        );
      case "mit Hund":
        return schlafenFacilities.filter(
          (facility) => facility.filterCriteria === "mit Hund"
        );
      case "unter 25 Jahren":
        return schlafenFacilities.filter(
          (facility) => facility.filterCriteria === "unter 25 Jahren"
        );
      case "sofort+Hund":
        return schlafenFacilities.filter(
          (facility) =>
            facility.filterCriteria === "unter 25 Jahren" &&
            facility.filterCriteria === "mit Hund"
        );
      default:
        return;
    }
  }

  function toggleCheckFacility(facilityId) {
    setSchlafenFacilities((oldSchlafenFacilities) => {
      const newSchlafenFacility = oldSchlafenFacilities.map(
        (oldSchlafenFacility) => {
          if (oldSchlafenFacility.id === facilityId) {
            return {
              ...oldSchlafenFacility,
              isChecked: !oldSchlafenFacility.isChecked,
            };
          }
          return oldSchlafenFacility;
        }
      );
      return newSchlafenFacility;
    });
  }
  const filteredFacilities = filterCheckboxes(currentFilter);
  // console.log(filteredFacilities);

  // const sofort = filtered.map((facility) => {
  //   if (facility.filterCriteria.includes("Sofort")) {
  //     return facility;
  //   } else {
  //     return null;
  //   }
  // });

  return (
    <>
      <StyledHeading>Unterkünfte</StyledHeading>
      <form>
        <fieldset>
          <legend>Was benötigst du?</legend>
          <div>
            <input
              type="checkbox"
              name="sofort"
              id="sofort"
              onChange={() => toggleCheckFacility(filtered.id)}
              checked={filtered.isChecked}
            />
            <label htmlFor="sofort"> sofort</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="u25"
              id="u25"
              onChange={() => toggleCheckFacility(filtered.id)}
              checked={filtered.isChecked}
            />
            <label htmlFor="u25"> unter 25 Jahren</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="Hund"
              id="Hund"
              onChange={() => toggleCheckFacility(filtered.id)}
              checked={filtered.isChecked}
            />
            <label htmlFor="Hund"> mit Hund</label>
          </div>
        </fieldset>
      </form>
      <StyledList>
        <ListItem key={filtered.id}>
          <Facility
            onClick={() => toggleCheckFacility(filtered.id)}
            filterCriteria={filtered.filterCriteria}
          />
        </ListItem>
      </StyledList>

      <MiniNav />
    </>
  );
}

const StyledHeading = styled.h2`
  margin-bottom: 20px;
`;

export { StyledHeading };

{
  /* {filtered.map((filteredFacility) => {
          return (
            <ListItem key={filteredFacility.id}>
              <Facility facility={filteredFacility} />
            </ListItem>
          );
        })} */
}
// schlafenFacilities={filteredFacilities.filter(
//   (schlafenFacilityChecked) => !schlafenFacilityChecked.isChecked
// )}
