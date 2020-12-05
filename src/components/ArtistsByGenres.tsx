import React from "react";
import {
  Sigma,
  ForceAtlas2,
  SigmaGraph,
  EdgeShapes,
  NodeShapes,
  RandomizeNodePositions,
  RelativeSize,
} from "react-sigma";

import dataNodes from "../data/ArtistsByGenres/nodes.json";
import dataEdges from "../data/ArtistsByGenres/edges.json";
import dataPositions from "../data/ArtistsByGenres/positions.json";

const ArtistsByGenres: React.FC = () => {
  const graph = generateArtistsByGenresNetwork();

  return (
    <Sigma
      graph={graph}
      renderer="webgl"
      settings={{
        clone: false,
        batchEdgesDrawing: true,
      }}
      style={{
        flex: 1,
        height: "800px",
        backgroundColor: "white",
      }}
    >
      {/* <ForceAtlas2
        iterationsPerRender={1}
        barnesHutOptimize
        barnesHutTheta={1}
        timeout={50000}
        worker
      /> */}
      <RelativeSize initialSize={8} />
    </Sigma>
  );
};

function generateArtistsByGenresNetwork(): SigmaGraph {
  const nodes = dataNodes.map((node) => {
    const artistId = node[0] as keyof typeof dataPositions;
    const [x, y] = dataPositions[artistId] as [number, number];
    return {
      id: artistId,
      label: artistId,
      x,
      y,
    };
  });

  const edges = (dataEdges as any).map((edge: any) => {
    const from = edge[0];
    const to = edge[1];
    const attributes = edge[2] as { genre: string };

    return {
      id: `${from}-${to}`,
      source: from,
      target: to,
      label: attributes.genre,
    };
  });

  return {
    nodes,
    edges,
  };
}

export default ArtistsByGenres;
