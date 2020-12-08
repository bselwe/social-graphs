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

  constructor(id: number, leading_genre: string, artists_total: number) {
    this.id = id;
    this.leading_genre = leading_genre;
    this.artists_total = artists_total;
  }
}

enum CommunityType {
  AlbumRock,
  Trap,
  DancePop,
}

const communities = {
  [CommunityType.AlbumRock]: new Community(5, "album rock", 375),
  [CommunityType.Trap]: new Community(17, "trap", 286),
  [CommunityType.DancePop]: new Community(7, "dance pop", 264),
};

const TF_IDF: React.FC = () => {
  const [community, setCommunity] = useState<CommunityType>(
    CommunityType.AlbumRock
  );

  return (
    <div>
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

      <p>The following 3 largest communities were found: 5, 17 and 7.</p>
      <br />
      <p>Please select one of the 3 largest communities:</p>
      <div className={styles.image_btns}>
        <a onClick={() => setCommunity(CommunityType.AlbumRock)}>
          <img
            className={styles.btn_image}
            src={"https://source.unsplash.com/400x400/?music,rock"}
            alt=""
          />
          <div>
            <h2>Album rock</h2>
          </div>
        </a>
        <a onClick={() => setCommunity(CommunityType.Trap)}>
          <img
            className={styles.btn_image}
            src={"https://source.unsplash.com/400x400/?music,trap"}
            alt=""
          />
          <div>
            <h2>Trap</h2>
          </div>
        </a>
        <a onClick={() => setCommunity(CommunityType.DancePop)}>
          <img
            className={styles.btn_image}
            src={"https://source.unsplash.com/400x400/?music,pop"}
            alt=""
          />
          <div>
            <h2>Dance pop</h2>
          </div>
        </a>
      </div>

      {community !== undefined ? displayCommunity(community) : null}
    </div>
  );
};

function displayCommunity(communityType: CommunityType) {
  const community = communities[communityType];

  switch (communityType) {
    case CommunityType.AlbumRock:
      return (
        <div>
          <img
            className={styles.image}
            src={wordcloud_5}
            alt={community.id.toString()}
          />
          <div className={styles.artists}>
            {"With a total of " + community.artists_total + " artists"}
          </div>
        </div>
      );
    case CommunityType.Trap:
      return (
        <div>
          <img
            className={styles.image}
            src={wordcloud_17}
            alt={community.id.toString()}
          />
          <div className={styles.artists}>
            {"With a total of " + community.artists_total + " artists"}
          </div>
        </div>
      );
    case CommunityType.DancePop:
      return (
        <div>
          <img
            className={styles.image}
            src={wordcloud_7}
            alt={community.id.toString()}
          />
          <div className={styles.artists}>
            {"With a total of " + community.artists_total + " artists"}
          </div>
        </div>
      );
  }
}

export default TF_IDF;
