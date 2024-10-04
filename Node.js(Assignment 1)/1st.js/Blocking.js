//(Synchronous Blocking Arithmetic in Node.js):

function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  console.log("Start Blocking Code");
  
  let result1 = add(5, 10);  
  console.log("Result of addition: " + result1);
  
  let result2 = multiply(3, 4);  
  console.log("Result of multiplication: " + result2);
  
  console.log("End Blocking Code");
  
