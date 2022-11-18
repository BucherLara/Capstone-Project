import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
        <StyledArticle>
          <p>Kategorie: {category}</p>
          <p>
            Adresse:
            <StyledLink href={link}> {adress}</StyledLink>
          </p>
          <p>Zielgruppe: {target}</p>
          <p>Zugangsvoraussetzungen: {requirements}</p>
        </StyledArticle>
      </StyledSection>
    </>
  );
}
const StyledImage = styled(Image)`
  object-fit: contain;
  layout: responsive;
`;

const StyledSection = styled.section`
  display: flex;
  border-style: solid;
  padding: 10px;
  border-radius: 20px;
  background-color: lightgrey;

  align-items: center;
`;
const StyledArticle = styled.article`
  text-align: left;
  margin-left: 10px;
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
