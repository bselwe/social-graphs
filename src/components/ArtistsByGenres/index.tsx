import React, { useMemo, useState } from "react";
import { Sigma, SigmaGraph, RelativeSize, SigmaNode } from "react-sigma";
import { normalize } from "../../helpers/normalize";
import styles from "./styles.module.css";

import dataNodes from "../../data/ArtistsByGenres/nodes.json";
import dataEdges from "../../data/ArtistsByGenres/edges.json";
import dataPositions from "../../data/ArtistsByGenres/positions.json";
import dataNodeSize from "../../data/ArtistsByGenres/node_size.json";
import dataEdgeColor from "../../data/ArtistsByGenres/edge_color.json";
import { Genre } from "../../interfaces/genres";

import degreeDistribution from "./degree_distribution.svg";
import degreeDistributionLogLog from "./degree_distribution_log_log.svg";
import { allGenres, genreColor, genreConnections } from "../../data/genres";
import { Artist } from "../../interfaces/artists";
import {
  leastConnectedArtists,
  mostConnectedArtists,
} from "../../data/ArtistsByGenres/top";
import Link from "../Link";
import TopConnected, { maxArtistsConnectionsToShow } from "./TopConnected";
import { getArtistById } from "../../data/artists";

const ArtistsByGenres: React.FC = () => {
  const graph = useMemo(() => generateArtistsByGenresNetwork(), []);

  const artistsConnections = useMemo(() => {
    return graph.edges.reduce((result, edge) => {
      if (!(edge.source in result)) result[edge.source] = [];
      if (!(edge.target in result)) result[edge.target] = [];

      const sourceArtist = getArtistById(edge.source);
      const targetArtist = getArtistById(edge.target);

      result[edge.source].push({
        id: targetArtist.id,
        name: targetArtist.name,
        genre: edge.label as Genre,
      });
      result[edge.target].push({
        id: sourceArtist.id,
        name: sourceArtist.name,
        genre: edge.label as Genre,
      });

      return result;
    }, {} as { [artistId: string]: { id: string; name: string; genre: Genre }[] });
  }, [graph]);

  const [selectedArtist, setSelectedArtist] = useState<Artist>();

  const selectedArtistConnections =
    selectedArtist && artistsConnections[selectedArtist.id];

  const onArtistHover = (result: { data: { node: SigmaNode } }) => {
    setSelectedArtist(getArtistById(result.data.node.id));
  };

  return (
    <div className={styles.container}>
      <section>
        <p>
          The following section explores how artists are related based on shared
          genres between them. As introduced before, each artist is associated
          with a list of genres the artist has produced songs in. The network of
          artists consists of artists where each pair of artists is connected if
          the ratio of shared genres is at least 60%. As a result, the edges
          represent how artists are related based on how many genres they have
          in common.
        </p>

        <p>
          Genres having most connections in the network were found and are
          presented below. Edges that are colored accordingly to top genres
          legend represent connections between artists that produce the same top
          genres.
        </p>

        <ul className={styles.topGenres}>
          {allGenres.map((genre, index) => (
            <li key={`allGenres-${genre}`} className={styles.topGenre}>
              <span
                className={styles.topGenreColor}
                style={{ backgroundColor: genreColor[genre] }}
              ></span>
              <p>
                {index + 1}. {genre} ({genreConnections[genre]} connections)
              </p>
            </li>
          ))}
        </ul>

        <br />

        <p>
          The interactive network of artists based on genres is presented below.
          For the sake of better visualization only the giant component of the
          network is shown. It consists of 6011 nodes with 58810 connections.
          Hovering over an artist allows to see details about the artist. You
          may also open the Spotify profile of the artist from the details
          section.
        </p>
      </section>

      <div className={styles.content}>
        <Sigma
          graph={graph}
          renderer="canvas"
          settings={{
            clone: false,
            defaultLabelSize: 10,
            zoomMin: 0.03,
          }}
          style={{
            flex: 1,
            height: "80vh",
            backgroundColor: "white",
          }}
          onOverNode={onArtistHover}
        >
          <RelativeSize initialSize={8} />
        </Sigma>

        <div className={styles.selectedArtist}>
          {selectedArtist && selectedArtistConnections ? (
            <>
              <p>
                <b>Name</b>:{" "}
                <Link
                  url={`https://open.spotify.com/artist/${selectedArtist.id}`}
                  color={"inherit"}
                >
                  {selectedArtist.name}
                </Link>
              </p>
              <p>
                <b>Popularity</b>: {selectedArtist.popularity}
              </p>
              <p>
                <b>Followers</b>: {selectedArtist.followers.total}
              </p>
              <p>
                <b>Genres</b>: {selectedArtist.genres.join(", ")}
              </p>
              <p>
                <b>Connected with ({selectedArtistConnections.length})</b>:{" "}
                {selectedArtistConnections
                  .slice(0, maxArtistsConnectionsToShow)
                  .map((artist) => (
                    <Link
                      key={artist.name}
                      url={`https://open.spotify.com/artist/${artist.id}`}
                      color={genreColor[artist.genre]}
                    >
                      {`${artist.name};`}&nbsp;
                    </Link>
                  ))}
                {selectedArtistConnections.length -
                  maxArtistsConnectionsToShow >
                  0 && (
                  <span>{`and ${
                    selectedArtistConnections.length -
                    maxArtistsConnectionsToShow
                  } more`}</span>
                )}
              </p>
            </>
          ) : (
            <p>Hover over an artist to see details</p>
          )}
        </div>

        <div className={styles.legend}>
          {allGenres.map((genre) => (
            <div key={genre} className={styles.legendGenre}>
              <div
                className={styles.legendGenreColor}
                style={{ backgroundColor: genreColor[genre] }}
              />
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <section>
        <p>
          Most and least connected artists in the network were extracted and are
          presented below. You may press on the artist to view their Spotify
          profile.
        </p>
      </section>

      <div className={styles.spaceSmall} />

      <h3>5 most connected artists</h3>

      <TopConnected
        artists={mostConnectedArtists}
        artistsConnections={artistsConnections}
      />

      <div className={styles.space} />

      <h3>5 least connected artists</h3>

      <TopConnected
        artists={leastConnectedArtists}
        artistsConnections={artistsConnections}
      />

      <div className={styles.space} />
      <div className={styles.spaceMedium} />

      <section>
        <p>
          Degree distributions for the discussed network of artists by genres
          are presented below. The left part of the upper plot resembles a part
          of a Poisson distribution indicating that most nodes have a similar
          number of connections. On the other side, the right part shows that
          there exist a few hubs with large number of connections. Looking at
          log-log plot, it can be observed that the relation between a degree
          and the number of artists is close to exponential. Overall, it can be
          said that the network resembles something in-between a scale free and
          a random network.
        </p>
      </section>

      <img src={degreeDistribution} width={1200} alt={"degree distribution"} />
      <img
        src={degreeDistributionLogLog}
        width={800}
        style={{ marginTop: 24 }}
        alt={"degree distribution (log log)"}
      />
    </div>
  );
};

function generateArtistsByGenresNetwork(): SigmaGraph {
  const nodes = dataNodes.map((node, index) => {
    const artistId = node[0] as string;

    const [x, y] = dataPositions[artistId as keyof typeof dataPositions] as [
      number,
      number
    ];

    const size = normalize(dataNodeSize[index], 1, 4);

    const color = "rgba(30, 118, 176, 0.6)";

    return {
      id: artistId,
      label: getArtistById(artistId).name,
      x,
      y,
      size,
      color,
    };
  });

  const edges = (dataEdges as any).map(
    (
      edge: [from: number, to: number, attributes: { genre: string }],
      index: number
    ) => {
      const from = edge[0];
      const to = edge[1];
      const attributes = edge[2];

      const color = dataEdgeColor[index];

      return {
        id: `${from}-${to}`,
        source: from,
        target: to,
        label: attributes.genre,
        color,
      };
    }
  );

  return {
    nodes,
    edges,
  };
}

export default ArtistsByGenres;
