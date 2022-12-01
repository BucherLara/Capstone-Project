import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header>
      <h1>
        {pathname === "/sleep"
          ? "Unterkünfte"
          : pathname === "/hygiene"
          ? "Duschmöglichkeiten"
          : pathname === "/medicine"
          ? "Medizinische Versorgung"
          : pathname === "/favorites"
          ? "meine Favoriten"
          : pathname === "/add"
          ? "Neue Einrichtung hinzufügen"
          : "Überlebenshilfen für wohnungslose Menschen"}
      </h1>
    </header>
  );
}
