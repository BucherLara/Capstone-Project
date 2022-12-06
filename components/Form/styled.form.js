import styled from "styled-components";
import Link from "next/link";

const StyledLabel = styled.label`
  font-size: 1.2rem;
`;

const Container = styled.div`
  margin: 20px;
`;
const StyledFieldset = styled.fieldset`
  border: none;
`;
const StyledSection = styled.section`
  margin-left: 30px;
  ${({ showDetails }) => (showDetails ? "size:20px;" : "display:none")}
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 1.2rem;
  border: none;
`;
const FlexLabel = styled(StyledLabel)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: bold;
`;

const StyledLegend = styled.legend`
  font-size: 1.2rem;
  font-weight: bold;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: var(--font-color);
  font-size: 1.2rem;
  margin: 15px 0 50px 0;
  font-weight: bold;
`;
const StyledButton = styled.button`
  border-radius: 36px;
  background-color: var(--third-color);
  color: var(--second-font-color);
  width: 100%;
  padding: 20px;
  font-size: 1.2rem;
  margin-top: 15px;
`;

const StyledForm = styled.form`
  margin: 0 20px 0 20px;
`;

const CheckboxInput = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;
export {
  StyledDiv,
  CheckboxInput,
  StyledForm,
  StyledButton,
  StyledLink,
  StyledLegend,
  FlexLabel,
  StyledInput,
  StyledSection,
  StyledFieldset,
  Container,
  StyledLabel,
};
