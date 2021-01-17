(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1115:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(53),__webpack_require__(37),__webpack_require__(32),__webpack_require__(43),__webpack_require__(1116),__webpack_require__(1117),__webpack_require__(6),__webpack_require__(38);var _clientApi=__webpack_require__(56),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1118);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1118:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1119:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(366).configure)([__webpack_require__(1120),__webpack_require__(1121)],module,!1)}).call(this,__webpack_require__(104)(module))},1120:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1120},1121:function(module,exports,__webpack_require__){var map={"./dot.stories.jsx":1164};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1121},1164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Cluster",(function(){return dot_stories_Cluster})),__webpack_require__.d(__webpack_exports__,"DataStructures",(function(){return dot_stories_DataStructures})),__webpack_require__.d(__webpack_exports__,"FiniteStateMachine",(function(){return dot_stories_FiniteStateMachine})),__webpack_require__.d(__webpack_exports__,"MathParseTree",(function(){return dot_stories_MathParseTree})),__webpack_require__.d(__webpack_exports__,"UnixFamilyTree",(function(){return dot_stories_UnixFamilyTree}));__webpack_require__(4);var jsx_runtime=__webpack_require__(28),react=__webpack_require__(0),dagre=(__webpack_require__(16),__webpack_require__(37),__webpack_require__(13),__webpack_require__(38),__webpack_require__(324));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Renderer=Object(react.memo)((function(_ref){var data=_ref.data,nodeRender=(_ref.graphRender,_ref.nodeRender),edgeRender=_ref.edgeRender,rankdir=_ref.rankdir,align=_ref.align,nodesep=_ref.nodesep,edgesep=_ref.edgesep,ranksep=_ref.ranksep,acyclicer=_ref.acyclicer,ranker=_ref.ranker,nodeWidth=_ref.nodeWidth,nodeHeight=_ref.nodeHeight,_useMemo2=_slicedToArray(Object(react.useMemo)((function(){var nodeMap={},edgeMap={},g=new dagre.graphlib.Graph({directed:"digraph"===data.type,multigraph:!0,compound:!0}),graphOpts={};void 0!==rankdir&&(graphOpts.rankdir=rankdir),void 0!==align&&(graphOpts.align=align),void 0!==nodesep&&(graphOpts.nodesep=nodesep),void 0!==edgesep&&(graphOpts.edgesep=edgesep),void 0!==ranksep&&(graphOpts.ranksep=ranksep),void 0!==acyclicer&&(graphOpts.acyclicer=acyclicer),void 0!==ranker&&(graphOpts.ranker=ranker),g.setGraph(graphOpts),g.setDefaultNodeLabel((function(){return{}})),g.setDefaultEdgeLabel((function(){return{}}));var setNode=function setNode(node,parentId){g.setNode(node.id,{width:void 0!==nodeWidth?nodeWidth:10,height:void 0!==nodeHeight?nodeHeight:10}),nodeMap[node.id]=node,parentId&&g.setParent(node.id,parentId)},processEdge=function processEdge(edge){g.setEdge(edge.from,edge.to),edgeMap["".concat(edge.from,"-").concat(edge.to)]=edge};return data.nodes.forEach((function(node){!function processNode(node,parentId){"graph"===node.type||"digraph"===node.type?(setNode(node,parentId),node.nodes.forEach((function(n){processNode(n,node.id)})),node.edges.forEach(processEdge)):"node"===node.type&&setNode(node,parentId)}(node)})),data.edges.forEach(processEdge),dagre.layout(g),[g,nodeMap,edgeMap]}),[data]),3),graph=_useMemo2[0],nodeMap=_useMemo2[1],edgeMap=_useMemo2[2],nodes=[];return graph.edges().forEach((function(e){var points=graph.edge(e).points;nodes.push(Object(jsx_runtime.jsx)(react.Fragment,{children:edgeRender({data:edgeMap["".concat(e.v,"-").concat(e.w)],points:points})},"".concat(e.v,"-").concat(e.w)))})),graph.nodes().forEach((function(id){var n=graph.node(id);nodes.push(Object(jsx_runtime.jsx)(react.Fragment,{children:nodeRender({data:nodeMap[id],x:n.x,y:n.y,width:n.width,height:n.height})},id))})),Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:nodes})}));try{Renderer.displayName="Renderer",Renderer.__docgenInfo={description:"",displayName:"Renderer",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Graph"}},graphRender:{defaultValue:null,description:"",name:"graphRender",required:!1,type:{name:"((node: { data: Graph; }) => ReactNode)"}},nodeRender:{defaultValue:null,description:"",name:"nodeRender",required:!0,type:{name:"(node: { data: Node; x: number; y: number; width: number; height: number; }) => ReactNode"}},edgeRender:{defaultValue:null,description:"",name:"edgeRender",required:!0,type:{name:"(node: { data: Edge; points: { x: number; y: number; }[]; }) => ReactNode"}},rankdir:{defaultValue:null,description:"",name:"rankdir",required:!1,type:{name:'"TB" | "BT" | "LR" | "RL"'}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:'"UL" | "UR" | "DL" | "DR"'}},nodesep:{defaultValue:null,description:"",name:"nodesep",required:!1,type:{name:"number"}},edgesep:{defaultValue:null,description:"",name:"edgesep",required:!1,type:{name:"number"}},ranksep:{defaultValue:null,description:"",name:"ranksep",required:!1,type:{name:"number"}},acyclicer:{defaultValue:null,description:"",name:"acyclicer",required:!1,type:{name:'"greedy"'}},ranker:{defaultValue:null,description:"",name:"ranker",required:!1,type:{name:'"network-simplex" | "tight-tree" | "longest-path"'}},nodeWidth:{defaultValue:null,description:"",name:"nodeWidth",required:!1,type:{name:"number"}},nodeHeight:{defaultValue:null,description:"",name:"nodeHeight",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/renderer.tsx#Renderer"]={docgenInfo:Renderer.__docgenInfo,name:"Renderer",path:"src/renderer.tsx#Renderer"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(69),__webpack_require__(6);var dotparser=__webpack_require__(493),dotparser_default=__webpack_require__.n(dotparser);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return parser_arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||parser_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function parser_slicedToArray(arr,i){return function parser_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function parser_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||parser_unsupportedIterableToArray(arr,i)||function parser_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function parser_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return parser_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?parser_arrayLikeToArray(o,minLen):void 0}}function parser_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var parser_parse=function parse(text){return dotparser_default()(text).reduce((function(acc,node){return"graph"!==node.type&&"digraph"!==node.type||acc.push(reduceGraph(node,{},{},{},{})),acc}),[])},reduceGraph=function reduceGraph(graph,graphAttr,nodeAttr,edgeAttr,nodeTemp){var _reduceStatements=function reduceStatements(stmts){return stmts.reduce((function(acc,st){var _acc$,_acc$2,_acc$3;switch(st.type){case"subgraph":var sgst=st;acc[0].push(reduceGraph({type:graph.type,id:sgst.id,children:sgst.children},Object.assign({},graphAttr),Object.assign({},nodeAttr),Object.assign({},edgeAttr),nodeTemp));break;case"edge_stmt":var _processEdge2=parser_slicedToArray(parser_processEdge(st,nodeTemp,nodeAttr,edgeAttr),2),_edges=_processEdge2[0],edgeNodes=_processEdge2[1];(_acc$=acc[0]).push.apply(_acc$,_toConsumableArray(edgeNodes)),(_acc$2=acc[1]).push.apply(_acc$2,_toConsumableArray(_edges));break;case"node_stmt":var _nodes=parser_processNode(st,nodeTemp,nodeAttr);(_acc$3=acc[0]).push.apply(_acc$3,_toConsumableArray(_nodes));break;case"attr_stmt":var atst=st,attrs=mergeAttrList(atst.attr_list);"node"===atst.target?Object.keys(attrs).forEach((function(id){nodeAttr[id]=attrs[id]})):"edge"===atst.target?Object.keys(attrs).forEach((function(id){edgeAttr[id]=attrs[id]})):"graph"===atst.target&&Object.keys(attrs).forEach((function(id){graphAttr[id]=attrs[id]}))}return acc}),[[],[]])}(graph.children||[]),_reduceStatements2=parser_slicedToArray(_reduceStatements,2),nodes=_reduceStatements2[0],edges=_reduceStatements2[1];return{type:graph.type,id:graph.id,nodes:nodes,edges:edges,attr:graphAttr}},parser_processNode=function processNode(node,nodeTemp,nodeAttr){var attr=mergeAttrList(node.attr_list||[]),id=node.node_id.id;if(nodeTemp[id])return nodeTemp[id].attr=Object.assign({},nodeTemp[id].attr,attr),[];var _node={type:"node",id:id,attr:Object.assign({},nodeAttr,attr)};return nodeTemp[id]=_node,[_node]},parser_processEdge=function processEdge(node,nodeTemp,nodeAttr,edgeAttr){var edge_list=node.edge_list||[];if(0===edge_list.length)return[[],[]];var edges=[],nodes=[],prevNode=edge_list[0];nodeTemp[prevNode.id]||nodes.push.apply(nodes,_toConsumableArray(parser_processNode({type:"node_stmt",node_id:{type:"node_id",id:prevNode.id},attr_list:[]},nodeTemp,nodeAttr)));for(var attr=mergeAttrList(node.attr_list||[]),i=1;i<edge_list.length;++i){var nextNode=edge_list[i];edges.push({type:"edge",from:prevNode.id,to:nextNode.id,attr:Object.assign({},edgeAttr,attr)}),nodeTemp[nextNode.id]||nodes.push.apply(nodes,_toConsumableArray(parser_processNode({type:"node_stmt",node_id:{type:"node_id",id:nextNode.id},attr_list:[]},nodeTemp,nodeAttr))),prevNode=nextNode}return[edges,nodes]};function mergeAttrList(attrs){return attrs.reduce((function(acc,n){return"attr"===n.type&&n.id?(acc[n.id]=n.eq,acc):acc}),{})}__webpack_exports__.default={title:"Dot"};var dot_stories_nodeRender=function nodeRender(n){return"node"===n.data.type?Object(jsx_runtime.jsxs)("g",{children:[Object(jsx_runtime.jsx)("rect",{x:n.x-n.width/2,y:n.y-n.height/2,width:n.width,height:n.height,fill:"gray"}),Object(jsx_runtime.jsx)("text",{x:n.x,y:n.y,children:n.data.id})]}):Object(jsx_runtime.jsxs)("g",{children:[Object(jsx_runtime.jsx)("rect",{x:n.x-n.width/2,y:n.y-n.height/2,width:n.width,height:n.height,fillOpacity:"0.2",fill:"lightgray",stroke:"lightgray"}),Object(jsx_runtime.jsx)("text",{x:n.x,y:n.y,children:n.data.id})]})},dot_stories_edgeRender=function edgeRender(n){return Object(jsx_runtime.jsx)("line",{x1:n.points[0].x,y1:n.points[0].y,x2:n.points[n.points.length-1].x,y2:n.points[n.points.length-1].y,stroke:"lightgray"})};dot_stories_edgeRender.displayName="edgeRender";var dot_stories_Cluster=function Cluster(){return Object(jsx_runtime.jsx)("svg",{width:"1000",height:"1000",children:Object(jsx_runtime.jsx)("g",{transform:"translate(50,50)",children:Object(jsx_runtime.jsx)(Renderer,{data:parser_parse('// https://graphviz.org/Gallery/directed/cluster.html\n\ndigraph G {\n\n\tsubgraph cluster_0 {\n\t\tstyle=filled;\n\t\tcolor=lightgrey;\n\t\tnode [style=filled,color=white];\n\t\ta0 -> a1 -> a2 -> a3;\n\t\tlabel = "process #1";\n\t}\n\n\tsubgraph cluster_1 {\n\t\tnode [style=filled];\n\t\tb0 -> b1 -> b2 -> b3;\n\t\tlabel = "process #2";\n\t\tcolor=blue\n\t}\n\tstart -> a0;\n\tstart -> b0;\n\ta1 -> b3;\n\tb2 -> a3;\n\ta3 -> a0;\n\ta3 -> end;\n\tb3 -> end;\n\n\tstart [shape=Mdiamond];\n\tend [shape=Msquare];\n}\n')[0],nodeRender:dot_stories_nodeRender,edgeRender:dot_stories_edgeRender})})})};dot_stories_Cluster.displayName="Cluster";var dot_stories_DataStructures=function DataStructures(){return Object(jsx_runtime.jsx)("svg",{width:"1000",height:"1000",children:Object(jsx_runtime.jsx)("g",{transform:"translate(50,50)",children:Object(jsx_runtime.jsx)(Renderer,{data:parser_parse('// https://graphviz.org/Gallery/directed/datastruct.html\n\ndigraph g {\ngraph [\nrankdir = "LR"\n];\nnode [\nfontsize = "16"\nshape = "ellipse"\n];\nedge [\n];\n"node0" [\nlabel = "<f0> 0x10ba8| <f1>"\nshape = "record"\n];\n"node1" [\nlabel = "<f0> 0xf7fc4380| <f1> | <f2> |-1"\nshape = "record"\n];\n"node2" [\nlabel = "<f0> 0xf7fc44b8| | |2"\nshape = "record"\n];\n"node3" [\nlabel = "<f0> 3.43322790286038071e-06|44.79998779296875|0"\nshape = "record"\n];\n"node4" [\nlabel = "<f0> 0xf7fc4380| <f1> | <f2> |2"\nshape = "record"\n];\n"node5" [\nlabel = "<f0> (nil)| | |-1"\nshape = "record"\n];\n"node6" [\nlabel = "<f0> 0xf7fc4380| <f1> | <f2> |1"\nshape = "record"\n];\n"node7" [\nlabel = "<f0> 0xf7fc4380| <f1> | <f2> |2"\nshape = "record"\n];\n"node8" [\nlabel = "<f0> (nil)| | |-1"\nshape = "record"\n];\n"node9" [\nlabel = "<f0> (nil)| | |-1"\nshape = "record"\n];\n"node10" [\nlabel = "<f0> (nil)| <f1> | <f2> |-1"\nshape = "record"\n];\n"node11" [\nlabel = "<f0> (nil)| <f1> | <f2> |-1"\nshape = "record"\n];\n"node12" [\nlabel = "<f0> 0xf7fc43e0| | |1"\nshape = "record"\n];\n"node0":f0 -> "node1":f0 [\nid = 0\n];\n"node0":f1 -> "node2":f0 [\nid = 1\n];\n"node1":f0 -> "node3":f0 [\nid = 2\n];\n"node1":f1 -> "node4":f0 [\nid = 3\n];\n"node1":f2 -> "node5":f0 [\nid = 4\n];\n"node4":f0 -> "node3":f0 [\nid = 5\n];\n"node4":f1 -> "node6":f0 [\nid = 6\n];\n"node4":f2 -> "node10":f0 [\nid = 7\n];\n"node6":f0 -> "node3":f0 [\nid = 8\n];\n"node6":f1 -> "node7":f0 [\nid = 9\n];\n"node6":f2 -> "node9":f0 [\nid = 10\n];\n"node7":f0 -> "node3":f0 [\nid = 11\n];\n"node7":f1 -> "node1":f0 [\nid = 12\n];\n"node7":f2 -> "node8":f0 [\nid = 13\n];\n"node10":f1 -> "node11":f0 [\nid = 14\n];\n"node10":f2 -> "node12":f0 [\nid = 15\n];\n"node11":f2 -> "node1":f0 [\nid = 16\n];\n}\n')[0],nodeRender:dot_stories_nodeRender,edgeRender:dot_stories_edgeRender,rankdir:"LR",nodeWidth:40,nodeHeight:40})})})};dot_stories_DataStructures.displayName="DataStructures";var dot_stories_FiniteStateMachine=function FiniteStateMachine(){return Object(jsx_runtime.jsx)("svg",{width:"1000",height:"1000",children:Object(jsx_runtime.jsx)("g",{transform:"translate(50,50)",children:Object(jsx_runtime.jsx)(Renderer,{data:parser_parse('// https://graphviz.org/Gallery/directed/fsm.html\n\ndigraph finite_state_machine {\n\trankdir=LR;\n\tsize="8,5"\n\tnode [shape = doublecircle]; LR_0 LR_3 LR_4 LR_8;\n\tnode [shape = circle];\n\tLR_0 -> LR_2 [ label = "SS(B)" ];\n\tLR_0 -> LR_1 [ label = "SS(S)" ];\n\tLR_1 -> LR_3 [ label = "S($end)" ];\n\tLR_2 -> LR_6 [ label = "SS(b)" ];\n\tLR_2 -> LR_5 [ label = "SS(a)" ];\n\tLR_2 -> LR_4 [ label = "S(A)" ];\n\tLR_5 -> LR_7 [ label = "S(b)" ];\n\tLR_5 -> LR_5 [ label = "S(a)" ];\n\tLR_6 -> LR_6 [ label = "S(b)" ];\n\tLR_6 -> LR_5 [ label = "S(a)" ];\n\tLR_7 -> LR_8 [ label = "S(b)" ];\n\tLR_7 -> LR_5 [ label = "S(a)" ];\n\tLR_8 -> LR_6 [ label = "S(b)" ];\n\tLR_8 -> LR_5 [ label = "S(a)" ];\n}\n')[0],nodeRender:dot_stories_nodeRender,edgeRender:dot_stories_edgeRender})})})};dot_stories_FiniteStateMachine.displayName="FiniteStateMachine";var dot_stories_MathParseTree=function MathParseTree(){return Object(jsx_runtime.jsx)("svg",{width:"1600",height:"1000",children:Object(jsx_runtime.jsx)("g",{transform:"translate(50,50)",children:Object(jsx_runtime.jsx)(Renderer,{data:parser_parse('graph ""\n   {\n#   node [fontsize=10,width=".2", height=".2", margin=0];\n#   graph[fontsize=8];\n   label="((+ (* (X) (- (- (X) (X)) (X))) (% (+ (X) (X)) (COS (- (X) (X))))) (EXP (* (X) (X))) (+ (% (EXP (SIN (+ (X) (X)))) (SIN (* (X) (EXP (* (X) (X)))))) (* (X) (X))) (% (EXP (% (X) (% (X) (X)))) (EXP (SIN (X)))))"\n\n   subgraph cluster01\n   {\n   label="(+ (* (X) (- (- (X) (X)) (X))) (% (+ (X) (X)) (COS (- (X) (X)))))"\n   n002 ;\n   n002 [label="+"] ;\n   n002 -- n003 ;\n   n003 [label="*"] ;\n   n003 -- n004 ;\n   n004 [label="X"] ;\n   n003 -- n005 ;\n   n005 [label="-"] ;\n   n005 -- n006 ;\n   n006 [label="-"] ;\n   n006 -- n007 ;\n   n007 [label="X"] ;\n   n006 -- n008 ;\n   n008 [label="X"] ;\n   n005 -- n009 ;\n   n009 [label="X"] ;\n   n002 -- n010 ;\n   n010 [label="%"] ;\n   n010 -- n011 ;\n   n011 [label="+"] ;\n   n011 -- n012 ;\n   n012 [label="X"] ;\n   n011 -- n013 ;\n   n013 [label="X"] ;\n   n010 -- n014 ;\n   n014 [label="COS"] ;\n   n014 -- n015 ;\n   n015 [label="-"] ;\n   n015 -- n016 ;\n   n016 [label="X"] ;\n   n015 -- n017 ;\n   n017 [label="X"] ;\n   }\n\n   subgraph cluster17\n   {\n   label="(EXP (* (X) (X)))"\n   n018 ;\n   n018 [label="EXP"] ;\n   n018 -- n019 ;\n   n019 [label="*"] ;\n   n019 -- n020 ;\n   n020 [label="X"] ;\n   n019 -- n021 ;\n   n021 [label="X"] ;\n   }\n\n   subgraph cluster21\n   {\n   label="(+ (% (EXP (SIN (+ (X) (X)))) (SIN (* (X) (EXP (* (X) (X)))))) (* (X) (X)))"\n   n022 ;\n   n022 [label="+"] ;\n   n022 -- n023 ;\n   n023 [label="%"] ;\n   n023 -- n024 ;\n   n024 [label="EXP"] ;\n   n024 -- n025 ;\n   n025 [label="SIN"] ;\n   n025 -- n026 ;\n   n026 [label="+"] ;\n   n026 -- n027 ;\n   n027 [label="X"] ;\n   n026 -- n028 ;\n   n028 [label="X"] ;\n   n023 -- n029 ;\n   n029 [label="SIN"] ;\n   n029 -- n030 ;\n   n030 [label="*"] ;\n   n030 -- n031 ;\n   n031 [label="X"] ;\n   n030 -- n032 ;\n   n032 [label="EXP"] ;\n   n032 -- n033 ;\n   n033 [label="*"] ;\n   n033 -- n034 ;\n   n034 [label="X"] ;\n   n033 -- n035 ;\n   n035 [label="X"] ;\n   n022 -- n036 ;\n   n036 [label="*"] ;\n   n036 -- n037 ;\n   n037 [label="X"] ;\n   n036 -- n038 ;\n   n038 [label="X"] ;\n   }\n\n   subgraph cluster38\n   {\n   label="(% (EXP (% (X) (% (X) (X)))) (EXP (SIN (X))))"\n   n039 ;\n   n039 [label="%"] ;\n   n039 -- n040 ;\n   n040 [label="EXP"] ;\n   n040 -- n041 ;\n   n041 [label="%"] ;\n   n041 -- n042 ;\n   n042 [label="X"] ;\n   n041 -- n043 ;\n   n043 [label="%"] ;\n   n043 -- n044 ;\n   n044 [label="X"] ;\n   n043 -- n045 ;\n   n045 [label="X"] ;\n   n039 -- n046 ;\n   n046 [label="EXP"] ;\n   n046 -- n047 ;\n   n047 [label="SIN"] ;\n   n047 -- n048 ;\n   n048 [label="X"] ;\n   }\n   }')[0],nodeRender:dot_stories_nodeRender,edgeRender:dot_stories_edgeRender})})})};dot_stories_MathParseTree.displayName="MathParseTree";var dot_stories_UnixFamilyTree=function UnixFamilyTree(){return Object(jsx_runtime.jsx)("svg",{width:"1000",height:"1000",children:Object(jsx_runtime.jsx)("g",{transform:"translate(50,50)",children:Object(jsx_runtime.jsx)(Renderer,{data:parser_parse('// https://graphviz.org/Gallery/directed/unix.html\n\n/* courtesy Ian Darwin and Geoff Collyer, Softquad Inc. */\ndigraph unix {\n\tsize="6,6";\n\tnode [color=lightblue2, style=filled];\n\t"5th Edition" -> "6th Edition";\n\t"5th Edition" -> "PWB 1.0";\n\t"6th Edition" -> "LSX";\n\t"6th Edition" -> "1 BSD";\n\t"6th Edition" -> "Mini Unix";\n\t"6th Edition" -> "Wollongong";\n\t"6th Edition" -> "Interdata";\n\t"Interdata" -> "Unix/TS 3.0";\n\t"Interdata" -> "PWB 2.0";\n\t"Interdata" -> "7th Edition";\n\t"7th Edition" -> "8th Edition";\n\t"7th Edition" -> "32V";\n\t"7th Edition" -> "V7M";\n\t"7th Edition" -> "Ultrix-11";\n\t"7th Edition" -> "Xenix";\n\t"7th Edition" -> "UniPlus+";\n\t"V7M" -> "Ultrix-11";\n\t"8th Edition" -> "9th Edition";\n\t"1 BSD" -> "2 BSD";\n\t"2 BSD" -> "2.8 BSD";\n\t"2.8 BSD" -> "Ultrix-11";\n\t"2.8 BSD" -> "2.9 BSD";\n\t"32V" -> "3 BSD";\n\t"3 BSD" -> "4 BSD";\n\t"4 BSD" -> "4.1 BSD";\n\t"4.1 BSD" -> "4.2 BSD";\n\t"4.1 BSD" -> "2.8 BSD";\n\t"4.1 BSD" -> "8th Edition";\n\t"4.2 BSD" -> "4.3 BSD";\n\t"4.2 BSD" -> "Ultrix-32";\n\t"PWB 1.0" -> "PWB 1.2";\n\t"PWB 1.0" -> "USG 1.0";\n\t"PWB 1.2" -> "PWB 2.0";\n\t"USG 1.0" -> "CB Unix 1";\n\t"USG 1.0" -> "USG 2.0";\n\t"CB Unix 1" -> "CB Unix 2";\n\t"CB Unix 2" -> "CB Unix 3";\n\t"CB Unix 3" -> "Unix/TS++";\n\t"CB Unix 3" -> "PDP-11 Sys V";\n\t"USG 2.0" -> "USG 3.0";\n\t"USG 3.0" -> "Unix/TS 3.0";\n\t"PWB 2.0" -> "Unix/TS 3.0";\n\t"Unix/TS 1.0" -> "Unix/TS 3.0";\n\t"Unix/TS 3.0" -> "TS 4.0";\n\t"Unix/TS++" -> "TS 4.0";\n\t"CB Unix 3" -> "TS 4.0";\n\t"TS 4.0" -> "System V.0";\n\t"System V.0" -> "System V.2";\n\t"System V.2" -> "System V.3";\n}\n')[0],nodeRender:dot_stories_nodeRender,edgeRender:dot_stories_edgeRender,nodesep:10,nodeWidth:80,nodeHeight:40})})})};dot_stories_UnixFamilyTree.displayName="UnixFamilyTree",dot_stories_Cluster.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <svg width="1000" height="1000">\n      <g transform="translate(50,50)">\n        <Reagram\n          data={parseDot(cluster)[0]}\n          nodeRender={nodeRender}\n          edgeRender={edgeRender}\n        />\n      </g>\n    </svg>\n  );\n}'}},dot_stories_Cluster.parameters),dot_stories_DataStructures.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <svg width="1000" height="1000">\n      <g transform="translate(50,50)">\n        <Reagram\n          data={parseDot(data_structures)[0]}\n          nodeRender={nodeRender}\n          edgeRender={edgeRender}\n          rankdir="LR"\n          nodeWidth={40}\n          nodeHeight={40}\n        />\n      </g>\n    </svg>\n  );\n}'}},dot_stories_DataStructures.parameters),dot_stories_FiniteStateMachine.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <svg width="1000" height="1000">\n      <g transform="translate(50,50)">\n        <Reagram\n          data={parseDot(finite_automaton)[0]}\n          nodeRender={nodeRender}\n          edgeRender={edgeRender}\n        />\n      </g>\n    </svg>\n  );\n}'}},dot_stories_FiniteStateMachine.parameters),dot_stories_MathParseTree.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <svg width="1600" height="1000">\n      <g transform="translate(50,50)">\n        <Reagram\n          data={parseDot(math_parse_tree)[0]}\n          nodeRender={nodeRender}\n          edgeRender={edgeRender}\n        />\n      </g>\n    </svg>\n  );\n}'}},dot_stories_MathParseTree.parameters),dot_stories_UnixFamilyTree.parameters=Object.assign({storySource:{source:'() => {\n  return (\n    <svg width="1000" height="1000">\n      <g transform="translate(50,50)">\n        <Reagram\n          data={parseDot(unix_family_tree)[0]}\n          nodeRender={nodeRender}\n          edgeRender={edgeRender}\n          nodesep={10}\n          nodeWidth={80}\n          nodeHeight={40}\n        />\n      </g>\n    </svg>\n  );\n}'}},dot_stories_UnixFamilyTree.parameters)},496:function(module,exports,__webpack_require__){__webpack_require__(497),__webpack_require__(668),__webpack_require__(669),__webpack_require__(834),__webpack_require__(1053),__webpack_require__(1086),__webpack_require__(1094),__webpack_require__(1106),__webpack_require__(1108),__webpack_require__(1113),__webpack_require__(1115),module.exports=__webpack_require__(1119)},571:function(module,exports){},669:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(366)}},[[496,1,2]]]);
//# sourceMappingURL=main.03f5f3cad14e4b206e5b.bundle.js.map