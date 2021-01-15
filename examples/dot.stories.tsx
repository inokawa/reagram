import React from "react";
import cluster from "../fixtures/cluster.gv";
import finite_automaton from "../fixtures/finite_automaton.gv";
import unix_family_tree from "../fixtures/unix_family_tree.gv";

import Dot, { parseDot } from "../src";

export default {
  title: "Dot",
};

const nodeRender = (n) => (
  <g>
    <rect
      x={n.point.x - 10}
      y={n.point.y - 10}
      width="20"
      height="20"
      fill="gray"
    />
    <text x={n.point.x} y={n.point.y}>
      {n.data.id}
    </text>
  </g>
);

const edgeRender = (n) => (
  <line
    x1={n.points[0].x}
    y1={n.points[0].y}
    x2={n.points[n.points.length - 1].x}
    y2={n.points[n.points.length - 1].y}
    stroke="lightgray"
  />
);

export const Cluster = () => {
  return (
    <svg width="1000" height="1000">
      <g transform="translate(50,50)">
        <Dot
          data={parseDot(cluster)[0]}
          nodeRender={nodeRender}
          edgeRender={edgeRender}
        />
      </g>
    </svg>
  );
};

export const FiniteStateMachine = () => {
  return (
    <svg width="1000" height="1000">
      <g transform="translate(50,50)">
        <Dot
          data={parseDot(finite_automaton)[0]}
          nodeRender={nodeRender}
          edgeRender={edgeRender}
        />
      </g>
    </svg>
  );
};

export const UnixFamilyTree = () => {
  return (
    <svg width="1000" height="1000">
      <g transform="translate(50,50)">
        <Dot
          data={parseDot(unix_family_tree)[0]}
          nodeRender={nodeRender}
          edgeRender={edgeRender}
        />
      </g>
    </svg>
  );
};
