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
        Sed sollicitudin nisi in nunc vehicula, eget eleifend ligula consequat.
        Pellentesque pellentesque lobortis iaculis. Mauris et tellus sit amet
        quam fermentum dictum eget ac ante. Nulla nec aliquet eros. Pellentesque
        quis elementum nisl, eu ultrices erat. Quisque pellentesque elementum
        mauris, at porta erat. In eu quam purus. Praesent congue laoreet arcu,
        sit amet sollicitudin mi auctor quis. Donec vel facilisis odio. Morbi
        feugiat, sem non hendrerit tempus, nisi nibh bibendum felis, vel feugiat
        diam ligula at ex.
      </p>
    </div>
  );
};

export default Introduction;
