import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function Footer() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <footer>
      <StyledNav>
        <StyledLink
          href={"/"}
          onClick={() => {
            setCurrentPage("home");
          }}
        >
          <svg
            fill={currentPage === "home" ? " #DAF7A6" : "black"}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
          >
            <path d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z" />
          </svg>
        </StyledLink>
        <StyledLink
          href={"/sleep"}
          onClick={() => {
            setCurrentPage("sleep");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            fill={currentPage === "sleep" ? " #DAF7A6" : "black"}
          >
            <path d="M2 38V8.75h3v19.7h17.65V13h16.1q3 0 5.125 2.125T46 20.25V38h-3v-6.55H5V38Zm11.5-12.45q-2.25 0-3.775-1.525T8.2 20.25q0-2.25 1.525-3.775T13.5 14.95q2.25 0 3.775 1.525T18.8 20.25q0 2.25-1.525 3.775T13.5 25.55Zm12.15 2.9H43v-8.2q0-1.75-1.25-3t-3-1.25h-13.1Zm-12.15-5.9q.95 0 1.625-.675t.675-1.625q0-.95-.675-1.625T13.5 17.95q-.95 0-1.625.675T11.2 20.25q0 .95.675 1.625t1.625.675Zm0-2.3ZM25.65 16v12.45Z" />
          </svg>
        </StyledLink>
        <StyledLink
          href={"/hygiene"}
          onClick={() => {
            setCurrentPage("hygiene");
          }}
        >
          <svg
            fill={currentPage === "hygiene" ? " #DAF7A6" : "black"}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
          >
            <path d="M14.9 34.85q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45Zm9.1 0q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45Zm9.1 0q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45ZM10 27.35v-3Q10 19 13.625 15t8.875-4.55V6h3v4.45q5.25.55 8.875 4.55T38 24.35v3Zm3-3h22q0-4.55-3.225-7.775Q28.55 13.35 24 13.35q-4.55 0-7.775 3.225Q13 19.8 13 24.35ZM14.9 42q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45Zm9.1 0q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05Q23.4 39 24 39q.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05Q24.6 42 24 42Zm9.1 0q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45ZM24 24.35Z" />
          </svg>
        </StyledLink>
        <StyledLink
          href={"/medicine"}
          onClick={() => {
            setCurrentPage("medicine");
          }}
        >
          <svg
            fill={currentPage === "medicine" ? " #DAF7A6" : "black"}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
          >
            <path d="M22.5 36.15h3v-6h6v-3h-6v-6h-3v6h-6v3h6ZM7 44q-1.2 0-2.1-.9Q4 42.2 4 41V15q0-1.2.9-2.1.9-.9 2.1-.9h9V7q0-1.2.9-2.1.9-.9 2.1-.9h10q1.2 0 2.1.9.9.9.9 2.1v5h9q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V15H7v26Zm12-29h10V7H19ZM7 41V15v26Z" />
          </svg>
        </StyledLink>
        <StyledLink
          href={"/favorites"}
          onClick={() => {
            setCurrentPage("favorites");
          }}
        >
          <svg
            fill={currentPage === "favorites" ? " #DAF7A6" : "black"}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
          >
            <path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1ZM24 38q5.05-4.65 8.325-7.975 3.275-3.325 5.2-5.825 1.925-2.5 2.7-4.45.775-1.95.775-3.9 0-3.3-2.1-5.425T33.5 8.3q-2.55 0-4.75 1.575T25.2 14.3h-2.45q-1.3-2.8-3.5-4.4-2.2-1.6-4.75-1.6-3.3 0-5.4 2.125Q7 12.55 7 15.85q0 1.95.775 3.925.775 1.975 2.7 4.5Q12.4 26.8 15.7 30.1 19 33.4 24 38Zm0-14.85Z" />
          </svg>
        </StyledLink>
      </StyledNav>
    </footer>
  );
}

const StyledLink = styled(Link)`
  padding: 0;
  ${({ active }) => (active ? "fill: #DAF7A6" : "fill:black")}
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  align-items: center;
  padding: 0;
  width: 100%;
  background-color: #097969;
  border-radius: 10px;
  height: 70px;
`;
