import styled from "styled-components";

export default function Facility({ facility }) {
  const {
    id,
    name,
    category,
    adress,
    target,
    requirements,
    image,
    filterCriteria,
  } = facility;

  return (
    <>
      <p>{name}</p>
    </>
  );
}
