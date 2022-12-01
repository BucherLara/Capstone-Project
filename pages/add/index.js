import Form from "../../components/Form";
import Head from "next/head";

export default function NewFacilities({ addFacilities }) {
  return (
    <>
      <Head>
        <title>Neue Einrichtung hinzufügen</title>
        <meta key="title" content="Neue Einrichtung hinzufügen<" />
      </Head>
      <Form addFacilities={addFacilities} />
    </>
  );
}
