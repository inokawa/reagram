import React, { Fragment, memo, useMemo } from "react";
// @ts-expect-error
import * as dagre from "@dagrejs/dagre";
import { Graph, Node, Edge, SubGraph } from "./parser";

export type Props = {
  data: Graph;
  graphRender?: (node: { data: Graph }) => React.ReactNode;
  nodeRender: (node: {
    data: Node;
    x: number;
    y: number;
    width: number;
    height: number;
  }) => React.ReactNode;
  edgeRender: (node: {
    data: Edge;
    points: { x: number; y: number }[];
  }) => React.ReactNode;
} & GraphOpts;

export type GraphOpts = {
  rankdir?: "TB" | "BT" | "LR" | "RL";
  align?: "UL" | "UR" | "DL" | "DR";
  nodesep?: number;
  edgesep?: number;
  ranksep?: number;
  acyclicer?: "greedy";
  ranker?: "network-simplex" | "tight-tree" | "longest-path";
  nodeWidth?: number;
  nodeHeight?: number;
};

export const Renderer = memo(
  ({
    data,
    graphRender,
    nodeRender,
    edgeRender,
    rankdir,
    align,
    nodesep,
    edgesep,
    ranksep,
    acyclicer,
    ranker,
    nodeWidth,
    nodeHeight,
  }: Props) => {
    const [graph, nodeMap, edgeMap] = useMemo(() => {
      const nodeMap: { [key: string]: Node } = {};
      const edgeMap: { [key: string]: Edge } = {};

      const g = new dagre.graphlib.Graph({
        directed: data.type === "digraph",
        multigraph: !data.strict,
        compound: true,
      });

      const graphOpts: GraphOpts = {};
      rankdir !== undefined && (graphOpts.rankdir = rankdir);
      align !== undefined && (graphOpts.align = align);
      nodesep !== undefined && (graphOpts.nodesep = nodesep);
      edgesep !== undefined && (graphOpts.edgesep = edgesep);
      ranksep !== undefined && (graphOpts.ranksep = ranksep);
      acyclicer !== undefined && (graphOpts.acyclicer = acyclicer);
      ranker !== undefined && (graphOpts.ranker = ranker);
      g.setGraph(graphOpts);

      g.setDefaultNodeLabel(() => ({}));
      g.setDefaultEdgeLabel(() => ({}));

      const setNode = (node: Node, parentId?: string) => {
        g.setNode(node.id, {
          width: nodeWidth !== undefined ? nodeWidth : 10,
          height: nodeHeight !== undefined ? nodeHeight : 10,
        });
        nodeMap[node.id] = node;
        if (parentId) {
          g.setParent(node.id, parentId);
        }
      };
      const processNode = (node: SubGraph | Node, parentId?: string) => {
        if (node.type === "subgraph") {
          setNode((node as any) as Node /* TODO */, parentId);
          node.nodes.forEach((n) => {
            processNode(n, node.id);
          });
          node.edges.forEach(processEdge);
        } else if (node.type === "node") {
          setNode(node, parentId);
        }
      };
      const processEdge = (edge: Edge) => {
        g.setEdge(edge.source, edge.target);
        edgeMap[`${edge.source}-${edge.target}`] = edge;
      };

      data.nodes.forEach((node) => {
        processNode(node);
      });
      data.edges.forEach(processEdge);

      dagre.layout(g);
      return [g, nodeMap, edgeMap];
    }, [data]);

    const nodes: React.ReactNode[] = [];
    graph.edges().forEach((e: any) => {
      const points = graph.edge(e).points;
      nodes.push(
        <Fragment key={`${e.v}-${e.w}`}>
          {edgeRender({ data: edgeMap[`${e.v}-${e.w}`], points })}
        </Fragment>
      );
    });
    graph.nodes().forEach((id: any) => {
      const n = graph.node(id);
      nodes.push(
        <Fragment key={id}>
          {nodeRender({
            data: nodeMap[id],
            x: n.x,
            y: n.y,
            width: n.width,
            height: n.height,
          })}
        </Fragment>
      );
    });

    return <>{nodes}</>;
  }
);
