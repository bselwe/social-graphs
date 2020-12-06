import React from "react";
import styles from "./styles.module.css";

import popularities from "./popularities.svg";
import genres from "./genres.svg";
import degreeDistribution from "./degree_distribution.svg";
import degreeDistributionLogLog from "./degree_distribution_log_log.svg";

const Artists: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>Introduce artists data set</p>
      <img src={popularities} width={800} alt={"popularities"} />
      <img src={genres} width={800} alt={"genres"} />
      <img src={degreeDistribution} width={1200} alt={"degree distribution"} />
      <img
        src={degreeDistributionLogLog}
        width={800}
        alt={"degree distribution (log log)"}
      />
    </div>
  );
};

export default Artists;
