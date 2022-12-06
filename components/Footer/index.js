import { useRouter } from "next/router";
import {
  StyledImage,
  StyledParagraph,
  StyledNav,
  StyledLink,
} from "./styled.footer";

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
