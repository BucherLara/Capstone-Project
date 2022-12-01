import styled from "styled-components";
import Head from "next/head";
import NavLandingpage from "../components/NavLandingpage";

export default function Home({ facilities }) {
  if (!facilities) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>App-Name</title>
      </Head>

      <NavLandingpage />
    </>
  );
}
const Heading = styled.h1`
  text-align: center;
`;
