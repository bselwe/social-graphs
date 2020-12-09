import React, { useState } from "react";
import styles from "./styles.module.css";

import pop_rap from "../../media/pop_rap.svg";
import pop_jazz from "../../media/pop_jazz.svg";
import rap from "../../media/rap.svg";
import r_and_b from "../../media/r&b.svg";
import rock from "../../media/rock.svg";
import jazz from "../../media/jazz.svg";

enum ComparedGenres {
  PopVsRap,
  RhythmAndBluesVsRock,
  PopVsJazz,
}

const TF_TR: React.FC = () => {
  const [comparedGenres, setComparedGenres] = useState<ComparedGenres>(
    ComparedGenres.PopVsRap
  );

  return (
    <div className={styles.container}>
      <section>
        <p>
        For a more elaborate analysis beyond the used artist attributes. 
        Lyrics were used in the sentiment analysis to further explore the connections between artists and how songs may capture personal traits among groups of artists.
        This section compares a pair of genres and presents two wordclouds showing words that appear a lot in one genre compared to the other.
        </p>
      </section>

      <p>Please select a pair of genres:</p>
      <button
        className={styles.btn_green}
        onClick={() => setComparedGenres(ComparedGenres.PopVsRap)}
      >
        Pop vs Rap
      </button>
      <button
        className={styles.btn_red}
        onClick={() => setComparedGenres(ComparedGenres.RhythmAndBluesVsRock)}
      >
        Rhythm and Blues vs Rock
      </button>
      <button
        className={styles.btn_blue}
        onClick={() => setComparedGenres(ComparedGenres.PopVsJazz)}
      >
        Pop vs Jazz
      </button>

      {comparedGenres !== undefined
        ? displayComparedGenres(comparedGenres)
        : null}

      <section>
        <p>
          One of the most interesting things to take away from these wordclouds
          is the difference in vibe the words present. Ex. Pop seems to have a very
          happy vibe, singing a lot about love and happiness. Rap has a very
          harsh vibe compared to Pop, with a lot of swear words being used.
        </p>
      </section>
    </div>
  );
};

function displayComparedGenres(genres: ComparedGenres) {
  switch (genres) {
    case ComparedGenres.PopVsRap:
      return (
        <div className={styles.images}>
          <img src={pop_rap} alt="pop" />
          <img src={rap} alt="rap" />
        </div>
      );
    case ComparedGenres.RhythmAndBluesVsRock:
      return (
        <div className={styles.images}>
          <img src={r_and_b} alt="rhythm and blues" />
          <img src={rock} alt="rock" />
        </div>
      );
    case ComparedGenres.PopVsJazz:
      return (
        <div className={styles.images}>
          <img src={pop_jazz} alt="pop" />
          <img src={jazz} alt="jazz" />
        </div>
      );
  }
}

export default TF_TR;
