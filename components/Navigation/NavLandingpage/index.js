import Link from "next/link";
import styled from "styled-components";
styled;

export default function NavLandingpage() {
  return (
    <>
      <StyledLink href={"/schlafen"}>Schlafen</StyledLink>
      <StyledLink href={"/hygiene"}>Hygiene</StyledLink>
      <StyledLink href={"/medizin"}>Medizin</StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  border-style: solid;
  text-decoration: none;
  width: 120px;
  height: 120px;
  display: flex;
  margin-top: 15px;
`;
