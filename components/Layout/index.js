// import Header from "../Header";
// import Footer from "../Footer";
import styled from "styled-components";

export default function Layout({ children }) {
  <>
    {/* <Header /> */}
    <StyledMain>{children}</StyledMain>
    {/* <Footer /> */}
  </>;
}

const StyledMain = styled.main`
  z-index: -100px;
`;
