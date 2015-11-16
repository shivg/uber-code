function guessGifts(wishlist, presents) {
  var result= [];
  wishlist.forEach(function (wish){
  presents.forEach(function (p)  {
   if (p.size == wish.size && p.clatters == wish.clatters && p.weight == wish.weight){
      result.push(wish.name);
    }
  });
});
return result;
}


var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

["Toy Car", "Card Game"]

console.log(guessGifts(wishlist,presents));
