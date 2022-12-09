import { useEffect, useState } from "react";
import styled from "styled-components";

export default function SnackBar({ onClose }) {
  const [showSnack, setShowSnack] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowSnack(false);
      onClose?.();
    }, 3000);

    return () => clearTimeout(timeoutID);
  }, []);

  return showSnack ? (
    <StyledSnackbar>
      Die Einrichtung wurde erfolgreich hinzugefügt!
    </StyledSnackbar>
  ) : null;
}

const StyledSnackbar = styled.p`
  text-align: center;
  font-size: 1.2 rem;
  font-family: var(--secondary-font);
  background-color: var(--secondary-color);
  color: var(--font-color);
  padding: 15px;
  border-radius: 20px;
  position: fixed;
  width: 50%;
  height: 20%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  align-items: center;
`;
