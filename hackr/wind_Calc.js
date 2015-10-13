function windComponents(rwy, windDirection, windSpeed) {
  var rwDir = Number((rwy.match(/^\d\d/))[0]);
  var anGle = windDirection - (rwDir*10);
  anGle =anGle>0?anGle:360-anGle;
//  var crossW = Math.ceil(Math.abs(Math.sin(anGle)*windSpeed));
//    var headW = Math.ceil(Math.abs(Math.cos(anGle)*windSpeed));
    var crossW = Math.sin(anGle)*windSpeed;
      var headW = Math.cos(anGle)*windSpeed;
  console.log(rwDir,anGle,crossW,headW);
}
//windComponents("18L",170,15);
windComponents("22", 160, 20);
