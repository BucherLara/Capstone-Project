import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ListItem } from "../FacilityList";

export default function Facility({ facility, setFacilities }) {
  const { name, adress, target, requirements, image, link, tel, id } = facility;

  const toggleBookmark = (facilityId) => {
    setFacilities((facilities) => {
      const newValue = facilities.map((facility) => {
        if (facility.id === facilityId) {
          return { ...facility, isBookmarked: !facility.isBookmarked };
        } else {
          return facility;
        }
      });
      return newValue;
    });
  };
  return (
    <>
      <h3>{name}</h3>
      <StyledSection>
        <StyledImage
          alt={`Logo der Einrichtung ${name}`}
          src={image}
          width={180}
          height={120}
          priority
        />
        <StyledList>
          <button
            type="button"
            aria-label="bookmark"
            onClick={() => {
              toggleBookmark(id);
            }}
          >
            ICON
          </button>
          <ListItem>Zielgruppe: {target}</ListItem>
          <ListItem>Zugangsvoraussetzungen: {requirements}</ListItem>
          <ListItem>
            Adresse:{" "}
            <StyledLink href={link} target="_blank">
              {adress}
            </StyledLink>
          </ListItem>
          <ListItem>
            Telefonnummer:
            <StyledLink href={`tel:${tel}`}> {tel}</StyledLink>
          </ListItem>
        </StyledList>
      </StyledSection>
    </>
  );
}
const StyledImage = styled(Image)`
  object-fit: contain;
  margin-right: 10px;
  border-radius: 50px; ;
`;

const StyledSection = styled.section`
  display: flex;
  border-style: solid;
  padding: 20px;
  border-radius: 20px;
  background-color: lightgrey;

  min-heigth: 500px;
  align-items: center;
`;
const StyledList = styled.ul`
  text-align: left;
  padding: 0 0 0 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export { StyledList, StyledImage };
