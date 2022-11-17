import fetcher from "../helpers/fetcher";
import useSWR from "swr";
import styled from "styled-components";
import Head from "next/head";

import FacilityList from "../components/FacilityList";

export default function Home() {
  const { data: facilities, error } = useSWR("/api/facilities", fetcher);

  if (error) return <div>failed to load</div>;
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
