import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const StyledNavLink = styled(Link)`
  border-radius: 40px;
  background-color: var(--secondary-color);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  text-decoration: none;
  text-align: center;
  padding-bottom: 40px;
`;

const StyledSpan = styled.span`
  color: var(--font-color);
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.4 rem;
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
`;

const StyledLinkContainer = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: var(--font-color);
`;

export {
  StyledLink,
  StyledLinkContainer,
  StyledIcon,
  StyledNav,
  StyledSpan,
  StyledNavLink,
};
