import NavLandingpage from "../components/NavLandingpage";

export default function Home({ facilities }) {
  if (!facilities) return <div>loading...</div>;

  return (
    <>
      <NavLandingpage />
    </>
  );
}
