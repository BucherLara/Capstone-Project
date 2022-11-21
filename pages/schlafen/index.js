import MiniNav from "../../components/Navigation/MiniNavbar";
import styled from "styled-components";
export default function Schlafen() {
  return (
    <>
      <StyledParagraph>Hier wird geschlafen</StyledParagraph>
      <MiniNav />
    </>
  );
}

const StyledParagraph = styled.p`
  margin-bottom: 20px;
`;

export { StyledParagraph };
