import React from "react";
import { MainContainer } from "../../styles/App.styled";
import Catalog from "../../components/Catalog/Catalog";

export default function CatalogPage() {
  return (
    <>
      <MainContainer>
        <Catalog />
      </MainContainer>
    </>
  );
}
