import React, { useMemo, useState } from "react";
import { Sigma, SigmaGraph, RelativeSize, SigmaNode } from "react-sigma";
import { normalize } from "../../helpers/normalize";
import styles from "./styles.module.css";

import dataNodes from "../../data/RelatedArtists/nodes.json";
import dataEdges from "../../data/RelatedArtists/edges.json";
import dataPositions from "../../data/RelatedArtists/positions.json";
import dataNodeSize from "../../data/RelatedArtists/node_size.json";
import dataNodeColor from "../../data/RelatedArtists/node_color.json";
import { Genre } from "../../interfaces/genres";
import { allGenres, genreColor } from "../../data/genres";
import { getArtistById } from "../../data/artists";
import TopConnected, {
  maxArtistsConnectionsToShow,
} from "../ArtistsByGenres/TopConnected";
import Link from "../Link";
import {
  leastConnectedArtists,
  mostConnectedArtists,
} from "../../data/RelatedArtists/top";

interface Artist {
  readonly id: string;
  readonly name: string;
  readonly popularity: number;
  readonly followers: { total: number };
  readonly genres: string[];
}

const RelatedArtists: React.FC = () => {
  const graph = useMemo(() => generateRelatedArtistsNetwork(), []);

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
          The Spotify API offers the possibility to retrieve the related artists
          based on the analysis of the community's listening history. The
          following section explores how the related artists are suggested and
          to what degree the genre of the music has an influence. The network of
          related artists consists of artists where each pair of artists is
          connected if artists are related to each other. For a better
          comparison the same top genres as before were used to color the nodes
          appropriately.
        </p>

        <p>
          The interactive network of related artists is presented below. Only
          the giant component of the network is shown again. It consists of 5383
          nodes with 47635 connections. As before, hovering over an artist
          allows to see details about the artist.
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
        maxArtistsConnections={10}
      />

      <div className={styles.space} />

      <h3>5 least connected artists</h3>

      <TopConnected
        artists={leastConnectedArtists}
        artistsConnections={artistsConnections}
      />

      <div className={styles.space} />
      <div className={styles.space} />
    </div>
  );
};

function generateRelatedArtistsNetwork(): SigmaGraph {
  const nodes = dataNodes.map((node, index) => {
    const artistId = node[0] as string;

    const [x, y] = dataPositions[artistId as keyof typeof dataPositions] as [
      number,
      number
    ];

    const size = normalize(dataNodeSize[index], 1, 4);

    const color = dataNodeColor[index];

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
    (edge: [from: number, to: number, attributes: { genre: string }]) => {
      const from = edge[0];
      const to = edge[1];
      const attributes = edge[2];

      const color = "rgba(0,0,0, 0.1)";

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

export default RelatedArtists;
