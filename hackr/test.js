var actionCelebs = [];
actionCelebs.push({name:"Stallone", idVal:0});
actionCelebs.push({name:"Cruise", idVal:1});
actionCelebs.push({name:"Willis", idVal:3});
function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  {
          // the j parametric variable is the i passed in on invocation of this IIFE​
            return function () {
                return uniqueID + j;
                // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array​
            } ();
            // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.​
        } (i); // immediately invoke the function passing the i variable as a parameter​
    }
    return theCelebrities;
}

​var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
​
​var stalloneID = createIdForActionCelebs [0];
 console.log(stalloneID.id); // 100​
​
​var cruiseID = createIdForActionCelebs [1]; 
console.log(cruiseID.id); // 101
