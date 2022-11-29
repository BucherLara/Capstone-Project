import styled from "styled-components";
import { css } from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Form({ onSubmit }) {
  const [sleep, setSleep] = useState(true);
  const [hygiene, setHygiene] = useState(false);
  const [medicine, setMedicine] = useState(false);

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    for (const property in data) {
      if (data[property].trim() === "") {
        return alert("Bitte gib einen Text in das Feld ein!");
      }
    }

    onSubmit(
      data.name,
      data.category,
      data.adress,
      data.link,
      data.target,
      data.requirements,
      data.filterCriteria,
      data.tel
    );
    alert("Die Einrichtung wurde erfolgreich hinzugefügt!");
    router.push("/");
  }

  return (
    <>
      <button onClick={() => router.push("/")}>
        {" "}
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="40px"
          height="40px"
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
      </button>

      <StyledForm onSubmit={handleSubmit}>
        <fieldset>
          <legend>Neue Einrichtungen hinzufügen:</legend>
          <fieldset>
            {" "}
            <label htmlFor="name">
              Name der Einrichtung:
              <StyledInput type="text" id="name" name="name" required />
            </label>
          </fieldset>

          <fieldset>
            <legend>Kategorie der Einrichtung auswählen:</legend>
            <div>
              <label htmtFor="sleep">
                <StyledInput
                  onClick={() => {
                    setSleep(true);
                    setHygiene(false);
                    setMedicine(false);
                  }}
                  type="radio"
                  id="schlafen"
                  name="category"
                  value="schlafen"
                  defaultChecked
                  required
                  // onChange={handleCheckbox}
                />
                Schlafen
              </label>
            </div>
            <StyledSection variant={sleep ? "show" : "hide"}>
              <div>
                <label htmtFor="dog">
                  {" "}
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
                <label htmtFor="now">
                  {" "}
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
                <label htmtFor="u25">
                  <StyledCheckbox
                    type="checkbox"
                    id="u25"
                    name="filterCriteria"
                    value="u25"
                  />
                  unter 25 Jahren
                </label>
              </div>
            </StyledSection>{" "}
            <div>
              <label htmtFor="hygiene">
                <StyledInput
                  onClick={() => {
                    setSleep(false);
                    setHygiene(true);
                    setMedicine(false);
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
            <StyledSection variant={hygiene ? "show" : "hide"}>
              <div>
                <label htmtFor="mobile">
                  {" "}
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
                <label htmtFor="lGBTQIA+">
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
                <label htmtFor="u25">
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
              <label htmtFor="medicine">
                {" "}
                <StyledInput
                  onClick={() => {
                    setSleep(false);
                    setHygiene(false);
                    setMedicine(true);
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
            <StyledSection variant={medicine ? "show" : "hide"}>
              <div>
                <label htmtFor="general">
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
                <label htmtFor="psychologist">
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
                {" "}
                <label htmtFor="gynecologist">
                  {" "}
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
          </fieldset>

          <fieldset>
            {" "}
            <label htmlFor="target">
              Zielgruppe:
              <StyledInput type="text" id="target" name="target" required />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="requirements">
              Zugangsvoraussetzungen:
              <StyledInput
                type="text"
                id="requirements"
                name="requirements"
                required
              />{" "}
            </label>
          </fieldset>
          {/* <label htmlFor="image">Logo:</label>
        <input
          type="image"
          id="image"
          src=""
          alt="HandsWithaHeart"
          width="48"
          height="48"
        /> */}
          <fieldset>
            {" "}
            <label htmlFor="adress">
              Adresse:
              <StyledInput type="text" id="adress" name="adress" required />
            </label>
          </fieldset>
          <fieldset>
            {" "}
            <label htmlFor="link">
              Google-Maps-Link:
              <StyledInput
                type="url"
                id="link"
                name="link"
                placeholder="https://www.google.com/maps/..."
                pattern="https://www.google.com/maps/"
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <label htmlFor="tel">
              Telefonnummer:{" "}
              <StyledInput
                type="number"
                id="tel"
                name="tel"
                placeholder="0049..."
                pattern="0049"
                required
              />
            </label>
          </fieldset>
          <button type="submit" value="submit">
            Hinzufügen
          </button>
        </fieldset>
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
  ${({ variant }) =>
    variant === "show" &&
    css`
      size: 20px;
    `}
  ${({ variant }) =>
    variant === "hide" &&
    css`
      display: none;
    `}
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
const StyledSvg = styled.svg``;
