import React, { useState } from "react";
import styles from "./styles.module.css";

import pop from "../../media/pop.png";
import rap from "../../media/rap.png";

enum ComparedGenres {
  PopRap,
  Second,
  Third,
}

const TF_TR: React.FC = () => {
  const [comparedGenres, setComparedGenres] = useState<ComparedGenres>();

  return (
    <div className={styles.container}>
      <h3>Please select a pair of genres</h3>

      <button onClick={() => setComparedGenres(ComparedGenres.PopRap)}>
        Pop vs Rap
      </button>
      <button onClick={() => setComparedGenres(ComparedGenres.Second)}>
        Second
      </button>
      <button onClick={() => setComparedGenres(ComparedGenres.Third)}>
        Third
      </button>

      {comparedGenres !== undefined
        ? displayComparedGenres(comparedGenres)
        : null}
    </div>
  );
};

function displayComparedGenres(genres: ComparedGenres) {
  switch (genres) {
    case ComparedGenres.PopRap:
      return (
        <div>
          <img src={pop} alt="pop" />
          <img src={rap} alt="rap" />
        </div>
      );
    default:
      return <div>Empty</div>;
  }
}

export default TF_TR;
