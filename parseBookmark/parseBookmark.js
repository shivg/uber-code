// var txt = {"title":"Nov25","date":"25/11/2015","tabs":[{"title":"Code School - Try jQuery","url":"http://try.jquery.com/levels/1/sections/2","win":"5417"},{"title":"Bookstrap","url":"http://bookstrap.hackreactor.com/curriculum/prep-work-schedule#introduction","win":"5417"},{"title":"Code School - Discover DevTools","url":"http://discover-devtools.codeschool.com/chapters/2/challenges/1","win":"5417"},{"title":"Debugging Javascript - James Lai - Frontiers of Development","url":"https://web.archive.org/web/20140101092752/http://jameslaicreative.com/debugging-javascript","win":"5417"},{"title":"Code School - Try jQuery","url":"http://try.jquery.com/","win":"5417"},{"title":"Bookstrap","url":"http://bookstrap.hackreactor.com/curriculum/twittler","win":"5417"},{"title":"fabiensanglard.net/learning_legendary_hardware/whymb.2010.06.07c.pdf","url":"http://fabiensanglard.net/learning_legendary_hardware/whymb.2010.06.07c.pdf","win":"5417"},{"title":"About Fabien Sanglard","url":"http://fabiensanglard.net/about/","win":"5417"},{"title":"* random | Hack Reactor 38 Slack","url":"https://hr38.slack.com/messages/random/team/","win":"5417"},{"title":"shivg’s gists","url":"https://gist.github.com/shivg","win":"5417"},{"title":"Managing a 100-percent renewable grid, without batteries | Ars Technica","url":"http://arstechnica.com/science/2015/11/managing-a-100-percent-renewable-grid-without-batteries/","win":"5417"},{"title":"How evolution took us from Neolithic farmers to modern Europeans | Ars Technica","url":"http://arstechnica.com/science/2015/11/how-evolution-took-us-from-neolithic-farmers-to-modern-europeans/","win":"5417"},{"title":"New study spills doubt on some fingerprick blood tests | Ars Technica","url":"http://arstechnica.com/science/2015/11/new-study-spills-doubt-on-some-fingerprick-blood-tests/","win":"5417"},{"title":"WarGames for real: How one 1983 exercise nearly triggered WWIII | Ars Technica","url":"http://arstechnica.com/information-technology/2015/11/wargames-for-real-how-one-1983-exercise-nearly-triggered-wwiii/","win":"5417"},{"title":"Magnetic protein may provide animals with navigation information | Ars Technica","url":"http://arstechnica.com/science/2015/11/magnetic-protein-may-provide-animals-with-navigation-information/","win":"5417"}],"created":1448480616950}

// txt = JSON.stringify(txt);
// var obj = (JSON.parse(txt));

// console.log(obj.tabs)
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
 }
var fs = require('fs')
  , filename = process.argv[2], toWrite;

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('Reading file, OK: ' + filename);
  toWrite = makeBookmarkPage(data);
  fs.writeFile(filename+"-bookmarks.html", toWrite , function(err) {
  if (err)
    console.log("Failed to write file:", err);
  else
    console.log("\nFile written:  "+ filename + "-bookmarks.html");
});
});




function makeBookmarkPage(txt){
  var obj = (JSON.parse(txt));
  var urls = obj.tabs.reduce(function (p,n) {
  	return p+"<a href='"+n.url+"'>"+n.url+"</a><p>\n";
  },"<p>Bookmarks\n</p><br>");
  return urls;
}




