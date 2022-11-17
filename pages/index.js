import fetcher from "../helpers/fetcher";
import useSWR from "swr";
import styled from "styled-components";
import Head from "next/head";

export default function Home() {
  const { data, error } = useSWR("/api/facilities", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>App-Name</title>
      </Head>

      <main>
        <Heading>Einrichtungsnamen</Heading>
        <ul>
          {data.map((facility) => {
            return <ListItem key={facility.id}>{facility.name}</ListItem>;
          })}
        </ul>
      </main>
    </>
  );
}
const Heading = styled.h1`
  text-align: center;
`;
const ListItem = styled.li`
  list-style: none;
  line-height: 2rem;
`;
