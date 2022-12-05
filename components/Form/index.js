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
    <Container>
      <p>
        Hallo an alle Obdach- und Wohnungslosenhilfen in Hamburg. Wir freuen
        uns, wenn die Zahl der Hilfsangebote stetig wächst. Haltet eure
        Informationen aktuell und informiert gerne auch andere Einrichtungen und
        Klient*innen über die App. Danke!
      </p>

      <form onSubmit={handleSubmit}>
        <FlexLabel htmlFor="name">
          Name der Einrichtung
          <StyledInput type="text" id="name" name="name" required />
        </FlexLabel>
        <StyledFieldset>
          <StyledLegend>Kategorie der Einrichtung</StyledLegend>
          <StyledDiv>
            <CheckboxInput
              onClick={() => {
                setCategory("sleep");
              }}
              type="radio"
              id="Schlafen"
              name="category"
              value="Schlafen"
              defaultChecked
              required
            />
            <StyledLabel htmlFor="sleep"> Schlafen</StyledLabel>
          </StyledDiv>
          <StyledSection showDetails={category === "sleep"}>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="dog"
                name="filterCriteria"
                value="dog"
              />
              <StyledLabel htmlFor="dog">mit Hund</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="now"
                name="filterCriteria"
                value="now"
              />
              <StyledLabel htmlFor="now"> sofort</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="u25"
                name="filterCriteria"
                value="u25"
              />
              <StyledLabel htmlFor="u25">unter 25 Jahren</StyledLabel>
            </StyledDiv>
          </StyledSection>
          <StyledDiv>
            <CheckboxInput
              onClick={() => {
                setCategory("hygiene");
              }}
              type="radio"
              id="hygiene"
              name="category"
              value="hygiene"
              required
            />
            <StyledLabel htmlFor="hygiene">Hygiene</StyledLabel>
          </StyledDiv>
          <StyledSection showDetails={category === "hygiene"}>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="mobile"
                name="filterCriteria"
                value="mobile"
              />
              <StyledLabel htmlFor="mobile">mobil</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="lGBTQIA+"
                name="filterCriteria"
                value="lGBTQIA+"
              />
              <StyledLabel htmlFor="lGBTQIA+">LGBTQIA+</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="u25"
                name="filterCriteria"
                value="u25"
              />
              <StyledLabel htmlFor="u25">unter 25 Jahren</StyledLabel>
            </StyledDiv>
          </StyledSection>
          <StyledDiv>
            <CheckboxInput
              onClick={() => {
                setCategory("medicine");
              }}
              type="radio"
              id="medizin"
              name="category"
              value="medizin"
              required
            />
            <StyledLabel htmlFor="medicine"> Medizin</StyledLabel>
          </StyledDiv>
          <StyledSection showDetails={category === "medicine"}>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="general"
                name="filterCriteria"
                value="general"
              />
              <StyledLabel htmlFor="general">Allgemein</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="psychologist+"
                name="filterCriteria"
                value="psychologist"
              />
              <StyledLabel htmlFor="psychologist"> Psycholog*in</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="gynecologist"
                name="filterCriteria"
                value="gynecologist"
              />
              <StyledLabel htmlFor="gynecologist">Gynäkolog*in</StyledLabel>
            </StyledDiv>
          </StyledSection>
        </StyledFieldset>

        <FlexLabel htmlFor="target">
          Zielgruppe
          <StyledInput
            type="text"
            id="target"
            name="target"
            required
            placeholder="An wen richtet sich das Angebot?"
          />
        </FlexLabel>
        <FlexLabel htmlFor="requirements">
          Zugangsvoraussetzungen
          <StyledInput
            type="text"
            id="requirements"
            name="requirements"
            required
            placeholder="Welche Voraussetzungen gibt es?"
          />
        </FlexLabel>

        {/* <FlexLabel htmlFor="image">Logo:</FlexLabel>
        <input
          type="image"
          id="image"
          src=""
          alt="HandsWithaHeart"
          width="48"
          height="48"
        /> */}

        <FlexLabel htmlFor="address">
          Adresse
          <StyledInput
            type="text"
            id="address"
            name="address"
            required
            placeholder="Straße Nr., Plz Hamburg"
          />
        </FlexLabel>
        <FlexLabel htmlFor="link">
          Google-Maps-Link
          <StyledInput
            type="url"
            id="link"
            name="link"
            placeholder="https://www.google.com/maps/..."
            pattern="https?:\\/\\/((www\\.)?google\\.(com|fr|de)|goo.gl)\\/maps(\\?.+|\\/.+)"
            required
          />
        </FlexLabel>
        <FlexLabel htmlFor="tel">
          Telefonnummer
          <StyledInput
            type="tel"
            id="tel"
            name="tel"
            placeholder="0049..."
            pattern="(00|+)49[0-9]{,13}"
            required
          />
        </FlexLabel>

        <StyledButton type="submit" value="submit">
          Einrichtung hinzufügen
        </StyledButton>
      </form>
      <StyledLink href={"/"}>Zurück</StyledLink>
    </Container>
  );
}
const StyledLabel = styled.label`
  font-size: 18px;
`;

const Container = styled.div`
  margin: 20px;
`;
const StyledFieldset = styled.fieldset`
  border: none;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-left: 30px;

  ${({ showDetails }) => (showDetails ? "size:20px;" : "display:none")}
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 18px;
  border: none;
`;
const FlexLabel = styled(StyledLabel)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: bold;
`;

const StyledLegend = styled.legend`
  font-size: 18px;
  font-weight: bold;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: var(--font-color);
  font-size: 18px;
  margin: 15px 0 50px 0;
  font-weight: bold;
`;
const StyledButton = styled.button`
  border-radius: 36px;
  background-color: var(--third-color);
  color: var(--second-font-color);
  width: 100%;
  padding: 20px;
  font-size: 18px;
  margin-top: 15px;
`;

const StyledForm = styled.form`
  margin: 0 20px 0 20px;
`;

const CheckboxInput = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  cursor: text;
  margin-top: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

export { StyledForm, StyledLabel, CheckboxInput, StyledDiv };

// pattern="/^https?\:\/\/(www\.)?google\.(com|fr|de)\/maps\b/"
