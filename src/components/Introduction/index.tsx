import React from "react";
import styles from "./styles.module.css";

const Introduction: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla
        semper pulvinar. Nunc massa elit, venenatis aliquam ante vel, sagittis
        congue nisi. Nunc ac bibendum dolor. Phasellus quis est pharetra enim
        viverra condimentum. Nam lobortis risus at bibendum auctor. Maecenas
        cursus ipsum eu orci suscipit mattis. Donec purus enim, imperdiet sit
        amet mi at, molestie mollis lacus. Proin molestie diam mattis lacus
        luctus iaculis. Aliquam imperdiet fermentum urna, eu luctus lorem
        posuere vel. Suspendisse pretium purus bibendum, eleifend justo ac,
        tempus nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet malesuada ipsum eget hendrerit. Aenean sed velit nec
        tortor sagittis faucibus nec quis tellus. Donec sed sapien neque.
      </p>
      <p>
        The sample data used during computation is a subset of all artists and lyrics accessable through the Spotify and Genius API. <br/>
        <b>Following datasets has been constructed and used:</b> <br/>
        <ol>
          <li>An artist JSON file containing all artists <i>(34663 in total)</i> and associated attributes: id, name, spotify popularity, followers and genres.</li>
          <li>Lyric files <i>(33977 in total)</i> each contain a list of songs and each lyric file is named by the Spotify Artist ID of the owning artist.</li>
        </ol>
      </p>
    </div>
  );
};

export default Introduction;
