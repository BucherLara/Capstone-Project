import Link from "next/link";
export default function MiniNav() {
  return (
    <>
      <button type="button">
        <Link href={"/"}>Home</Link>
      </button>
    </>
  );
}
