import styled from "styled-components";
import { StyledButton } from "../Form/styled.form";

const DeleteButton = styled.button`
  border-style: none;
  font-size: 1rem;
  margin-top: 15px;
  font-family: var(--secondary-font);
  background-color: var(--secondary-color);
  text-decoration: underline;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  padding: 20px;
`;

const CancelButton = styled(StyledButton)`
  background-color: var(--primary-color);
  color: var(--font-color);
`;

const Modal = styled.span`
  position: fixed;
  background-color: var(--primary-color);
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export { Modal, Container, DeleteButton, FlexContainer, CancelButton };
