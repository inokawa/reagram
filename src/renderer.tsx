import React, { Fragment, memo, useMemo } from "react";
// @ts-expect-error
import dagre from "@dagrejs/dagre";
import { Graph, Node, Edge } from "./parser";

export type Props = {
  data: Graph;
  graphRender?: (node: { data: Graph }) => React.ReactNode;
  nodeRender: (node: {
    data: Node;
    point: { x: number; y: number };
  }) => React.ReactNode;
  edgeRender: (node: {
    data: Edge;
    points: { x: number; y: number }[];
  }) => React.ReactNode;
};

export const Renderer = memo(
  ({ data, graphRender, nodeRender, edgeRender }: Props) => {
    const [graph, nodeMap, edgeMap] = useMemo(() => {
      const nodeMap: { [key: string]: Node } = {};
      const edgeMap: { [key: string]: Edge } = {};

      const g = new dagre.graphlib.Graph({
        directed: data.type === "digraph",
        multigraph: true,
        compound: true,
      });
      g.setGraph({});
      g.setDefaultNodeLabel(() => ({}));
      g.setDefaultEdgeLabel(() => ({}));

      const processNode = (node: Graph | Node, parentId?: string) => {
        if (node.type === "graph" || node.type === "digraph") {
          node.nodes.forEach((n) => {
            processNode(n, node.id);
          });
          node.edges.forEach(processEdge);
        } else if (node.type === "node") {
          g.setNode(node.id, { width: 10, height: 10 });
          nodeMap[node.id] = node;
          if (parentId) {
            g.setParent(node.id, parentId);
          }
        }
      };
      const processEdge = (edge: Edge) => {
        g.setEdge(edge.from, edge.to);
        edgeMap[`${edge.from}-${edge.to}`] = edge;
      };

      data.nodes.forEach((node) => {
        processNode(node);
      });
      data.edges.forEach(processEdge);

      dagre.layout(g);
      return [g, nodeMap, edgeMap];
    }, [data]);

    const nodes: React.ReactNode[] = [];
    graph.nodes().forEach((id: any) => {
      const n = graph.node(id);
      nodes.push(
        <Fragment key={id}>
          {nodeRender({ data: nodeMap[id], point: { x: n.x, y: n.y } })}
        </Fragment>
      );
    });
    graph.edges().forEach((e: any) => {
      const points = graph.edge(e).points;
      nodes.push(
        <Fragment key={`${e.v}-${e.w}`}>
          {edgeRender({ data: edgeMap[`${e.v}-${e.w}`], points })}
        </Fragment>
      );
    });

    return <>{nodes}</>;
  }
);
