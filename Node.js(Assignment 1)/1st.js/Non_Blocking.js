function addAsync(a, b, callback) {
    setTimeout(() => {
      callback(a + b);
    }, 1000);  
  }
  
  function multiplyAsync(a, b, callback) {
    setTimeout(() => {
      callback(a * b);
    }, 500); 
  }
  
  console.log("Start Non-Blocking Code");
  
  addAsync(5, 10, (result1) => {
    console.log("Result of addition: " + result1);
    
    multiplyAsync(3, 4, (result2) => {
      console.log("Result of multiplication: " + result2);
    });
  });
  
  console.log("End Non-Blocking Code (Operations still running asynchronously)");