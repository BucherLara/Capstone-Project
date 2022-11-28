import Link from "next/link";
import styled from "styled-components";

export default function FavoriteLink() {
  return (
    <>
      <StyledLink href={"/favorites"}>Favoriten</StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  border-radius: 20px;
  border-style: solid;
  padding: 10px;
  text-decoration: none;
`;
