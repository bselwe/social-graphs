import React from "react";
import styles from "./styles.module.css";

const Introduction: React.FC = () => {
  return (
    <div className={styles.container}>
      <section>
        <p>
          The data presented on this website and used for computations is a
          subset of all artists and lyrics accessable through the Spotify and
          Genius API.
        </p>
        <p>Following data sets have been constructed and used:</p>

        <ol>
          <li>
            An artists file containing all artists (34 663 in total), each with
            associated attributes: id, name, Spotify popularity, followers and
            genres.
          </li>
          <li>
            A related artists file containing related artists according to
            Spotify's recommendations.
          </li>
          <li>
            Lyric files (33 977 in total), each containing a list of top 10
            artist's tracks with associated lyrics. Each lyric file is named by
            the Spotify artist ID of the owning artist.
          </li>
        </ol>

        <p>
          <i>
            Note: These data sets can be accessed from the section "Download
            data sets" below.
          </i>
        </p>

        <p>
          The following sections explore how artists are connected based on
          their genres or related artists. For a more elaborate analysis, beyond
          the artist attributes, artists tracks' lyrics were used in the
          sentiment analysis with the purpose of further exploring the
          connections between artists and how songs may capture personal traits
          among groups of artists.
        </p>
      </section>
    </div>
  );
};

export default Introduction;
