import React, { useEffect, useState } from "react";
import cluster from "../fixtures/cluster.gv";
import finite_automaton from "../fixtures/finite_automaton.gv";

import Dot, { parse } from "../src";

export default {
  title: "sample",
};

export const Cluster = () => {
  return (
    <svg width="1000" height="1000">
      <g transform="translate(50,50)">
        <Dot
          data={parse(cluster)[0]}
          nodeRender={(n) => (
            <text x={n.point.x} y={n.point.y}>
              {n.data.id}
            </text>
          )}
          edgeRender={(n) => (
            <line
              x1={n.points[0].x}
              y1={n.points[0].y}
              x2={n.points[n.points.length - 1].x}
              y2={n.points[n.points.length - 1].y}
              stroke="steelblue"
            />
          )}
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
          data={parse(finite_automaton)[0]}
          nodeRender={(n) => (
            <text x={n.point.x} y={n.point.y}>
              {n.data.id}
            </text>
          )}
          edgeRender={(n) => (
            <line
              x1={n.points[0].x}
              y1={n.points[0].y}
              x2={n.points[n.points.length - 1].x}
              y2={n.points[n.points.length - 1].y}
              stroke="steelblue"
            />
          )}
        />
      </g>
    </svg>
  );
};
