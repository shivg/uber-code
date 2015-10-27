var s = ["4","A","B","C","D","A-B","B-D","B-C","C-D"]

function ShortestPath(strArr) {

  var nodes =  Nodes(strArr);
  var paths = strArr.slice(Number(strArr[0])+1);
 var pathArr = [];
for (var j = 0;j<paths;j++) {
  var x= paths.split("-"); var y= [paths[0],paths[2]]
  pathArr.push(y);
}
  var start = nodes[0], end = nodes[nodes.length-1];
  function search(nodes,pA){
    for (var i = 0;i<pA.length;i++){
    var path = pA[i];
    if (path[0] == start && path[1] == end || path[0] == end && path[1] == start){return path}
  }
  function sePath(pA,history){
    if (history[0] == start && history[history.length-1] == end){return history}

  }


  }
  return nodes.concat(paths);

}


function Nodes(strA){
  return strA.slice(1, Number(strA[0])+1);
}

console.log(ShortestPath(s))
