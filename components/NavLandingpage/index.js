import {
  StyledLink,
  StyledLinkContainer,
  StyledIcon,
  StyledNav,
  StyledSpan,
  StyledNavLink,
} from "./styled.navlanding";

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
