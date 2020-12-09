import React, { useState } from "react";
import styles from "./styles.module.css";

import distribution_svg from "./tf_idf_distribution.svg";
import wordcloud_5 from "./5.png";
import wordcloud_7 from "./7.png";
import wordcloud_17 from "./17.png";

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
  [CommunityType.AlbumRock]: new Community(5, "album rock", 375, wordcloud_5),
  [CommunityType.Trap]: new Community(17, "trap", 286, wordcloud_17),
  [CommunityType.DancePop]: new Community(7, "dance pop", 264, wordcloud_7),
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
        <img
          className={styles.image_distribution}
          src={distribution_svg}
          alt="Community distribution"
        />
      </section>
      <section>
        <p>
          {" "}
          As seen above, the size of the communities varies from having just a
          few to more than 300 artists. The following 3 largest communities were
          found: 5, 17, and 7 - corresponding to Rock, Trap, and Dance-pop
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
          " artists in the " +
          community.leading_genre +
          " community."}
      </div>
    </div>
  );
}

export default TF_IDF;
