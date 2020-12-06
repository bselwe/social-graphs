import React, { useState } from "react";
import styles from "./styles.module.css";

import pop_rap from "../../media/pop_rap.svg";
import pop_jazz from "../../media/pop_jazz.svg"
import rap from "../../media/rap.svg";
import r_and_b from "../../media/r&b.svg"
import rock from "../../media/rock.svg"
import jazz from "../../media/jazz.svg"

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
      <p>Please select a pair of genres</p>

      <button onClick={() => setComparedGenres(ComparedGenres.PopVsRap)}>
        Pop vs Rap
      </button>
      <button onClick={() => setComparedGenres(ComparedGenres.RhythmAndBluesVsRock)}>
        Rhythm and Blues vs Rock
      </button>
      <button onClick={() => setComparedGenres(ComparedGenres.PopVsJazz)}>
        Pop vs Jazz
      </button>

      {comparedGenres !== undefined
        ? displayComparedGenres(comparedGenres)
        : null}
    </div>
  );
};

function displayComparedGenres(genres: ComparedGenres) {
  switch (genres) {
    case ComparedGenres.PopVsRap:
      return (
        <div>
          <img src={pop_rap} alt="pop" />
          <img src={rap} alt="rap" />
        </div>
      );
    case ComparedGenres.RhythmAndBluesVsRock:
      return (
        <div>
          <img src={r_and_b} alt="rhythm and blues" />
          <img src={rock} alt="rock" />
        </div>
      );
    case ComparedGenres.PopVsJazz:
      return (
        <div>
          <img src={pop_jazz} alt="pop" />
          <img src={jazz} alt="jazz" />
        </div>
      );
    default:
      return <div>Empty</div>;
  }
}

export default TF_TR;
