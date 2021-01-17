import React from "react";
import cluster from "../fixtures/cluster.gv";
import data_structures from "../fixtures/data_structures.gv";
import finite_automaton from "../fixtures/finite_automaton.gv";
import unix_family_tree from "../fixtures/unix_family_tree.gv";

import Reagram, { parseDot } from "../src";

export default {
  title: "Dot",
};

const nodeRender = (n) =>
  n.data.type === "node" ? (
    <g>
      <rect
        x={n.x - n.width / 2}
        y={n.y - n.height / 2}
        width={n.width}
        height={n.height}
        fill="gray"
      />
      <text x={n.x} y={n.y}>
        {n.data.id}
      </text>
    </g>
  ) : (
    <g>
      <rect
        x={n.x - n.width / 2}
        y={n.y - n.height / 2}
        width={n.width}
        height={n.height}
        fillOpacity="0.2"
        fill="lightgray"
        stroke="lightgray"
      />
      <text x={n.x} y={n.y}>
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
        <Reagram
          data={parseDot(cluster)[0]}
          nodeRender={nodeRender}
          edgeRender={edgeRender}
        />
      </g>
    </svg>
  );
};

export const DataStructures = () => {
  return (
    <svg width="1000" height="1000">
      <g transform="translate(50,50)">
        <Reagram
          data={parseDot(data_structures)[0]}
          nodeRender={nodeRender}
          edgeRender={edgeRender}
          rankdir="LR"
          nodeWidth={40}
          nodeHeight={40}
        />
      </g>
    </svg>
  );
};

export const FiniteStateMachine = () => {
  return (
    <svg width="1000" height="1000">
      <g transform="translate(50,50)">
        <Reagram
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
        <Reagram
          data={parseDot(unix_family_tree)[0]}
          nodeRender={nodeRender}
          edgeRender={edgeRender}
          nodesep={10}
          nodeWidth={80}
          nodeHeight={40}
        />
      </g>
    </svg>
  );
};
