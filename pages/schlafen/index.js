import styled from "styled-components";
import MiniNav from "../../components/Navigation/MiniNavbar";
import { ListItem } from "../../components/FacilityList";
import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility";

export default function Schlafen({ facilities }) {
  const filtered = facilities.filter((facility) => {
    return facility.category.includes("Schlafen");
  });

  // console.log(filterCriteria);

  // let test = [...filtered];
  // console.log(filtered);
  // if (criteria === "sofort") {
  //   test = test.filter;

  // }

  function checkboxFilter(event) {
    const criteria = event.target.id;

    console.log(criteria);

    const sofort = filtered.map((facility) => {
      if (facility.filterCriteria.includes("Sofort")) {
        return facility;
      } else {
        return null;
      }
    });

    console.log(sofort);

    //      if(criteria= "sofort") {
    // filtered.filter(("sofort")=> {

    // }
    //      }

    // filterCriteria.forEach((criteria, facility) => {
    //   console.log(facility);
    //   if (criteria.checked) {
    //     facility.filter((criteria) => {
    //       return facility.criteria;
    //     });
    //   }
    // });
  }

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
              onClick={checkboxFilter}
            />
            <label htmlFor="sofort"> sofort</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="u25"
              id="u25"
              onClick={checkboxFilter}
            />
            <label htmlFor="u25"> unter 25 Jahren</label>
          </div>
          <div>
            <input type="checkbox" name="Hund" id="Hund" />
            <label htmlFor="Hund"> mit Hund</label>
          </div>
        </fieldset>
      </form>
      <StyledList>
        {/* {filtered.map((filteredFacility) => {
          return (
            <ListItem key={filteredFacility.id}>
              <Facility facility={filteredFacility} />
            </ListItem>
          );
        })} */}
      </StyledList>

      <MiniNav />
    </>
  );
}

const StyledHeading = styled.h2`
  margin-bottom: 20px;
`;

export { StyledHeading };
