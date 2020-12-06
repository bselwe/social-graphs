import React from "react";
import styles from "./styles.module.css";

import popularities from "./popularities.svg";

const Artists: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>Introduce artists data set</p>
      <img src={popularities} width={800} alt={"popularities"} />
    </div>
  );
};

export default Artists;
