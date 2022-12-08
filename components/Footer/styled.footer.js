import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const StyledLink = styled(Link)`
  color: var(--font-color);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 0.9rem;
  font-family: var(--secondary-font);
  margin: 0;
`;

const StyledImage = styled(Image)`
  opacity: ${({ variant }) => (variant === "active" ? 1 : 0.3)};
`;

export { StyledImage, StyledParagraph, StyledNav, StyledLink };
