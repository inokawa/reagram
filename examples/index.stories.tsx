import React, { useEffect, useState } from "react";
import Dot, { parse } from "../src";

export default {
  title: "sample",
};

export const Letters = () => {
  return (
    <svg width="1000" height="1000">
      <g transform="translate(50,50)">
        <Dot
          data={
            parse(`
  // https://graphviz.org/Gallery/directed/fsm.html

digraph finite_state_machine {
	rankdir=LR;
	size="8,5"
	node [shape = doublecircle]; LR_0 LR_3 LR_4 LR_8;
	node [shape = circle];
	LR_0 -> LR_2 [ label = "SS(B)" ];
	LR_0 -> LR_1 [ label = "SS(S)" ];
	LR_1 -> LR_3 [ label = "S($end)" ];
	LR_2 -> LR_6 [ label = "SS(b)" ];
	LR_2 -> LR_5 [ label = "SS(a)" ];
	LR_2 -> LR_4 [ label = "S(A)" ];
	LR_5 -> LR_7 [ label = "S(b)" ];
	LR_5 -> LR_5 [ label = "S(a)" ];
	LR_6 -> LR_6 [ label = "S(b)" ];
	LR_6 -> LR_5 [ label = "S(a)" ];
	LR_7 -> LR_8 [ label = "S(b)" ];
	LR_7 -> LR_5 [ label = "S(a)" ];
	LR_8 -> LR_6 [ label = "S(b)" ];
	LR_8 -> LR_5 [ label = "S(a)" ];
}

  `)[0]
          }
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
