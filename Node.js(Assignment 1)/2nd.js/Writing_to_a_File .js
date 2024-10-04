const fs = require('fs');

const data = "Synchronous write example.";
try {
  fs.writeFileSync('sync-example.txt', data);
  console.log("File has been written successfully (synchronous).");
} catch (err) {
  console.error("Error writing to file:", err);
}
