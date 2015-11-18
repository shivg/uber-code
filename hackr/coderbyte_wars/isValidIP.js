//var x = /^\d | [1-9]\d{1,2}.\d{0,1}|[1-9]\d{1,2}.\d{0,1}|[1-9]\d{1,2}.\d{0,1}|[1-9]\d{1,2}$/


//var y = /^(\d|[1,2]{1}\d{2}|[1-9]{1}\d).(\d|[1-2]{1}\d{2}|[1-9]{1}\d).(\d|[1-2]{1}\d{2}|[1-9]{1}\d).(\d|[1-2]{1}\d{2}|[1-9]{1}\d)$/

function isValidIP(str) {
  var validFlag=true;
  var regstr = str.split(".")
  if (regstr.length != 4 ) {
    validFlag= false;
  }else{
    for (var i=0;i<4;i++){
      if (regstr[i].length > 1){
        if (regstr[i][0] == '0') validFlag= false;
        if (Number(regstr[i]) > 255) validFlag= false;
      } else if (regstr[i].length == 0) {
        validFlag= false;
      }else if (regstr[i].length ==1){
        if (!/\d/.test(regstr[i])) validFlag= false;
      }
    }
  }
  console.log("inValidFlag "+validFlag);
  return validFlag;
}


//var y = /^[1-9]\d{0,1}[1-9].[1-9]\d{0,1}[1-9].[1-9]\d{0,1}[1-9].[1-9]\d{0,1}[1-9]$/i.teststr ||
//  /^[1-9].[1-9].[1-9].[1-9]$/

console.log([ "023.56.78.90","123.456.78.90","123.045.067.089", "123.45.67.89", "1.2.3.4", "1.2.3", "1.2.3.4.5"].forEach(isValidIP))


///(\d|[1,2]{1}[0-5]{1}[]|[1-9]{1}\d)/
