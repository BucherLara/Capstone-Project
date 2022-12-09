import Facility from "../../components/Facility";
import { StyledList } from "../../components/Facility/styled.facility";
import { ListItem } from "../../components/FacilityList";
import styled from "styled-components";

export default function Favorites({ toggleBookmark, facilities }) {
  return (
    <>
      {!facilities.find((facility) => facility.isBookmarked) ? (
        <FlexContainer>
          <StyledParagraph>Bisher sind hier keine Favoriten!</StyledParagraph>
          <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 447.1 400.2"
            xmlSpace="preserve"
            fill="grey"
          >
            <path
              id="Fill-1"
              className="st0"
              d="M410.8,37.4c-23-24-53.8-37.1-86.8-37.1s-63.8,13.2-86.7,37.1L223.2,52L209,37.1
	C186.8,14,157.1,0.9,125.4,0h-0.1h-3.2C89.3,0,58.5,13.2,35.5,37.1C12.6,61,0,92.5,0,126s12.6,65,35.5,88.9l169.8,177.2l0.4,0.4
	c4.5,4.8,10.9,7.5,17.4,7.5s12.9-2.7,17.4-7.4c28.1-29.3,56.2-58.5,84.3-87.8l3.1-3.2c27.7-28.9,55.4-57.7,83-86.5
	c22.9-23.9,35.5-55.4,35.5-88.8C446.3,92.8,433.7,61.2,410.8,37.4"
            />
          </StyledSvg>

          <StyledParagraph>
            Klicke auf die Herzen, um eine Einrichtung hinzuzufügen.
          </StyledParagraph>
        </FlexContainer>
      ) : (
        ""
      )}
      <StyledList>
        {facilities.map(
          (facility) =>
            facility.isBookmarked && (
              <ListItem key={facility.id}>
                <Facility
                  facility={facility}
                  toggleBookmark={toggleBookmark}
                  isBookmarked={facility.isBookmarked}
                />{" "}
              </ListItem>
            )
        )}
      </StyledList>
    </>
  );
}

const StyledSvg = styled.svg`
  height: 60px;
  opacity: 0.3;
  justify-content: center;
  margin-top: 20px;
`;
const StyledParagraph = styled.p`
  opacity: 0.3;
  margin-top: 30px;
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25%;
`;
