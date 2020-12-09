import React, { useState } from "react";
import styles from "./styles.module.css";

import distribution_svg from "./tf_idf_distribution.svg";
import wordcloud_12 from "./12.png";
import wordcloud_2 from "./2.png";
import wordcloud_3 from "./3.png";
import { capitilize } from "../../helpers/capitilize";

class Community {
  id: number;
  leading_genre: string;
  artists_total: number;
  wordCloud: any;

  constructor(
    id: number,
    leading_genre: string,
    artists_total: number,
    wordCloud: any
  ) {
    this.id = id;
    this.leading_genre = leading_genre;
    this.artists_total = artists_total;
    this.wordCloud = wordCloud;
  }
}

enum CommunityType {
  AlbumRock,
  Trap,
  DancePop,
}

const communities = {
  [CommunityType.AlbumRock]: new Community(12, "album rock", 362, wordcloud_12),
  [CommunityType.Trap]: new Community(2, "trap", 296, wordcloud_2),
  [CommunityType.DancePop]: new Community(3, "dance pop", 275, wordcloud_3),
};

const TF_IDF: React.FC = () => {
  const [community, setCommunity] = useState<CommunityType>(
    CommunityType.AlbumRock
  );

  return (
    <div className={styles.container}>
      <section>
        <p>
          This section strives to define communities of artists and show what
          words the community considers important.
        </p>
      </section>

      <img
        className={styles.image_distribution}
        src={distribution_svg}
        alt="Community distribution"
      />

      <section>
        <p>
          {" "}
          As seen above, the size of the communities varies from having just a
          few to more than 300 artists. The following 3 largest communities were
          found: 12, 2, and 3 - corresponding to Rock, Trap, and Dance-pop
          genres. For these genres, the word clouds showing the most important
          words for a given community were generated.
        </p>
      </section>
      <br />
      <p>
        Please select one of the 3 largest communities to show the word cloud:
      </p>
      <div className={styles.image_btns}>
        <a onClick={() => setCommunity(CommunityType.AlbumRock)}>
          <img
            className={styles.btn_image}
            src={"https://source.unsplash.com/400x400/?music,rock"}
            alt=""
          />
          <div>
            <h3>Album rock</h3>
          </div>
        </a>
        <a onClick={() => setCommunity(CommunityType.Trap)}>
          <img
            className={styles.btn_image}
            src={"https://source.unsplash.com/400x400/?music,trap"}
            alt=""
          />
          <div>
            <h3>Trap</h3>
          </div>
        </a>
        <a onClick={() => setCommunity(CommunityType.DancePop)}>
          <img
            className={styles.btn_image}
            src={"https://source.unsplash.com/400x400/?music,pop"}
            alt=""
          />
          <div>
            <h3>Dance pop</h3>
          </div>
        </a>
      </div>

      {community !== undefined ? displayCommunity(community) : null}

      <section>
        <p>  The results for the wordclouds of the largest communities are representative of the lyrics of each genre.
          The words in the Rock and Pop genres are more positive while the Trap genre uses a lot of urban vocabulary.
          Additionally, it is interesting to note that the word LIKE has a big importance in all the genres. 
          This is rather a component of the language itself rather than something specific to a music genre.
      </p>
      </section>

    </div>
  );
};

function displayCommunity(communityType: CommunityType) {
  const community = communities[communityType];

  return (
    <div>
      <img
        className={styles.image}
        src={community.wordCloud}
        alt={community.id.toString()}
      />
      <div className={styles.artists}>
        {"There are " +
          community.artists_total +
          " artists in the community where the leading genre is " +
          capitilize(community.leading_genre) +
          "."}
      </div>
    </div>
  );
}

export default TF_IDF;
