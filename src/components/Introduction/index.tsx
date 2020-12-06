import React from "react";
import styles from "./styles.module.css";

const Introduction: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>
        The sample data used during computation is a subset of all artists and
        lyrics accessable through the Spotify and Genius API.
      </p>
      <p>
        <b>Following datasets have been constructed and used:</b> <br />
        <ol>
          <li>
            An artist JSON file containing all artists <i>(34663 in total)</i>{" "}
            and associated attributes: id, name, spotify popularity, followers
            and genres.
          </li>
          <li>
            Lyric files <i>(33977 in total)</i> each contain a list of songs and
            each lyric file is named by the Spotify Artist ID of the owning
            artist.
          </li>
        </ol>
      </p>
    </div>
  );
};

export default Introduction;
