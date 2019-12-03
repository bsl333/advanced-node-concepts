process.env.UV_THREADPOOL_SIZE = 2;
const crypto = require("crypto");

const start = Date.now();
const iterations = 165000;
console.log(`threadpool size ${process.env.UV_THREADPOOL_SIZE}`);
crypto.pbkdf2("a", "b", iterations, 512, "sha512", () => {
  console.log("1: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", iterations, 512, "sha512", () => {
  console.log("2: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", iterations, 512, "sha512", () => {
  console.log("3: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", iterations, 512, "sha512", () => {
  console.log("4: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", iterations, 512, "sha512", () => {
  console.log("5: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", iterations, 512, "sha512", () => {
  console.log("6: ", Date.now() - start);
});
