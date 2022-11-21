import styled from "styled-components";
import Head from "next/head";
import NavLandingpage from "../components/Navigation/NavLandingpage";

import FacilityList from "../components/FacilityList";

export default function Home({ facilities, category }) {
  if (!facilities) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>App-Name</title>
      </Head>

      <main>
        <NavLandingpage />
      </main>
    </>
  );
}
const Heading = styled.h1`
  text-align: center;
`;
