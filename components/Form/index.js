import { useRouter } from "next/router";
import { useState } from "react";
import SnackBar from "../Snackbar";
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
  StyledUpload,
  StyledSvg,
  StyledP,
} from "./styled.form";

export default function Form({ addFacilities }) {
  const [category, setCategory] = useState("sleep");
  const [showSnack, setShowSnack] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
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

    const placeholderImage =
      "https://res.cloudinary.com/dk8ucka0s/image/upload/v1670507995/app_igyosw.png";

    if (uploadImage.value === "") {
      addFacilities(
        name.trim(),
        category,
        address.trim(),
        link.trim(),
        target.trim(),
        requirements.trim(),
        placeholderImage,
        filterCriteria,
        tel.trim()
      );
    } else {
      const response = await fetch("/api/image/upload", {
        method: "POST",
        body: formData,
      });

      const imageData = await response.json();
      const image = imageData.secureUrl;

      addFacilities(
        name.trim(),
        category,
        address.trim(),
        link.trim(),
        target.trim(),
        requirements.trim(),
        image,
        filterCriteria,
        tel.trim()
      );
    }
    setShowSnack(true);
    // router.push("/");
  }

  const [imageValue, setImageValue] = useState("");

  function imageHandler(event) {
    const value = event.target.name;
    setImageValue(value);
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
          Name der Einrichtung*
          <StyledInput
            type="text"
            id="name-der-einrichtung"
            name="name"
            required
            pattern=".*[\S]+.*"
          />
        </FlexLabel>
        <StyledFieldset>
          <StyledLegend>Kategorie der Einrichtung*</StyledLegend>
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
            <StyledLabel htmlFor="schlafen"> Schlafen*</StyledLabel>
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
            <StyledLabel htmlFor="hygiene">Hygiene*</StyledLabel>
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
            <StyledLabel htmlFor="medizin"> Medizin*</StyledLabel>
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
          Zielgruppe*
          <StyledInput
            type="text"
            id="zielgruppe"
            name="target"
            required
            placeholder="An wen richtet sich das Angebot?"
            pattern=".*[\S]+.*"
          />
        </FlexLabel>
        <FlexLabel htmlFor="zugangsvoraussetzungen">
          Zugangsvoraussetzungen*
          <StyledInput
            type="text"
            id="zugangsvoraussetzungen"
            name="requirements"
            required
            placeholder="Welche Voraussetzungen gibt es?"
            pattern=".*[\S]+.*"
          />
        </FlexLabel>
        <FlexLabel htmlFor="adresse">
          Adresse*
          <StyledInput
            type="text"
            id="adresse"
            name="address"
            required
            placeholder="Straße Nr., Plz Hamburg"
            pattern=".*[\S]+.*"
          />
        </FlexLabel>
        <FlexLabel htmlFor="google-maps-link">
          Google-Maps-Link*
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
          Telefonnummer*
          <StyledInput
            type="tel"
            id="telefonnummer"
            name="tel"
            placeholder="0049..."
            pattern="(00|\+)49[0-9]{7,13}"
            required
          />
        </FlexLabel>
        <h2>Bild hinzufügen (optional)</h2>
        <FlexLabel htmlFor="uploadImage">
          <StyledSvg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 121.86 122.88"
            xmlSpace="preserve"
          >
            <g>
              <path
                className="st0"
                d="M72.09,18.72h42.37c2.05,0,3.89,0.84,5.22,2.18c1.34,1.34,2.18,3.2,2.18,5.22v89.36 c0,2.05-0.84,3.89-2.18,5.22c-1.34,1.34-3.2,2.18-5.22,2.18H24.48c-2.05,0-3.89-0.84-5.22-2.18c-1.34-1.34-2.18-3.2-2.18-5.22 V71.46c2.47,1,5.05,1.78,7.72,2.29v20.28h0.03l0,0C37.72,81.7,46.26,75.61,59.08,65.2c0.05,0.05,0.1,0.1,0.15,0.15 c0.03,0.03,0.03,0.06,0.06,0.06l26.82,31.73l4.1-25.24c0.28-1.62,1.8-2.73,3.42-2.45c0.62,0.09,1.18,0.4,1.62,0.81l18.82,19.77 V27.91c0-0.4-0.16-0.75-0.44-0.99c-0.25-0.25-0.62-0.44-0.99-0.44H74.05C73.64,23.8,72.98,21.21,72.09,18.72L72.09,18.72z M32.79,0 C50.9,0,65.58,14.68,65.58,32.79c0,18.11-14.68,32.79-32.79,32.79C14.68,65.58,0,50.9,0,32.79C0,14.68,14.68,0,32.79,0L32.79,0z M15.37,33.37h11.04v15.76h12.45V33.37h11.36L32.8,16.44L15.37,33.37L15.37,33.37L15.37,33.37z M94.27,35.66 c2.95,0,5.66,1.21,7.58,3.14c1.96,1.96,3.14,4.63,3.14,7.59c0,2.95-1.21,5.66-3.14,7.58c-1.96,1.96-4.63,3.14-7.58,3.14 c-2.95,0-5.66-1.21-7.59-3.14c-1.96-1.96-3.14-4.63-3.14-7.58c0-2.95,1.21-5.65,3.14-7.59C88.65,36.84,91.32,35.66,94.27,35.66 L94.27,35.66L94.27,35.66z"
              />
            </g>
          </StyledSvg>
          <StyledUpload
            type="file"
            id="uploadImage"
            name="uploadImage"
            defaultValue={""}
            onChange={imageHandler}
          />
          {imageValue === "" ? "" : <p>Das Bild wurde hinzugefügt!</p>}
        </FlexLabel>
        <StyledP> * Diese Felder müssen ausgefüllt werden!</StyledP>
        <StyledButton type="submit" value="submit">
          Einrichtung hinzufügen
        </StyledButton>
      </form>
      <ButtonContainer>
        <StyledBackButton onClick={() => router.back()}>
          Zurück
        </StyledBackButton>
      </ButtonContainer>
      {showSnack && (
        <SnackBar
          onClose={() => {
            router.push("/");
          }}
        />
      )}
    </Container>
  );
}
