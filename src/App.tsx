import React from "react";
import styles from "./App.module.css";
import ArtistsByGenres from "./components/ArtistsByGenres";
import TFTR from "./components/TF-TR";

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
        <ArtistsByGenres />
      </div>
      <div className={styles.tf_tr}>
        <TFTR />
      </div>
    </div>
  );
}

export default App;