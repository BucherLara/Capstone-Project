import styled from "styled-components";

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
  font-family: var(--secondary-font);
`;

const StyledLegend = styled.legend`
  font-size: 1.2rem;
  font-family: var(--secondary-font);
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
const StyledBackButton = styled.button`
  border-style: none;
  color: var(--font-color);
  font-size: 1.2rem;
  margin: 15px 0 50px 0;
  font-family: var(--secondary-font);
  background-color: var(--primary-color);
  text-decoration: underline;
  display: flex;
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
const ButtonContainer = styled.span`
  display: flex;
  justify-content: center;
`;

export {
  StyledDiv,
  CheckboxInput,
  StyledForm,
  StyledButton,
  StyledLegend,
  FlexLabel,
  StyledInput,
  StyledSection,
  StyledFieldset,
  Container,
  StyledLabel,
  StyledBackButton,
  ButtonContainer,
};
