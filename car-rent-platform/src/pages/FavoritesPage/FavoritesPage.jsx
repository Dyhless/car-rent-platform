import React from "react";
import { MainContainer } from "../../styles/App.styled";
import Favorites from "../../components/Favorites/Favorites";

export default function CatalogPage() {
  return (
    <>
      <MainContainer>
        <Favorites />
      </MainContainer>
    </>
  );
}
