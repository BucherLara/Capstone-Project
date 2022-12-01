import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function Form({ addFacilities }) {
  const [category, setCategory] = useState("sleep");

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const {
      name,
      category,
      address,
      target,
      requirements,
      link,
      tel,
      filterCriteria,
    } = data;

    for (const property in data) {
      if (data[property].trim() === "") {
        return alert(`Bitte gib einen Text in das ${property} Feld ein!`);
      }
    }

    addFacilities(
      name.trim(),
      category,
      address.trim(),
      link.trim(),
      target.trim(),
      requirements.trim(),
      filterCriteria,
      tel.trim()
    );
    alert("Die Einrichtung wurde erfolgreich hinzugefügt!");
    router.push("/");
  }

  return (
    <>
      <Link href={"/"}>
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="40px"
          height="40px"
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
      </Link>
      <h3>Neue Einrichtungen hinzufügen:</h3>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name der Einrichtung:
          <StyledInput type="text" id="name" name="name" required />
        </label>
        <legend>Kategorie der Einrichtung auswählen:</legend>
        <div>
          <label htmlFor="sleep">
            <StyledInput
              onClick={() => {
                setCategory("sleep");
              }}
              type="radio"
              id="schlafen"
              name="category"
              value="schlafen"
              defaultChecked
              required
            />
            Schlafen
          </label>
        </div>
        <StyledSection showDetails={category === "sleep"}>
          <div>
            <label htmlFor="dog">
              <StyledCheckbox
                type="checkbox"
                id="dog"
                name="filterCriteria"
                value="dog"
              />
              mit Hund
            </label>
          </div>
          <div>
            <label htmlFor="now">
              <StyledCheckbox
                type="checkbox"
                id="now"
                name="filterCriteria"
                value="now"
              />
              sofort
            </label>
          </div>
          <div>
            <label htmlFor="u25">
              <StyledCheckbox
                type="checkbox"
                id="u25"
                name="filterCriteria"
                value="u25"
              />
              unter 25 Jahren
            </label>
          </div>
        </StyledSection>
        <div>
          <label htmlFor="hygiene">
            <StyledInput
              onClick={() => {
                setCategory("hygiene");
              }}
              type="radio"
              id="hygiene"
              name="category"
              value="hygiene"
              required
            />
            Hygiene
          </label>
        </div>
        <StyledSection showDetails={category === "hygiene"}>
          <div>
            <label htmlFor="mobile">
              <StyledCheckbox
                type="checkbox"
                id="mobile"
                name="filterCriteria"
                value="mobile"
              />
              mobil
            </label>
          </div>
          <div>
            <label htmlFor="lGBTQIA+">
              <StyledCheckbox
                type="checkbox"
                id="lGBTQIA+"
                name="filterCriteria"
                value="lGBTQIA+"
              />
              LGBTQIA+
            </label>
          </div>
          <div>
            <label htmlFor="u25">
              <StyledCheckbox
                type="checkbox"
                id="u25"
                name="filterCriteria"
                value="u25"
              />
              unter 25 Jahren
            </label>
          </div>
        </StyledSection>
        <div>
          <label htmlFor="medicine">
            <StyledInput
              onClick={() => {
                setCategory("medicine");
              }}
              type="radio"
              id="medizin"
              name="category"
              value="medizin"
              required
            />
            Medizin
          </label>
        </div>
        <StyledSection showDetails={category === "medicine"}>
          <div>
            <label htmlFor="general">
              <StyledCheckbox
                type="checkbox"
                id="general"
                name="filterCriteria"
                value="general"
              />
              Allgemein
            </label>
          </div>
          <div>
            <label htmlFor="psychologist">
              <StyledCheckbox
                type="checkbox"
                id="psychologist+"
                name="filterCriteria"
                value="psychologist"
              />
              Pycholog*in
            </label>
          </div>
          <div>
            <label htmlFor="gynecologist">
              <StyledCheckbox
                type="checkbox"
                id="gynecologist"
                name="filterCriteria"
                value="gynecologist"
              />
              Gynäkolog*in
            </label>
          </div>
        </StyledSection>
        <label htmlFor="target">
          Zielgruppe:
          <StyledInput type="text" id="target" name="target" required />
        </label>
        <label htmlFor="requirements">
          Zugangsvoraussetzungen:
          <StyledInput
            type="text"
            id="requirements"
            name="requirements"
            required
          />
        </label>

        {/* <label htmlFor="image">Logo:</label>
        <input
          type="image"
          id="image"
          src=""
          alt="HandsWithaHeart"
          width="48"
          height="48"
        /> */}

        <label htmlFor="address">
          addresse:
          <StyledInput type="text" id="address" name="address" required />
        </label>
        <label htmlFor="link">
          Google-Maps-Link:
          <StyledInput
            type="url"
            id="link"
            name="link"
            placeholder="https://www.google.com/maps/..."
            pattern="https://www.google.com/maps/.*"
            required
          />
        </label>
        <label htmlFor="tel">
          Telefonnummer:
          <StyledInput
            type="number"
            id="tel"
            name="tel"
            placeholder="0049..."
            pattern="0049"
            required
          />
        </label>
        <button type="submit" value="submit">
          Hinzufügen
        </button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;

  ${({ showDetails }) => (showDetails ? "size:20px;" : "display:none")}
`;

const StyledInput = styled.input`
  size: 30px;
  margin: 8px 0;
  cursor: text;
`;
const StyledCheckbox = styled(StyledInput)`
  size: 20px;
  padding: 0;
  width: 20%;
`;
