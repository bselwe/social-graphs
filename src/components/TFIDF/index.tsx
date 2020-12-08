import React, { useState } from "react";
import styles from "./styles.module.css";

import distribution_svg from "./tf_idf_distribution.svg";
import wordcloud_5 from "./5.png";
import wordcloud_7 from "./7.png";
import wordcloud_17 from "./17.png";
import src from "*.avif";

class Community {
    id: number;
    leading_genre: string;
    artists_total: number;

    constructor(
        id: number,
        leading_genre: string,
        artists_total: number,
    ) {
        this.id = id;
        this.leading_genre = leading_genre;
        this.artists_total = artists_total;
    }
}

const largest_3_communities = [
    new Community(5, "album rock", 375,),
    new Community(17, "trap", 286),
    new Community(7, "dance pop", 264),
];

const TF_IDF: React.FC = () => {
    const [community, setCommunity] = useState<Community>(largest_3_communities[0]);
    return (
        <div>
            <p>
                This section strives to define communities of artists and show what
                words the community considers important.
      </p>
            <img className={styles.image} src={distribution_svg} alt="Community distribution" />
            <p>The following 3 largest communities where found: 5, 17 and 7</p>
            
            <img className={styles.btn_image_5} src={"https://source.unsplash.com/400x400/?music"} alt=""/>
            <img className={styles.btn_image_17} src={"https://source.unsplash.com/400x400/?music"} alt=""/>
            <img className={styles.btn_image_7} src={"https://source.unsplash.com/400x400/?music"} alt=""/>
            {community !== undefined ? displayCommunity(community) : null};
        </div>
    );
};

function displayCommunity(community: Community) {
    switch (community) {
        case largest_3_communities[0]:
            return (
                <div className={styles.image}>
                    <img src={wordcloud_5} alt={community.id.toString()} />
                </div>
            );
        case largest_3_communities[1]:
            return (
                <div className={styles.image}>
                    <img src={wordcloud_17} alt={community.id.toString()} />
                </div>
            );
        case largest_3_communities[2]:
            return (
                <div className={styles.image}>
                    <img src={wordcloud_7} alt={community.id.toString()} />
                </div>
            );
    }
}

export default TF_IDF;