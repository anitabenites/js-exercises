var funcs = [], // the comma because I am defining at the same time a variable and an object!?
  object = {
    a: true,
    b: true,
    c: true
  };

for(let key in object){
  funcs.push(function(){
    console.log(key);
  });
}

funcs.forEach(function(func) {
  func();
});
