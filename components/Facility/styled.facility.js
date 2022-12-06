import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledImage = styled(Image)`
  object-fit: contain;
`;
const ImageContainer = styled.div`
  text-align: center;
`;

const StyledSection = styled.section`
  border-radius: 40px;
  background-color: var(--secondary-color);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
  margin: 20px;
`;
const StyledList = styled.ul`
  padding: 0;
  line-height: 21px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 65px;
  width: 350px;
`;

const StyledButton = styled.button`
  border-style: none;
  padding: 0;
  background-color: white;
`;
const StyledSvg = styled.svg`
  height: 45px;

  ${({ variant }) =>
    variant === "bookmarkActive" &&
    css`
      fill: #ff7f7f;
    `}

  ${({ variant }) =>
    variant === "bookmarkNotActive" &&
    css`
      stroke: black;

      fill: var(--secondary-color);
    `}
`;
const StyledSpan = styled.span`
  font-weight: bold;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ColoredContainer = styled.div`
  background-color: var(--primary-color);
  border-radius: 36px;
  margin: 10px 0 10px 0;
  text-align: center;
  margin-top: 20px;
`;
const StyledParagraph = styled.p`
  margin-top: -15px;
  text-align: left;
`;
const StyledP = styled.p`
  text-align: left;
`;

export {
  StyledList,
  StyledImage,
  StyledP,
  StyledParagraph,
  ColoredContainer,
  FlexContainer,
  StyledSpan,
  StyledSvg,
  StyledButton,
  StyledLink,
  StyledSection,
  ImageContainer,
};
