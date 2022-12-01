import Header from "../Header";
import Footer from "../Footer";

import { useRouter } from "next/router";
export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <>
      <Header />
      <main>{children}</main>
      {pathname !== "/" ? <Footer /> : null}
    </>
  );
}
