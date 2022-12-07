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
  margin-bottom: 50px;
  margin: 20px;
`;
const StyledList = styled.ul`
  padding: 0;
  line-height: 1.3 rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 65px;
`;

const StyledButton = styled.button`
  border-style: none;
  padding: 0;
  background-color: white;
`;
const StyledSvg = styled.svg`
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
  justify-content: space-between;
`;

const ColoredContainer = styled.div`
  background-color: var(--primary-color);
  border-radius: 36px;
  text-align: center;
  margin-top: 20px;
`;
const StyledParagraphLineTwo = styled.p`
  margin-top: -15px;
  text-align: left;
`;
const StyledParagraphLineOne = styled.p`
  text-align: left;
`;

export {
  StyledList,
  StyledImage,
  StyledParagraphLineTwo,
  StyledParagraphLineOne,
  ColoredContainer,
  FlexContainer,
  StyledSpan,
  StyledSvg,
  StyledButton,
  StyledLink,
  StyledSection,
  ImageContainer,
};
