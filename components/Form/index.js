import { useRouter } from "next/router";
import { useState } from "react";
import {
  StyledDiv,
  CheckboxInput,
  StyledButton,
  StyledLegend,
  FlexLabel,
  StyledInput,
  StyledSection,
  StyledFieldset,
  Container,
  StyledLabel,
  StyledBackButton,
  ButtonContainer,
} from "./styled.form";

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
        <FlexLabel htmlFor="name-der-einrichtung">
          Name der Einrichtung
          <StyledInput
            type="text"
            id="name-der-einrichtung"
            name="name"
            required
          />
        </FlexLabel>
        <StyledFieldset>
          <StyledLegend>Kategorie der Einrichtung</StyledLegend>
          <StyledDiv>
            <CheckboxInput
              onClick={() => {
                setCategory("sleep");
              }}
              type="radio"
              id="schlafen"
              name="category"
              value="Schlafen"
              defaultChecked
              required
            />
            <StyledLabel htmlFor="schlafen"> Schlafen</StyledLabel>
          </StyledDiv>
          <StyledSection showDetails={category === "sleep"}>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="mit-hund"
                name="filterCriteria"
                value="dog"
              />
              <StyledLabel htmlFor="mit-hund">mit Hund</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="sofort"
                name="filterCriteria"
                value="now"
              />
              <StyledLabel htmlFor="sofort"> sofort</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="personen-u25"
                name="filterCriteria"
                value="u25"
              />
              <StyledLabel htmlFor="personen-u25">unter 25 Jahren</StyledLabel>
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
              value="Hygiene"
              required
            />
            <StyledLabel htmlFor="hygiene">Hygiene</StyledLabel>
          </StyledDiv>
          <StyledSection showDetails={category === "hygiene"}>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="mobil"
                name="filterCriteria"
                value="mobile"
              />
              <StyledLabel htmlFor="mobil">mobil</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="lGBTQIA+-personen"
                name="filterCriteria"
                value="lGBTQIA+"
              />
              <StyledLabel htmlFor="lGBTQIA+-personen">LGBTQIA+</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="personen-u25"
                name="filterCriteria"
                value="u25"
              />
              <StyledLabel htmlFor="personen-u25">unter 25 Jahren</StyledLabel>
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
              value="Medizin"
              required
            />
            <StyledLabel htmlFor="medizin"> Medizin</StyledLabel>
          </StyledDiv>
          <StyledSection showDetails={category === "medicine"}>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="allgemein-medizin"
                name="filterCriteria"
                value="general"
              />
              <StyledLabel htmlFor="allgemein-medizin">Allgemein</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="psycholog*in"
                name="filterCriteria"
                value="psychologist"
              />
              <StyledLabel htmlFor="psycholog*in">Psycholog*in</StyledLabel>
            </StyledDiv>
            <StyledDiv>
              <CheckboxInput
                type="checkbox"
                id="gynäkolog*in"
                name="filterCriteria"
                value="gynecologist"
              />
              <StyledLabel htmlFor="gynäkolog*in">Gynäkolog*in</StyledLabel>
            </StyledDiv>
          </StyledSection>
        </StyledFieldset>

        <FlexLabel htmlFor="zielgruppe">
          Zielgruppe
          <StyledInput
            type="text"
            id="zielgruppe"
            name="target"
            required
            placeholder="An wen richtet sich das Angebot?"
          />
        </FlexLabel>
        <FlexLabel htmlFor="zugangsvoraussetzungen">
          Zugangsvoraussetzungen
          <StyledInput
            type="text"
            id="zugangsvoraussetzungen"
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

        <FlexLabel htmlFor="adresse">
          Adresse
          <StyledInput
            type="text"
            id="adresse"
            name="address"
            required
            placeholder="Straße Nr., Plz Hamburg"
          />
        </FlexLabel>
        <FlexLabel htmlFor="google-maps-link">
          Google-Maps-Link
          <StyledInput
            type="url"
            id="google-maps-link"
            name="link"
            placeholder="https://www.google.com/maps/..."
            pattern="https?:\/\/((www\.)?google\.(com|fr|de)|goo.gl)\/maps(\?.+|\/.+)"
            required
          />
        </FlexLabel>
        <FlexLabel htmlFor="telefonnummer">
          Telefonnummer
          <StyledInput
            type="tel"
            id="telefonnummer"
            name="tel"
            placeholder="0049..."
            pattern="(00|\+)49[0-9]{7,13}"
            required
          />
        </FlexLabel>

        <StyledButton type="submit" value="submit">
          Einrichtung hinzufügen
        </StyledButton>
      </form>
      <ButtonContainer>
        <StyledBackButton onClick={() => router.back()}>
          Zurück
        </StyledBackButton>
      </ButtonContainer>
    </Container>
  );
}
