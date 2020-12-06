import React from "react";
import styles from "./App.module.css";
import ArtistsByGenres from "./components/ArtistsByGenres";
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

      <div className={styles.artistsByGenres}>
        <Title>Artists network based on genres</Title>
        <ArtistsByGenres />
      </div>
    </div>
  );
}

export default App;
