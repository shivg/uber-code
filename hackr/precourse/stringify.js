
var stringifyJSON = function(obj) {
  var parseArray, parseObj;

  function delegate (token) {
    if (Array.isArray(token)) {
      return parseArray(token);
    } else if (token === null) {
     return token + "";
     }  else {
        var toDelegate = {
          "boolean" : function (token) {
           return token + "";
          },
          "number" : function (number) {
           return token.toString();
          },
          "string" : function (token) {
           return '"'+token+'"';
          },
          "object" : function (token) {
           return parseObj(token);
          },
          "undefined" : function (token) {
           return token+"";
          }
       };
       if (toDelegate[typeof token]) {
           return toDelegate[typeof token](token);
       }
     }
  }

  parseArray = function (token) {
    if (Array.isArray(token)) {
      var result = [];
      token.forEach(function (item, index) {
        if (typeof item === 'number') {
          result[index] = item;
        } else result[index] = delegate(item);
      });
    }
  return "[" + result.toString() + "]";
  }

  parseObj = function (obj) {
    if (Object.keys(obj).length === 0) {
      return "{}"
    }
    var result = []
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
          continue;
        } else result.push( '"' + key + '"' + ":" +delegate(obj[key]) );
          }
      }
    return "{" + result.toString() + "}";
  };

return delegate(obj);

};


var y = ('{"A" : 1},' )
var json = "["
var r= 0
while (r<=200000)
{
  r == 200000 ? y = '{"A" : 1}]' : void 0
  json += y;
  r++;
}
// z += "}"

json = JSON.parse(json);


var t = Date.now();
(JSON.stringify(json));
var t2 = Date.now() - t;

var s = Date.now();
(stringifyJSON(json));
var s2 = Date.now() - s;
console.log('Time for shiv : '+ s2);
console.log('Time for inbuilt : '+ t2);




