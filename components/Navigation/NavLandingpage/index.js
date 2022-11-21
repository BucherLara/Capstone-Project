import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
styled;

export default function NavLandingpage() {
  return (
    <GridContainer>
      <StyledSection>
        <StyledLink href={"/schlafen"}>
          <Image
            src={"/icons/SchlafenIcon.png"}
            alt={"Schlafen-Icon"}
            width={100}
            height={60}
          />
          <StyledParagraph>Schlafen</StyledParagraph>
        </StyledLink>
      </StyledSection>
      <StyledSection>
        <StyledLink href={"/hygiene"}>
          <Image
            src={"/icons/Waschen.png"}
            alt={"Hygiene-Icon"}
            width={100}
            height={60}
          />{" "}
          <StyledParagraph>Hygiene</StyledParagraph>
        </StyledLink>
      </StyledSection>
      <StyledSection>
        <StyledLink href={"/medizin"}>
          <Image
            src={"/icons/Medizin.png"}
            alt={"Medizin-Icon"}
            width={100}
            height={60}
          />{" "}
          <StyledParagraph>Medizin</StyledParagraph>
        </StyledLink>
      </StyledSection>
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
`;

const StyledParagraph = styled.p`
  margin-top: 80px;
  position: absolute;
  margin-left: 5px;
  padding: 10px;
`;
const StyledSection = styled.section`
  margin-left: 15px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
