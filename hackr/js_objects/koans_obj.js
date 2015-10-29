products = [
   { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
   { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
   { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
   { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
   { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
];


var productsICanEat = [];

/* solve using filter() & all() / any() */
productsICanEat =  products.filter(function (prod){
 if (prod.containsNuts === false){return prod}
}).any(function (Prod){
  for (i=0;i<Prod.ingredients.length;i++){
   if (Prod.ingredients[i] == "mushrooms") {return true}
}
});

Array.prototype.any = function (fn){
  result = [];
  for (i=0;i<this.length;i++){
  if (fn(this[i])) {return result.push(this[i])}
}
}

console.log(productsICanEat[0]);
