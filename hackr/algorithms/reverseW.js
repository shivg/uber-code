
function reverseWords(inputString) {

  function reverser(sentence){
    var start = 0;
    var end = sentence.length;
    sentence = sentence.split("");

    while(start < end){
      var temp = sentence[start];
      sentence[start] = sentence[end];
      sentence[end] = temp;
      start++;
      end--;
    }
    return sentence.join("");
  }

  var reversedSentence = reverser(inputString);
  return reversedSentence.split(" ").map(word => reverser(word)).join(" ")
}

console.log(reverseWords("tomorrow return will I"));