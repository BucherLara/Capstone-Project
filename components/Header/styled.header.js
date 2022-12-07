import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
  font-size: 1.3rem;
  line-height: 2.4 rem;
  text-align: center;
  padding-bottom: 10px;
`;
const HomeSvg = styled.svg`
  margin-top: 40px;
  margin-bottom: 0;
`;

const PagesSvg = styled.svg`
  position: absolute;
  left: 20px;
  top: 15px;
  margin-bottom: 40px;
`;

const StyledHeading = styled.h1`
  margin-top: 50px;
  text-align: center;
  display: flex;
  justify-content: flex-start;
`;
const HeadingPages = styled.h1`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 20px;
  margin: 30px 0 0 0;
`;

const AddSvg = styled.svg`
  margin-right: 20px;
  margin-top: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 40px;
`;
const StyledDiv = styled.div`
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 79px;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
`;

export {
  StyledLink,
  StyledDiv,
  AddSvg,
  HeadingPages,
  StyledHeading,
  PagesSvg,
  HomeSvg,
  StyledHeader,
};
