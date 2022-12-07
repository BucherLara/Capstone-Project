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
            variant={pathname === "/sleep" ? "active" : undefined}
            src={"/assets/svg/sleep.svg"}
            alt={"schlafen-icon"}
            width={45}
            height={45}
          />
          <StyledParagraph>Schlafen</StyledParagraph>
        </StyledLink>
        <StyledLink href={"/hygiene"}>
          <StyledImage
            variant={pathname === "/hygiene" ? "active" : undefined}
            src={"/assets/svg/hygiene.svg"}
            alt={"hygiene-icon"}
            width={45}
            height={45}
          />
          <StyledParagraph>Hygiene</StyledParagraph>
        </StyledLink>
        <StyledLink href={"/medicine"}>
          <StyledImage
            variant={pathname === "/medicine" ? "active" : undefined}
            src={"/assets/svg/medicine.svg"}
            alt={"medizin-icon"}
            width={45}
            height={45}
          />
          <StyledParagraph>Medizin</StyledParagraph>
        </StyledLink>
        <StyledLink href={"/favorites"}>
          <StyledImage
            variant={pathname === "/favorites" ? "active" : undefined}
            src={"/assets/svg/favorites.svg"}
            alt={"favoriten-icon"}
            width={45}
            height={45}
          />
          <StyledParagraph>Favoriten</StyledParagraph>
        </StyledLink>
      </StyledNav>
    </footer>
  );
}
