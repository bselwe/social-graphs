import React from "react";
import styles from "./styles.module.css";

interface TitleProps {
  readonly children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Title;
