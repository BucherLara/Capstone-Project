import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ListItem } from "../FacilityList";
import { css } from "styled-components";

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
            <StyledSvg
              variant={
                facility.isBookmarked ? "bookmarkActive" : "bookmarkNotActive"
              }
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </StyledSvg>
            {/* <Image
              src={
                facility.isBookmarked === false
                  ? "/icons/isNotBookmarked.png"
                  : "/icons/isBookmarked.png"
              }
              alt="isNotBookmarkedHeart"
              width={40}
              height={40}
            /> */}
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
const StyledSvg = styled.svg`
  width: 45px;
  height: 45px;
  margin-left: 150px;
  ${({ variant }) =>
    variant === "bookmarkActive" &&
    css`
      fill: #ff7f7f;
    `}

  ${({ variant }) =>
    variant === "bookmarkNotActive" &&
    css`
      fill: transparent;
      stroke: red;
      color: red;
    `}
`;
export { StyledList, StyledImage };
