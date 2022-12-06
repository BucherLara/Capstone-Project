import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

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

export { StyledImage, StyledParagraph, StyledNav, StyledLink };
