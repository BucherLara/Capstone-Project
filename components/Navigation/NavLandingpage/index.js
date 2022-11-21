import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
styled;

export default function NavLandingpage() {
  return (
    <StyledDiv>
      <StyledLink href={"/schlafen"}>
        <Image
          src={"/icons/SchlafenIcon.png"}
          alt={"Schlafen-Icon"}
          width={100}
          height={60}
        />
        <StyledParagraph>Schlafen</StyledParagraph>
      </StyledLink>
      <StyledLink href={"/hygiene"}>
        <Image
          src={"/icons/Waschen.png"}
          alt={"Hygiene-Icon"}
          width={100}
          height={60}
        />{" "}
        <StyledParagraph>Hygiene</StyledParagraph>
      </StyledLink>
      <StyledLink href={"/medizin"}>
        <Image
          src={"/icons/Medizin.png"}
          alt={"Medizin-Icon"}
          width={100}
          height={60}
        />{" "}
        <StyledParagraph>Medizin</StyledParagraph>
      </StyledLink>
    </StyledDiv>
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
  margin-left: -15px;
`;
const StyledDiv = styled.div`
  margin-left: 15px;
`;
