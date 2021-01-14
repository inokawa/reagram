import React, { memo, useMemo } from "react";
// @ts-expect-error
import dagre from "@dagrejs/dagre";
import { Graph, Node, Edge } from "./parser";

export type Props = {
  data: Graph;
  graphRender?: (node: Graph) => React.ReactNode;
  nodeRender?: (node: Node) => React.ReactNode;
  edgeRender?: (node: Edge) => React.ReactNode;
};

export const Renderer = memo(
  ({ data, graphRender, nodeRender, edgeRender }: Props) => {
    const graph = useMemo(() => {
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
          if (parentId) {
            g.setParent(node.id, parentId);
          }
        }
      };
      const processEdge = (edge: Edge) => {
        g.setEdge(edge.from, edge.to);
      };

      data.nodes.forEach((node) => {
        processNode(node);
      });
      data.edges.forEach(processEdge);

      dagre.layout(g);
      return g;
    }, [data]);

    const nodes: React.ReactNode[] = [];
    graph.nodes().forEach((v: any) => {
      const n = graph.node(v);
      nodes.push(
        <text key={v} x={n.x} y={n.y}>
          {v}
        </text>
      );
    });
    graph.edges().forEach((v: any) => {
      const points = graph.edge(v).points;
      nodes.push(
        <line
          key={`${v.v}-${v.w}`}
          x1={points[0].x}
          y1={points[0].y}
          x2={points[points.length - 1].x}
          y2={points[points.length - 1].y}
          stroke="steelblue"
        />
      );
    });

    return (
      <svg width="1000" height="1000">
        <g transform="translate(50,50)">{nodes}</g>
      </svg>
    );
  }
);
