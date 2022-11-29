import Form from "../../components/Form";
import { nanoid } from "nanoid";
export default function NewFacilities({ setFacilities }) {
  function addFacilities(
    name,
    category,
    adress,
    link,
    target,
    requirements,
    filterCriteria,
    tel
  ) {
    setFacilities((oldFacilities) => [
      ...oldFacilities,
      {
        id: nanoid(),
        name,
        category,
        adress,
        link,
        target,
        requirements,
        image: "/icons/app.png",
        filterCriteria,
        tel,
        isBookmarked: false,
      },
    ]);
  }

  return (
    <>
      <Form onSubmit={addFacilities} />
    </>
  );
}
