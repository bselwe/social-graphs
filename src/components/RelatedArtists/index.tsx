import React, { useMemo, useState } from "react";
import {
  Sigma,
  SigmaGraph,
  RelativeSize,
  SigmaNode,
  SigmaEdge,
} from "react-sigma";
import { normalize } from "../../helpers/normalize";
import styles from "./styles.module.css";

import dataArtists from "../../data/ArtistsByGenres/artists.json";
import dataNodes from "../../data/RelatedArtists/nodes.json";
import dataEdges from "../../data/RelatedArtists/edges.json";
import dataPositions from "../../data/RelatedArtists/positions.json";
import dataNodeSize from "../../data/RelatedArtists/node_size.json";
import dataNodeColor from "../../data/RelatedArtists/node_color.json";
import { allGenres, Genre, genreColor } from "../../helpers/genres";

const maxArtistsConnectionsToShow = 20;

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

      const sourceArtist = dataArtists[
        edge.source as keyof typeof dataArtists
      ] as Artist;
      const targetArtist = dataArtists[
        edge.target as keyof typeof dataArtists
      ] as Artist;

      result[edge.source].push({
        name: targetArtist.name,
        genre: edge.label as Genre,
      });
      result[edge.target].push({
        name: sourceArtist.name,
        genre: edge.label as Genre,
      });

      return result;
    }, {} as { [artistId: string]: { name: string; genre: Genre }[] });
  }, [graph]);

  const [selectedArtist, setSelectedArtist] = useState<Artist>();

  const selectedArtistConnections =
    selectedArtist && artistsConnections[selectedArtist.id];

  const onArtistHover = (result: { data: { node: SigmaNode } }) => {
    setSelectedArtist(
      dataArtists[result.data.node.id as keyof typeof dataArtists]
    );
  };

  return (
    <div className={styles.container}>
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
              <b>Name</b>: {selectedArtist.name}
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
                  <span
                    key={artist.name}
                    style={{ color: genreColor[artist.genre] }}
                  >
                    {artist.name}
                    {"; "}
                  </span>
                ))}{" "}
              {selectedArtistConnections.length - maxArtistsConnectionsToShow >
                0 && (
                <span>{`and ${
                  selectedArtistConnections.length - maxArtistsConnectionsToShow
                } more`}</span>
              )}
            </p>
          </>
        ) : (
          <p>Hover over the artist to see details</p>
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
  );
};

function generateRelatedArtistsNetwork(): SigmaGraph {
  const nodes = dataNodes.map((node, index) => {
    const artistId = node[0];

    const [x, y] = dataPositions[artistId as keyof typeof dataPositions] as [
      number,
      number
    ];

    const size = normalize(dataNodeSize[index], 1, 4);

    const color = dataNodeColor[index];

    return {
      id: artistId as keyof typeof dataPositions,
      label: (dataArtists[artistId as keyof typeof dataArtists] as Artist).name,
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
