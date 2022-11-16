import fetcher from "../helpers/fetcher";
import useSWR from "swr";
export default function Home() {
  const { data, error } = useSWR("api/facilities", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  return (
    <>
      <h1>Einrichtungsnamen</h1>
      <p>{data[0].name}</p>
    </>
  );
}
