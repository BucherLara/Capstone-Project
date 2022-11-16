import fetcher from "../helpers/fetcher";
import useSWR from "swr";
import styled from "styled-components";

export default function Home() {
  const { data, error } = useSWR("api/facilities", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <h1>Einrichtungsnamen</h1>
      {data.map((facility) => {
        return (
          <ul key={facility.id}>
            <ListItem>{facility.name}</ListItem>
          </ul>
        );
      })}
    </>
  );
}

const ListItem = styled.li`
  list-style: none;
`;
