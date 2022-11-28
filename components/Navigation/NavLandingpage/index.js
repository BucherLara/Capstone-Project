import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function NavLandingpage() {
  return (
    <GridContainer>
      <StyledNav>
        <StyledLink href={"/sleep"}>
          <StyledIcon
            src={"/icons/sleep.png"}
            alt={"Schlafen-Icon"}
            width={100}
            height={60}
          />
          <StyledParagraph>Schlafen</StyledParagraph>
        </StyledLink>
      </StyledNav>
      <StyledNav>
        <StyledLink href={"/hygiene"}>
          <StyledIcon
            src={"/icons/shower.png"}
            alt={"Hygiene-Icon"}
            width={100}
            height={60}
          />{" "}
          <StyledParagraph>Hygiene</StyledParagraph>
        </StyledLink>
      </StyledNav>
      <StyledNav>
        <StyledLink href={"/medicine"}>
          <StyledIcon
            src={"/icons/medicine.png"}
            alt={"Medizin-Icon"}
            width={100}
            height={60}
          />{" "}
          <StyledParagraph>Medizin</StyledParagraph>
        </StyledLink>
      </StyledNav>
      <StyledNav>
        <StyledLink href={"/favorites"}>
          <StyledIcon
            src={"/icons/heart.png"}
            alt={"Favoriten-Icon"}
            width={100}
            height={60}
          />{" "}
          <StyledParagraph>meine Favoriten</StyledParagraph>
        </StyledLink>
      </StyledNav>
    </GridContainer>
  );
}

const StyledLink = styled(Link)`
  border-style: solid;
  text-decoration: none;
  width: 120px;
  height: 120px;
  display: flex;
  margin-top: 15px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 25px 80px -25px;
  color: #0000ee;
`;

const StyledParagraph = styled.p`
  margin-top: 65px;
  position: absolute;
  margin-left: 5px;
  padding: 10px;
  color: black;
`;
const StyledNav = styled.nav`
  margin-left: 15px;
  margin-top: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
const StyledIcon = styled(Image)`
  object-fit: contain;
  margin-right: 10px;
  border-radius: 50px;
  margin-top: 10px;
`;
