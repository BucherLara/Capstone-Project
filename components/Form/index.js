import styled from "styled-components";
export default function AddFacilities() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    // appendCards(data.inputQuestion, data.inputAnswer, data.inputTags);
    // navigateTo("home");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <fieldset>
        <legend>Neue Einrichtungen hinzufügen:</legend>
        <fieldset>
          {" "}
          <StyledLabel htmlFor="name">
            Name der Einrichtung:
            <StyledInput
              type="text"
              id="name"
              name="name"
              aria-labelledby="inputForFacilityName"
              required
            />
          </StyledLabel>
        </fieldset>

        <fieldset>
          <legend>Kategorie der Einrichtung wählen:</legend>
          <div>
            <StyledLabel htmtFor="sleep">
              <StyledInput
                type="checkbox"
                id="schlafen"
                name="schlafen"
                value="schlafen"
              />
              Schlafen
            </StyledLabel>
          </div>
          <StyledSection variant="displaySleep">
            <div>
              <StyledLabel htmtFor="dog">
                {" "}
                <StyledCheckbox
                  type="checkbox"
                  id="dog"
                  name="dog"
                  value="dog"
                />
                mit Hund
              </StyledLabel>
            </div>
            <div>
              <StyledLabel htmtFor="now">
                {" "}
                <StyledCheckbox
                  type="checkbox"
                  id="now"
                  name="now"
                  value="now"
                />
                sofort
              </StyledLabel>
            </div>
            <div>
              <StyledLabel htmtFor="u25">
                <StyledCheckbox
                  type="checkbox"
                  id="u25"
                  name="u25"
                  value="u25"
                />
                unter 25 Jahren
              </StyledLabel>
            </div>
          </StyledSection>{" "}
          <div>
            <StyledLabel htmtFor="hygiene">
              <StyledCheckbox
                type="checkbox"
                id="hygiene"
                name="hygiene"
                value="hygiene"
              />
              Hygiene
            </StyledLabel>
          </div>
          <StyledSection variant="displayHygiene">
            <div>
              <StyledLabel htmtFor="mobile">
                {" "}
                <StyledCheckbox
                  type="checkbox"
                  id="mobile"
                  name="mobile"
                  value="mobile"
                />
                mobil
              </StyledLabel>
            </div>
            <div>
              <StyledLabel htmtFor="lGBTQIA+">
                <StyledCheckbox
                  type="checkbox"
                  id="lGBTQIA+"
                  name="lGBTQIA+"
                  value="lGBTQIA+"
                />
                LGBTQIA+
              </StyledLabel>
            </div>
            <div>
              <StyledLabel htmtFor="u25">
                <StyledCheckbox
                  type="checkbox"
                  id="u25"
                  name="u25"
                  value="u25"
                />
                unter 25 Jahren
              </StyledLabel>
            </div>
          </StyledSection>
          <div>
            <StyledLabel htmtFor="medicine">
              {" "}
              <StyledCheckbox
                type="checkbox"
                id="medizin"
                name="medizin"
                value="medizin"
              />
              Medizin
            </StyledLabel>
          </div>
          <StyledSection variant="displayMedicine">
            <div>
              <StyledLabel htmtFor="general">
                <StyledCheckbox
                  type="checkbox"
                  id="general"
                  name="general"
                  value="general"
                />
                Allgemein
              </StyledLabel>
            </div>
            <div>
              <StyledLabel htmtFor="psychologist">
                <StyledCheckbox
                  type="checkbox"
                  id="psychologist+"
                  name="psychologist"
                  value="psychologist"
                />
                Pycholog*in
              </StyledLabel>
            </div>
            <div>
              {" "}
              <StyledLabel htmtFor="gynecologist">
                {" "}
                <StyledCheckbox
                  type="checkbox"
                  id="gynecologist"
                  name="gynecologist"
                  value="gynecologist"
                />
                Gynäkolog*in
              </StyledLabel>
            </div>
          </StyledSection>
        </fieldset>

        <fieldset>
          {" "}
          <StyledLabel htmlFor="target">
            Zielgruppe:
            <StyledInput type="text" id="target" name="target" required />
          </StyledLabel>
        </fieldset>
        <fieldset>
          <StyledLabel htmlFor="requirements">
            Zugangsvoraussetzungen:
            <StyledInput
              type="text"
              id="requirements"
              name="requirements"
              required
            />{" "}
          </StyledLabel>
        </fieldset>
        {/* <label htmlFor="image">Logo:</label>
        <input
          type="image"
          id="image"
          src="/icons/app.png"
          alt="HandsWithaHeart"
          width="48"
          height="48"
        /> */}
        <fieldset>
          {" "}
          <StyledLabel htmlFor="adress">
            Adresse:
            <StyledInput type="text" id="adress" name="adress" required />
          </StyledLabel>
        </fieldset>
        <fieldset>
          {" "}
          <StyledLabel htmlFor="link">
            Google-Maps-Link:
            <StyledInput
              type="url"
              id="link"
              name="link"
              placeholder="https://www.google.com/maps/..."
              pattern="https://www.google.com/maps/"
              required
            />
          </StyledLabel>
        </fieldset>
        <fieldset>
          <StyledLabel htmlFor="tel">
            Telefonnummer:{" "}
            <StyledInput type="number" id="tel" name="tel" required />
          </StyledLabel>
        </fieldset>
        <button type="submit" value="submit">
          Hinzufügen
        </button>
      </fieldset>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label``;

const StyledSection = styled.section`
  display: flex;
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
