import React from "react";
import cluster from "../fixtures/cluster.gv";
import finite_automaton from "../fixtures/finite_automaton.gv";
import go_package_imports from "../fixtures/go_package_imports.gv";
import math_parse_tree from "../fixtures/math_parse_tree.gv";
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

export const FiniteStateMachine = () => {
  return (
    <svg width="1000" height="1000">
      <marker
        xmlns="http://www.w3.org/2000/svg"
        id="arrow"
        viewBox="0 0 10 10"
        refX="10"
        refY="5"
        markerUnits="strokeWidth"
        markerWidth="20"
        markerHeight="10"
        orient="auto"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" stroke="lightgray" />
      </marker>
      <g transform="translate(50,50)">
        <Reagram
          data={parseDot(finite_automaton)[0]}
          nodeRender={(n) => (
            <g>
              <circle cx={n.x} cy={n.y} r={n.width / 2} fill="gray" />
              <text x={n.x} y={n.y}>
                {n.data.id}
              </text>
            </g>
          )}
          edgeRender={(n) => (
            <polyline
              points={n.points.reduce((acc, p) => {
                acc += `${p.x},${p.y} `;
                return acc;
              }, "")}
              fill="none"
              stroke="lightgray"
              marker-end="url(#arrow)"
            />
          )}
          rankdir="LR"
        />
      </g>
    </svg>
  );
};

export const GoPackageImports = () => {
  return (
    <svg width="1000" height="1000">
      <marker
        xmlns="http://www.w3.org/2000/svg"
        id="arrow"
        viewBox="0 0 10 10"
        refX="10"
        refY="5"
        markerUnits="strokeWidth"
        markerWidth="20"
        markerHeight="10"
        orient="auto"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" stroke="lightgray" />
      </marker>
      <g transform="translate(50,50)">
        <Reagram
          data={parseDot(go_package_imports)[0]}
          nodeRender={(n) => (
            <g>
              <circle cx={n.x} cy={n.y} r={n.width / 2} fill="gray" />
              <text x={n.x} y={n.y}>
                {n.data.id}
              </text>
            </g>
          )}
          edgeRender={(n) => (
            <polyline
              points={n.points.reduce((acc, p) => {
                acc += `${p.x},${p.y} `;
                return acc;
              }, "")}
              fill="none"
              stroke="lightgray"
              marker-end="url(#arrow)"
            />
          )}
        />
      </g>
    </svg>
  );
};

export const MathParseTree = () => {
  return (
    <svg width="1600" height="1000">
      <g transform="translate(50,50)">
        <Reagram
          data={parseDot(math_parse_tree)[0]}
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
