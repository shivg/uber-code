var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  // Your code here.
  try {
    if (box.locked=true){box.unlock();}
    else {if (!(box.locked=true)){
      try {
          body();
      } catch (e){throw new Error(e);}
      finally {box.unlock();
              }
    }

         }
    body();
  } catch (e){
  throw new Error(e);
  } finally {box.lock();}

}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
box.unlock();
console.log(box.content);
