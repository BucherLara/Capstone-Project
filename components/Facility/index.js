import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ListItem } from "../FacilityList";

export default function Facility({ facility }) {
  const {
    id,
    name,
    category,
    adress,
    target,
    requirements,
    image,
    link,
    filterCriteria,
  } = facility;

  return (
    <>
      <h3>{name}</h3>
      <StyledSection>
        <StyledImage
          alt={`Logo der Einrichtung ${name}`}
          src={image}
          width={120}
          height={80}
          priority
        />
        <StyledList>
          <ListItem>Kategorie: {category}</ListItem>
          <ListItem>
            Adresse:
            <StyledLink href={link}> {adress}</StyledLink>
          </ListItem>
          <ListItem>Zielgruppe: {target}</ListItem>
          <ListItem>Zugangsvoraussetzungen: {requirements}</ListItem>
        </StyledList>
      </StyledSection>
    </>
  );
}
const StyledImage = styled(Image)`
  object-fit: contain;
  margin-right: 10px;
`;

const StyledSection = styled.section`
  display: flex;
  border-style: solid;
  padding: 20px;
  border-radius: 20px;
  background-color: lightgrey;
  min-width: 150px;
  align-items: center;
`;
const StyledList = styled.ul`
  text-align: left;
  margin-left: 0 px;
  padding: 0 0 0 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export { StyledList };
