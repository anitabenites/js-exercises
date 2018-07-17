var funcs = [];

for (let i = 0; i < 10; i++){
  funcs.push(function(){
    console.log(i);
  });
}

funcs.forEach(function(func){ // func is the same thing as saying element,. it acts as a placeholder.
  func();
});

// need explanation!! how does it work!
