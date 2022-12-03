import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function NavLandingpage() {
  return (
    <>
      <StyledNav>
        <StyledNavLink href={"/sleep"}>
          <StyledIcon
            src={"/assets/svg/sleep.svg"}
            alt={"Schlafen-Icon"}
            width={100}
            height={60}
          />
          <StyledSpan>Schlafen</StyledSpan>
        </StyledNavLink>
        <StyledNavLink href={"/hygiene"}>
          <StyledIcon
            src={"/assets/svg/hygiene.svg"}
            alt={"Hygiene-Icon"}
            width={100}
            height={60}
          />
          <StyledSpan>Hygiene</StyledSpan>
        </StyledNavLink>
        <StyledNavLink href={"/medicine"}>
          <StyledIcon
            src={"/assets/svg/medicine.svg"}
            alt={"Medizin-Icon"}
            width={100}
            height={60}
          />
          <StyledSpan>Medizin</StyledSpan>
        </StyledNavLink>
        <StyledNavLink href={"/favorites"}>
          <StyledIcon
            src={"/assets/svg/favorites.svg"}
            alt={"Favoriten-Icon"}
            width={100}
            height={60}
          />
          <StyledSpan>Favoriten</StyledSpan>
        </StyledNavLink>
      </StyledNav>

      <StyledLinkContainer>
        <StyledLink href={"/add"}>Einrichtung hinzufügen</StyledLink>
      </StyledLinkContainer>
    </>
  );
}

const StyledNavLink = styled(Link)`
  border-radius: 40px;
  background-color: var(--secondary-color);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  // margin: 0 10px 10px 10px;
  text-decoration: none;
  text-align: center;
  padding-bottom: 40px;
`;

const StyledSpan = styled.span`
  color: var(--font-color);
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 40px;
`;
const StyledNav = styled.nav`
  margin: 20px 20px 0 20px;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 20px;
`;

const StyledIcon = styled(Image)`
  height: 65px;
  width: 65px;
  margin: 41px 58px 0px 57px;
  object-fit: contain;
`;

const StyledLinkContainer = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const StyledLink = styled(Link)`
  font-size: 18px;
  color: var(--font-color);
`;
