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
          Based on calculations it was found that the average popularity is
          equal to 47.96 and the standard deviation of popularities is equal to
          14. The figure below shows the distribution of artists' popularities.
          It seems that the distribution partially resembles a Gaussian
          distribution. For the sake of comparison a normal distribution with
          the aforementioned parameters is plotted in a red color.
        </p>
        <img src={popularities} width={800} alt={"popularities"} />
      </section>

      <section>
        <b>Genres</b>
        <p>
          It was found that there are 3301 genres among all artists in the data
          set. To find which ones are more popular or tend to have more artists
          involved a histogram of genres was plotted below. It seems that the
          genres with the highest number of artists include different variations
          of rock such as rock, hard rock, pub rock, stoner rock, but also dirty
          south rap, dancehall, glitchcore or reggae fusion. Among genres with
          less artists there are gospel blues, jewish hip hop, israeli trap,
          finnish classical, folk rock italiano. It makes a lot of sense as
          these genres seem to be more specialized or niche and they are often
          subgenres of more popular genres.
        </p>
      </section>

      <img
        src={genres}
        width={1100}
        height={850}
        style={{ marginTop: "-200px", marginBottom: "32px" }}
        alt={"genres"}
      />
    </div>
  );
};

export default Artists;
