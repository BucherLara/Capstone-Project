import { useRouter } from "next/router";
import styled from "styled-components";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <h1>
        {pathname === "/sleep"
          ? "Unterkünfte"
          : pathname === "/hygiene"
          ? "Duschmöglichkeiten"
          : pathname === "/medicine"
          ? "Medizinische Versorgung"
          : pathname === "/favorites"
          ? "meine Favoriten"
          : pathname === "/add"
          ? "Neue Einrichtung hinzufügen"
          : "Überlebenshilfen für wohnungslose Menschen"}
      </h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  color: #111111;
  font-family: "DMSans";
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 46px;
  text-align: center;
  padding: 53px 20px 0 20px;
`;
