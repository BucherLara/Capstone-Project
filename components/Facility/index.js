import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ListItem } from "../FacilityList";

export default function Facility({ facility, setFacilities }) {
  const { name, adress, target, requirements, image, link, tel, id } = facility;

  function toggleBookmark(facilityId) {
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
  }

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
          <StyledButton
            type="button"
            aria-label="bookmark"
            onClick={() => {
              toggleBookmark(id);
            }}
          >
            <Image
              src={
                facility.isBookmarked === false
                  ? "/icons/isNotBookmarked.png"
                  : "/icons/isBookmarked.png"
              }
              alt="isNotBookmarkedHeart"
              width={40}
              height={40}
            />
          </StyledButton>
          <ListItem>
            <b>Kategorie: </b> {facility.category}
          </ListItem>

          <ListItem>
            <b>Zielgruppe: </b> {target}
          </ListItem>
          <ListItem>
            <b>Zugangsvoraussetzungen: </b>
            {requirements}
          </ListItem>
          <ListItem>
            <b>Adresse: </b>
            <StyledLink href={link} target="_blank">
              {adress}
            </StyledLink>
          </ListItem>
          <ListItem>
            <b>Telefonnummer:</b>
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
  border-radius: 50px;
`;

const StyledSection = styled.section`
  display: flex;
  border-style: solid;
  padding: 20px;
  border-radius: 20px;
  background-color: white;

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

const StyledButton = styled.button`
  border-style: none;
  padding: 0;
  background-color: white;
`;

export { StyledList, StyledImage };
