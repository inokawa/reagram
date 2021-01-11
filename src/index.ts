// @ts-expect-error
import parseDot from "dotparser";
import * as dot from "./types/dotparser";

export type Graph = {
  type: "graph" | "digraph";
  id?: string;
  nodes: (SubGraph | Node)[];
  edges: Edge[];
};

export type SubGraph = {
  type: "subgraph";
  id?: string;
  nodes: (SubGraph | Node)[];
  edges: Edge[];
};

export type Node = {
  type: "node";
  id: string;
  attr: Attr;
};

export type Edge = {
  type: "edge";
  from: string;
  to: string;
  attr: Attr;
};

type Attr = { [key: string]: string };

export const parse = (text: string) => {
  const ast: dot.Unknown[] = parseDot(text);
  return ast.reduce((acc, node) => {
    if (node.type === "graph" || node.type === "digraph") {
      acc.push(reduceGraph(node as dot.Graph));
    }
    return acc;
  }, [] as Graph[]);
};

const reduceGraph = (graph: dot.Graph): Graph => {
  const graphAttr: Attr = {};
  const nodeAttr: Attr = {};
  const edgeAttr: Attr = {};
  const nodeTemp: { [id: string]: Node } = {};

  const reduceStatements = (stmts: dot.Unknown[]) =>
    stmts.reduce<[(SubGraph | Node)[], Edge[]]>(
      (acc, st) => {
        switch (st.type) {
          case "edge_stmt":
            const [edges, edgeNodes] = processEdge(
              st as dot.EdgeStatement,
              nodeTemp,
              nodeAttr,
              edgeAttr
            );
            acc[0].push(...edgeNodes);
            acc[1].push(...edges);
            break;
          case "node_stmt":
            const nodes = processNode(
              st as dot.NodeStatement,
              nodeTemp,
              nodeAttr
            );
            acc[0].push(...nodes);
            break;
          case "attr_stmt":
            const atst = st as dot.AttrStatement;
            const attrs = mergeAttrList(atst.attr_list);
            if (atst.target === "node") {
              Object.keys(attrs).forEach((id) => {
                nodeAttr[id] = attrs[id];
              });
            } else if (atst.target === "edge") {
              Object.keys(attrs).forEach((id) => {
                edgeAttr[id] = attrs[id];
              });
            } else if (atst.target === "graph") {
              Object.keys(attrs).forEach((id) => {
                graphAttr[id] = attrs[id];
              });
            }
            break;
          default:
            break;
        }
        return acc;
      },
      [[], []]
    );

  const [nodes, edges] = reduceStatements(graph.children || []);
  return {
    type: graph.type,
    id: graph.id,
    nodes,
    edges,
  };
};

const processNode = (
  node: dot.NodeStatement,
  nodeTemp: { [id: string]: Node },
  nodeAttr: Attr
): Node[] => {
  const attr = mergeAttrList(node.attr_list || []);
  const id = node.node_id;
  if (nodeTemp[id]) {
    nodeTemp[id].attr = { ...nodeTemp[id].attr, ...attr };
    return [];
  } else {
    const node: Node = {
      type: "node",
      id,
      attr: { ...nodeAttr, ...attr },
    };
    nodeTemp[id] = node;
    return [node];
  }
};

const processEdge = (
  node: dot.EdgeStatement,
  nodeTemp: { [id: string]: Node },
  nodeAttr: Attr,
  edgeAttr: Attr
): [Edge[], Node[]] => {
  const edge_list = node.edge_list || [];
  if (edge_list.length === 0) return [[], []];

  const edges: Edge[] = [];
  let nodes: Node[] = [];
  let prevNode = edge_list[0];
  const attr = mergeAttrList(node.attr_list || []);
  for (let i = 1; i < edge_list.length; ++i) {
    var nextNode = edge_list[i];
    edges.push({
      type: "edge",
      from: prevNode.id,
      to: nextNode.id,
      attr: { ...edgeAttr, ...attr },
    });
    if (!nodeTemp[prevNode.id]) {
      nodes = processNode(
        { type: "node_stmt", node_id: prevNode.id, attr_list: [] },
        nodeTemp,
        nodeAttr
      );
    }
    prevNode = nextNode;
  }

  return [edges, nodes];
};

function mergeAttrList(attrs: dot.Attr[]) {
  return attrs.reduce((acc, n) => {
    if (n.type !== "attr" || !n.id) return acc;
    acc[n.id] = n.eq;
    return acc;
  }, {} as { [key: string]: string });
}

