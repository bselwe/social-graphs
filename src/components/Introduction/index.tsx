import React from "react";
import styles from "./styles.module.css";

const Introduction: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>
        The data presented on this website and used for computations is a subset
        of all artists and lyrics accessable through the Spotify and Genius API.
      </p>
      <p>
        <b>Following data sets have been constructed and used:</b> <br />
        <ol>
          <li>
            An artists file containing all artists <i>(34663 in total)</i>, each
            with associated attributes: id, name, spotify popularity, followers
            and genres.
          </li>
          <li>
            Lyric files <i>(33977 in total)</i>, each containing a list of top
            10 artist's tracks with associated lyrics. Each lyric file is named
            by the Spotify artist ID of the owning artist.
          </li>
        </ol>
      </p>
    </div>
  );
};

export default Introduction;
