import React from "react";
import styles from "./App.module.css";
import ArtistsByGenres from "./components/ArtistsByGenres";
import DataSets from "./components/DataSets";
import Introduction from "./components/Introduction";
import TFTR from "./components/TFTR";
import RelatedArtists from "./components/RelatedArtists";
import Title from "./components/Title";
import joinCls from "./helpers/joinClasses";
import Artists from "./components/Artists";
import Sentiments from "./components/Sentiments";
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

      <div className={joinCls(styles.introduction, styles.section)}>
        <Title>Introduction</Title>
        <Introduction />
      </div>

      <div className={styles.section}>
        <Title>Artists</Title>
        <Artists />
      </div>

      <div className={styles.section}>
        <Title>Artists network based on genres</Title>
        <ArtistsByGenres />
      </div>

      <div className={styles.section}>
        <Title>Related artists network</Title>
        <RelatedArtists />
      </div>

      <div className={styles.section}>
        <Title>TF-TR</Title>
        <TFTR />
      </div>

      <div className={styles.section}>
        <Title>Sentiment analysis</Title>
        <Sentiments />
      </div>

      <div className={styles.section}>
        <Title>Download data sets</Title>
        <DataSets />
      </div>
    </div>
  );
}

export default App;
