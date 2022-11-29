import Form from "../../components/Form";
import {nanoid} from nanoid
export default function Add({ setFacilities }) {
  function addFacilities(
    id,
    name,
    category,
    adress,
    link,
    target,
    requirements,
    image,
    filterCriteria,
    tel,
    isBookmarked
  ) {
    setFacilities((oldFacilities) => [
      ...oldFacilities,
      { id: nanoid(), name },
    ]);
  }

  return (
    <>
      <Form />
    </>
  );
}
