var friends = new Object()

friends.bill = {}

friends.steve = {}

friends.sharmi = {}

friends.bill.firstName = "Bill"

friends.steve.firstName = "Steve"

friends.sharmi.firstName = "Smie"

friends.bill.lastName = "Gator";
friends.steve.lastName = "jobby"
friends.sharmi.lastName = "creetur"

friends.bill.number = 1212;

friends.steve.number = 1313;

friends.sharmi.number = 1414;

friends.bill.address =  ['One Microsoft Way','Redmond','WA','98052']

friends.steve.address = ['one','cupertinoe', 'way']

friends.sharmi.address = ['shiva','guru','way']

function list(obj){
    for (var prop in obj){
        console.log(prop)
        }
    }

function search(name){
    for (var key in friends){
        if (friends[key]["firstName"] == name){
            console.log(" First Name: "+friends[key].firstName+ "\n","Last Name :",
            friends[key]["lastName"]+"\n","Phone     :",
            friends[key]["number"]+"\n","Address   :",
            friends[key]["address"]+"\n");
            }
            return friends[key]
        }
    }

    (search("Bill"))

    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;

      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    var aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

//    console.log(aPerson.getLastName())


Array.prototype.any = function (fn){
  result = [];
  for (i=0;i<this.length;i++){
  if (fn(this[i])) {return result.push(this[i])}
}
}
Array.prototype.reject = function (callback){
  var result = [];
  for (i=0;i<this.length;i++){
    if (!callback(this[i])) result.push(this[i])
  }
  return result;
}
    var products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ]

    var productsICanEat = [];

    /* solve using filter() & all() / any() */
var prods = products.reject(function (pizza){
  return pizza.ingredients.indexOf("mushrooms")  >= 0 || pizza.containsNuts == true
});


  console.log(prods);

  //var productsICanEat = _.reject(products, function(product){ return _.include(product.ingredients, "mushrooms") || product.containsNuts === true});

//  console.log(productsICanEat);
