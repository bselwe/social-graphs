import React from "react";
import styles from "./App.module.css";
import ArtistsByGenres from "./components/ArtistsByGenres";
import DataSets from "./components/DataSets";
import Introduction from "./components/Introduction";
import TFTR from "./components/TFTR";
import RelatedArtists from "./components/RelatedArtists";
import Title from "./components/Title";

function App() {
  return (
    <div className={styles.app}>
      <h1>Social Graphs</h1>
      <h3>Assignment 2</h3>
      <ul>
        <li>Nicolae Popovici</li>
        <li>Benjamin Starostka</li>
        <li>Bartosz Selwesiuk</li>
      </ul>

      <div className={styles.introduction}>
        <Title>Introduction</Title>
        <Introduction />
      </div>

      <div className={styles.artistsByGenres}>
        <Title>Artists network based on genres</Title>
        <ArtistsByGenres />
      </div>

      <div className={styles.relatedArtists}>
        <Title>Related artists network</Title>
        <RelatedArtists />
      </div>

      <div className={styles.tf_tr}>
        <Title>TF-TR</Title>
        <TFTR />
      </div>

      <div className={styles.dataSets}>
        <Title>Download data sets</Title>
        <DataSets />
      </div>
    </div>
  );
}

export default App;
