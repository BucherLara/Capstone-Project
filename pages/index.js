import styled from "styled-components";
import Head from "next/head";

import FacilityList from "../components/FacilityList";

export default function Home({ facilities }) {
  if (!facilities) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>App-Name</title>
      </Head>

      <main>
        <Heading>Einrichtungsnamen</Heading>
        <FacilityList facilities={facilities}></FacilityList>
      </main>
    </>
  );
}
const Heading = styled.h1`
  text-align: center;
`;
