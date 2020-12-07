import React from "react";
import styles from "./styles.module.css";

import popularities from "./popularities_normal.svg";
import genres from "./genres.svg";

const Artists: React.FC = () => {
  return (
    <div className={styles.container}>
      <section>
        <p>
          There are 34 633 artists used in the analysis below. Each of the
          artist is identified by the following attributes:
        </p>
        <ol className={styles.artistAttributes}>
          <li>
            <i>id</i> - the Spotify ID for the artist
          </li>
          <li>
            <i>name</i> - the name of the artist
          </li>
          <li>
            <i>popularity</i> - the popularity of the artist, a value between 0
            and 100, with 100 being the most popular. The artist’s popularity
            depends on the popularity of all the artist’s tracks.
          </li>
          <li>
            <i>followers</i> - the total number of artist's followers
          </li>
          <li>
            <i>genres</i> - a list of the genres the artist is associated with
          </li>
        </ol>
      </section>

      <section>
        <b>Popularities</b>
        <p>
          The figure below shows the distribution of artists' popularities.
          Based on calculations it was found that the average popularity (mean)
          is equal to 47.96 and the standard deviation of popularities is equal
          to 14. It seems that the distribution partially resembles a Gaussian
          distribution. For the sake of comparison a normal distribution with
          these parameters is plotted in a red color.
        </p>
        <img src={popularities} width={800} alt={"popularities"} />
      </section>

      <section>
        <b>Genres</b>
        <img src={genres} width={800} alt={"genres"} />
      </section>
    </div>
  );
};

export default Artists;
