function cCreator(arrayCeleb){
  var i, uniqueID = 100, theCelebs = {};
  for (i=0;i<arrayCeleb.length;i++){
    arrayCeleb[i]["id"] = function (j){
      return function (){
        return uniqueID+j
      }()
    }(i)
  }
  return arrayCeleb;
}

var Celeb = [{name:"shiv", id:0},{name:"sharmi", id:0},{name:"kamal", id:0}];

var withID = cCreator(Celeb);

console.log(withID[2]["id"]);
