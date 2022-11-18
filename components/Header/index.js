import styled from "styled-components";
export default function Header() {
  return (
    <StyledHeader>
      <h1> App für Wohnungslose </h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: lightgreen;
`;
