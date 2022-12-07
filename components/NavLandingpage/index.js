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
            alt={"schlafen-icon"}
            width={100}
            height={60}
          />
          <StyledSpan>Schlafen</StyledSpan>
        </StyledNavLink>
        <StyledNavLink href={"/hygiene"}>
          <StyledIcon
            src={"/assets/svg/hygiene.svg"}
            alt={"hygiene-icon"}
            width={100}
            height={60}
          />
          <StyledSpan>Hygiene</StyledSpan>
        </StyledNavLink>
        <StyledNavLink href={"/medicine"}>
          <StyledIcon
            src={"/assets/svg/medicine.svg"}
            alt={"medizin-icon"}
            width={100}
            height={60}
          />
          <StyledSpan>Medizin</StyledSpan>
        </StyledNavLink>
        <StyledNavLink href={"/favorites"}>
          <StyledIcon
            src={"/assets/svg/favorites.svg"}
            alt={"favoriten-Icon"}
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
