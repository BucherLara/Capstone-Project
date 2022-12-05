import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ListItem } from "../FacilityList";
import { css } from "styled-components";

export default function Facility({ facility, setFacilities }) {
  const {
    name,
    address,
    target,
    requirements,
    image,
    link,
    tel,
    id,
    category,
  } = facility;

  function toggleBookmark(facilityId) {
    setFacilities((facilities) => {
      const newValue = facilities.map((facility) => {
        if (facility.id === facilityId) {
          return { ...facility, isBookmarked: !facility.isBookmarked };
        } else {
          return facility;
        }
      });
      return newValue;
    });
  }

  return (
    <>
      <StyledSection>
        <FlexContainer>
          <h3>{name}</h3>
          <StyledButton
            type="button"
            aria-label="bookmark"
            onClick={() => {
              toggleBookmark(id);
            }}
          >
            <StyledSvg
              variant={
                facility.isBookmarked ? "bookmarkActive" : "bookmarkNotActive"
              }
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
            >
              <path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1Z" />
              //
            </StyledSvg>
          </StyledButton>
        </FlexContainer>
        <ImageContainer>
          <StyledImage
            alt={`Logo der Einrichtung ${name}`}
            src={image}
            width={180}
            height={120}
            priority
          />
        </ImageContainer>

        <StyledList>
          <div>
            <ListItem>
              <StyledSpan>Kategorie: </StyledSpan> {category}
            </ListItem>

            <ListItem>
              <StyledSpan>Zielgruppe: </StyledSpan> {target}
            </ListItem>
            <ListItem>
              <StyledSpan>Zugangsvoraussetzungen: </StyledSpan>
              {requirements}
            </ListItem>

            <ListItem>
              <ColoredContainer>
                <StyledLink href={`tel:${tel}`}>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 30 30"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>Fill 1</title>
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Unterkunft-Card"
                        transform="translate(-102.000000, -312.000000)"
                        fill="#111111"
                      >
                        <g
                          id="Group"
                          transform="translate(30.000000, 294.000000)"
                        >
                          <g
                            id="Group-3"
                            transform="translate(72.000000, 18.000000)"
                          >
                            <path
                              d="M23.8583696,29.9742989 C10.9334608,27.7085283 2.91921458,19.7038918 0.037745641,6.18135634 C-0.0602054903,5.72099337 0.0346102014,5.23718598 0.297422744,4.85442777 C1.52933694,3.05785876 3.0320904,1.53309447 4.76416992,0.321695437 C5.32854903,-0.0681462476 6.0751599,-0.106572514 6.66894944,0.222276091 C9.03965528,1.52350357 11.0433893,3.5061861 12.6221458,6.11371859 C13.0648071,6.8431908 12.9550668,7.77269273 12.354442,8.37284457 L9.70010426,11.0262002 C9.45121307,11.2749993 9.3950887,11.6672858 9.56364993,11.9799615 C10.5532574,13.8120732 11.7609033,15.446788 13.153979,16.8390977 C14.5465532,18.2311566 16.181873,19.4386064 18.0149137,20.4280985 C18.327956,20.5970361 18.7198859,20.5409952 18.9687771,20.2916946 L21.6233656,17.638339 C22.2237396,17.0376856 23.1531466,16.9279858 23.8840802,17.371173 C26.4926405,18.9495961 28.475806,20.9520873 29.7784558,23.3238593 C30.1059838,23.9154859 30.0679822,24.6615698 29.6801911,25.2222924 C28.4620101,26.9628205 26.9302852,28.4694686 25.1252126,29.7030584 C24.8415808,29.8970076 24.4996297,30 24.1549195,30 C24.0557769,30 23.9565716,29.9914121 23.8583696,29.9742989 Z"
                              id="Fill-1"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  {tel}
                </StyledLink>
              </ColoredContainer>
            </ListItem>

            <ListItem>
              <ColoredContainer>
                <StyledLink href={link} target="_blank">
                  <svg
                    width="30px"
                    height="35px"
                    viewBox="0 0 92.29 132.26"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>GoogleMaps</title>
                    <defs>
                      <polygon
                        id="path-1"
                        points="0 0 32.5655682 0 32.5655682 51.5980964 0 51.5980964"
                      ></polygon>
                    </defs>
                    <g
                      id="GoogleMaps"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="Group-12">
                        <path
                          d="M25.446636,98.0095393 C29.2729236,102.885492 32.7557469,108.022312 35.8689504,113.382143 C38.5278727,118.423289 39.6353554,121.840723 41.5784404,127.914327 C42.7698964,131.269814 43.8470937,132.271298 46.1618635,132.271298 C48.6851896,132.271298 49.8291525,130.567743 50.7136245,127.932911 C52.5500222,122.197265 53.9913329,117.819646 56.2648043,113.683621 C60.7257091,105.698594 66.2686293,98.6028582 71.7151868,91.7824439 C73.1902244,89.8524367 82.7232487,78.6075978 87.0148304,69.7353463 C87.0148304,69.7353463 92.29,59.9889474 92.29,46.3777159 C92.29,33.6454499 87.0877908,24.8144967 87.0877908,24.8144967 L72.1102739,28.82525 L63.0143232,52.7817057 L60.7642542,56.0848814 L60.314791,56.6830185 L59.7159656,57.4325826 L58.6656122,58.6288567 L57.164419,60.1293616 L49.0644457,66.72883 L28.8152007,78.4203788 L25.446636,98.0095393 Z"
                          id="Fill-1"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M4.54673637,68.0968362 C9.48876631,79.3857266 19.0190374,89.3090199 25.467767,98.0174548 L59.7164474,57.4480695 C59.7164474,57.4480695 54.8914294,63.7584498 46.1382546,63.7584498 C36.3897908,63.7584498 28.5135167,55.9730318 28.5135167,46.1564259 C28.5135167,39.4248029 32.5635033,34.8000816 32.5635033,34.8000816 L9.31462514,41.0299302 L4.54673637,68.0968362 Z"
                          id="Fill-3"
                          fill="#FBBC04"
                        ></path>
                        <path
                          d="M60.0985256,2.08597715 C71.4734541,5.75326622 81.2088401,13.452646 87.0979777,24.8069254 L59.7268409,57.4243229 C59.7268409,57.4243229 63.7768275,52.7163167 63.7768275,46.0266804 C63.7768275,35.9808688 55.317559,28.4769677 46.18031,28.4769677 C37.539329,28.4769677 32.5759616,34.7763351 32.5759616,34.7763351 L32.5759616,14.2276774 L60.0985256,2.08597715 Z"
                          id="Fill-5"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M10.8205677,16.498671 C17.6148264,8.37047717 29.5693077,0 46.0500827,0 C54.0454337,0 60.0701674,2.09864196 60.0701674,2.09864196 L32.5503567,34.7945063 L13.0520525,34.7945063 L10.8205677,16.498671 Z"
                          id="Fill-7"
                          fill="#1A73E8"
                        ></path>
                        <g
                          id="Group-11"
                          transform="translate(0.000000, 16.498740)"
                        >
                          <mask id="mask-2" fill="white">
                            <use xlinkHref="#path-1"></use>
                          </mask>
                          <g id="Clip-10"></g>
                          <path
                            d="M4.54673637,51.5980964 C4.54673637,51.5980964 -0.000206491502,42.6941829 -0.000206491502,29.7953471 C-0.000206491502,17.6040888 4.73946177,6.94775072 10.8206365,0 L32.5655682,18.2985886 L4.54673637,51.5980964 Z"
                            id="Fill-9"
                            fill="#EA4335"
                            mask="url(#mask-2)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div>
                    <StyledP>{address.split(",")[0]},</StyledP>
                    <StyledParagraph>{address.split(",")[1]}</StyledParagraph>
                  </div>
                </StyledLink>
              </ColoredContainer>
            </ListItem>
          </div>
        </StyledList>
      </StyledSection>
    </>
  );
}
const StyledImage = styled(Image)`
  object-fit: contain;
  border-radius: 40%;
`;
const ImageContainer = styled.div`
  text-align: center;
`;

const StyledSection = styled.section`
  border-radius: 40px;
  background-color: var(--secondary-color);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;

  margin: 20px;
`;
const StyledList = styled.ul`
  text-align: left;
  padding: 0 0 0 0;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 21px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 65px;
  width: 350px;
`;

const StyledButton = styled.button`
  border-style: none;
  padding: 0;
  background-color: white;
`;
const StyledSvg = styled.svg`
  height: 45px;

  ${({ variant }) =>
    variant === "bookmarkActive" &&
    css`
      fill: #ff7f7f;
    `}

  ${({ variant }) =>
    variant === "bookmarkNotActive" &&
    css`
      stroke: black;

      fill: var(--secondary-color);
    `}
`;
const StyledSpan = styled.span`
  font-weight: bold;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ColoredContainer = styled.div`
  background-color: var(--primary-color);
  border-radius: 36px;
  margin: 10px 0 10px 0;
  text-align: center;
  margin-top: 20px;
`;
const StyledParagraph = styled.p`
  margin-top: -15px;
  text-align: left;
`;
const StyledP = styled.p`
  text-align: left;
`;

export { StyledList, StyledImage };
