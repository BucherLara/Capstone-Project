import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <footer>
      <StyledNav>
        <StyledLink href={"/sleep"}>
          <StyledImage
            className={pathname === "/sleep" ? "active" : "notActive"}
            src={"/assets/svg/sleep.svg"}
            alt={"Schlafen-Icon"}
            width={45}
            height={45}
          />{" "}
          <StyledParagraph>Schlafen</StyledParagraph>
        </StyledLink>

        <StyledLink href={"/hygiene"}>
          <StyledImage
            className={pathname === "/hygiene" ? "active" : "notActive"}
            src={"/assets/svg/hygiene.svg"}
            alt={"Hygiene-Icon"}
            width={45}
            height={45}
          />{" "}
          <StyledParagraph>Hygiene</StyledParagraph>
        </StyledLink>
        <StyledLink href={"/medicine"}>
          {" "}
          <StyledImage
            className={pathname === "/medicine" ? "active" : "notActive"}
            src={"/assets/svg/medicine.svg"}
            alt={"Medizin-Icon"}
            width={45}
            height={45}
          />{" "}
          <StyledParagraph>Medizin</StyledParagraph>
        </StyledLink>
        <StyledLink href={"/favorites"}>
          <StyledImage
            className={pathname === "/favorites" ? "active" : "notActive"}
            src={"/assets/svg/favorites.svg"}
            alt={"Favoriten-Icon"}
            width={45}
            height={45}
          />{" "}
          <StyledParagraph>Favoriten</StyledParagraph>
        </StyledLink>
      </StyledNav>
    </footer>
  );
}

const StyledLink = styled(Link)`
  color: var(--font-color);
  padding: 0;
  text-decoration: none;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  align-items: center;

  width: 100%;
  background-color: var(--secondary-color);

  height: 75px;
`;

const StyledParagraph = styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin: 0;
`;

const StyledImage = styled(Image)`
  &.active {
    opacity: 1;
  }
  &.notActive {
    opacity: 0.3;
  }
`;
// background-color: lightgrey;
// border-radius: 40px;
