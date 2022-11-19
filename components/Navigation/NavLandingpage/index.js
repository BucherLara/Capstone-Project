import Link from "next/link";
export default function NavLandingpage() {
  return (
    <>
      <Link href={"/schlafen"}>Schlafen</Link>
      <Link href={"/hygiene"}>Hygiene</Link>
      <Link href={"/medizin"}>Medizin</Link>
    </>
  );
}
