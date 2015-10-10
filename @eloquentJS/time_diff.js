//10:10am-8:15pm
//10:10pm-8:15am

function CountingMinutesI(str) {

  // code goes here
var match = (/(\d+):(\d+)(\w+)-(\d+):(\d+)(\w+)/ig).exec(str);
 var oneDay = match[3],
     twoDay = match[6],
     oneH = Number(match[1]),
     oneMin = Number(match[2]),
     twoH = Number(match[4]),
     twoMin = Number(match[5]),
     foundHour,
     foundMin,
     finalMin;
  if (oneDay == twoDay && oneH < twoH){
    foundHour = twoH - oneH;
    foundMin = (twoMin >= oneMin) ? (twoMin - oneMin) : ((60 - oneMin) + (twoMin));
  } else  if (oneDay == twoDay && oneH > twoH){
    foundHour = (oneMin > 0) ? ((12 - oneH) + 12 + twoH) -1 : ((12 - oneH) + 12 + twoH) -1;
    foundMin = (oneMin > 0) ? (60-oneMin) + (twoMin) : (twoMin);
  } else if (oneDay !== twoDay){
    foundHour = (oneMin > 0) ? ((12 -oneH) + twoH) -1 : ((12 -oneH) + twoH);
    foundMin = (oneMin > 0) ? (60-oneMin)+twoMin : twoMin;
  } else if (oneDay == twoDay && oneH == twoH) {
    foundMin = (oneMin > twoMin) ? (60 - oneMin) + twoMin:twoMin-oneMin;
    foundHour = (oneMin > twoMin) ? (12-oneH)-1 +12 + twoH : 0;
  }
  finalMin = (foundHour * 60) + (foundMin);

  return finalMin;

}
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
//CountingMinutesI(readline());


console.log(CountingMinutesI("2:00pm-3:00pm"));

// + twoMin + (60*twoH)+ (((12-oneH)-1)*60)
