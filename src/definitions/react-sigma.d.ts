declare module "react-sigma" {
  import * as React from "react";
  import { StyleProp, ViewStyle } from "react-native";

  type SigmaGraph = {
    nodes: SigmaNode[];
    edges: SigmaEdge[];
  };

  type SigmaNode = {
    id: string;
    label: string;
    x?: number;
    y?: number;
    size?: number;
    color?: string;
  };

  type SigmaEdge = {
    id: string;
    source: string;
    target: string;
    label: string;
    color?: string;
  };

  interface SigmaSettings {
    readonly clone?: boolean;
    readonly batchEdgesDrawing?: boolean;
    readonly defaultLabelSize?: number;
    readonly zoomMin?: number;
    readonly zoomMax?: number;
    readonly hideEdgesOnMove?: boolean;
    readonly drawEdgeLabels?: boolean;
  }

  interface SigmaProps {
    readonly graph: SigmaGraph;
    readonly renderer: "webgl" | "canvas";
    readonly settings: SigmaSettings;
    readonly style: StyleProp<ViewStyle>;
    readonly onOverNode?: (result: { data: { node: SigmaNode } }) => void;
    readonly onOverEdge?: (result: { data: { edge: SigmaEdge } }) => void;
  }

  // https://github.com/dunnock/react-sigma/blob/master/DOCS.md#forceatlas2
  interface ForceAtlas2Props {
    /**
     * Use a web worker to run calculations in separate thread (optional, default true)
     * @default true
     */
    readonly worker?: boolean;
    /**
     * Use the algorithm's Barnes-Hut to improve repulsion's scalability.
     * This is useful for large graph but harmful to small ones.
     * @default true
     */
    readonly barnesHutOptimize?: boolean;
    /**
     * @default 0.5
     */
    readonly barnesHutTheta?: number;
    /**
     * @default false
     */
    readonly adjustSizes?: boolean;
    /**
     * Number of iterations to be run before each render.
     * @default 1
     */
    readonly iterationsPerRender?: number;
    /**
     * Switch ForceAtlas' model from lin-lin to lin-log (tribute to Andreas Noack). Makes clusters more tight.
     * @default true
     */
    readonly linLogMode?: boolean;
    /**
     * @default false
     */
    readonly outboundAttractionDistribution?: boolean;
    /**
     * How much influence you give to the edges weight. 0 is "no influence" and 1 is "normal".
     * @default 0
     */
    readonly edgeWeightInfluence?: number;
    /**
     * How much repulsion you want. More makes a more sparse graph.
     * @default 1
     */
    readonly scalingRatio?: number;
    /**
     * @default false
     */
    readonly strongGravityMode?: boolean;
    /**
     * Attracts nodes to the center. Prevents islands from drifting away.
     * @default 1
     */
    readonly gravity?: number;
    /**
     * @default 1
     */
    readonly slowDown?: number;
    /**
     * How long the algorythm should run
     * @default graph.nodes().length * 10
     */
    readonly timeout?: number;
  }

  export class Sigma extends React.Component<SigmaProps> {}

  export class ForceAtlas2 extends React.Component<ForceAtlas2Props> {}

  export class NodeShapes extends React.Component<any> {} // TODO: Add props

  export class EdgeShapes extends React.Component<any> {} // TODO: Add props

  export class RandomizeNodePositions extends React.Component<any> {} // TODO: Add props

  export class RelativeSize extends React.Component<any> {} // TODO: Add props
}
