import React from "react";
import Link from "../Link";
import styles from "./styles.module.css";

const DataSets: React.FC = () => {
  return (
    <div className={styles.container}>
      <section>
        <p>
          {
            "Hope you found it interesting to follow our analysis of the music world. "
          }
          {"For a more technical view please check the  "}
          <Link
            url={
              "https://deepnote.com/project/619f7d16-fc6d-47f3-9f09-59010ce86b6e"
            }
          >
            explainer notebook
          </Link>
          {"."}
        </p>
        <p>
          {
            "All data sets used in the assignment (lyrics, artists, tracks) are publicly available "
          }
          <Link
            url={
              "https://drive.google.com/drive/folders/1-PHHKAzZT6lU-O9BFSg-M3jGVlRGWi8o"
            }
          >
            here
          </Link>
          {"."}
        </p>
        <p>
          {"The data was serialized using "}
          <Link url="https://docs.python.org/3/library/pickle.html">
            {"pickle"}
          </Link>
          {" library. In order to load the data from Python use:"}
        </p>
      </section>

      <div className={styles.loadFromFile}>
        <code>
          {`def load_from_file(file_name):`}
          <br />
          &emsp;{`with open(file_name, "rb") as file:`}
          <br />
          &emsp;&emsp;{`    return pickle.load(file)`}
        </code>
      </div>
    </div>
  );
};

export default DataSets;
