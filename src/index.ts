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
  let graphAttr: Attr = {};
  let nodeGlobalAttr: Attr = {};
  let edgeGlobalAttr: Attr = {};
  const nodeTemp: { [id: string]: Node } = {};
  const edgeTemp: { [id: string]: Edge } = {};

  const reduceStatements = (stmts: dot.Unknown[]) =>
    stmts.reduce<[(SubGraph | Node)[], Edge[]]>(
      (acc, st) => {
        switch (st.type) {
          case "edge_stmt":
            const edges = processEdge(st as dot.EdgeStatement);
            acc[1].push(...edges);
            break;
          case "node_stmt":
            const nodes = processNode(st as dot.NodeStatement, nodeTemp);
            acc[0].push(...nodes);
            break;
          case "attr_stmt":
            const atst = st as dot.AttrStatement;
            const attrs = mergeAttrList(atst.attr_list);
            if (atst.target === "node") {
              nodeGlobalAttr = { ...nodeGlobalAttr, ...attrs };
            } else if (atst.target === "edge") {
              edgeGlobalAttr = { ...edgeGlobalAttr, ...attrs };
            } else if (atst.target === "graph") {
              graphAttr = { ...graphAttr, ...attrs };
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
  nodeTemp: { [id: string]: Node }
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
      attr,
    };
    nodeTemp[id] = node;
    return [node];
  }
};

const processEdge = (node: dot.EdgeStatement): Edge[] => {
  const edges = node.edge_list || [];
  if (edges.length === 0) return [];

  const arr: Edge[] = [];
  let prevNode = edges[0];
  const attr = mergeAttrList(node.attr_list || []);
  for (let i = 1; i < edges.length; ++i) {
    var nextNode = edges[i];
    arr.push({
      type: "edge",
      from: prevNode.id,
      to: nextNode.id,
      attr: { ...attr },
    });
    prevNode = nextNode;
  }

  return arr;
};

function mergeAttrList(attrs: dot.Attr[]) {
  return attrs.reduce((acc, n) => {
    if (n.type !== "attr" || !n.id) return acc;
    acc[n.id] = n.eq;
    return acc;
  }, {} as { [key: string]: string });
}

