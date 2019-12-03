process.env.UV_THREADPOOL_SIZE = 2;
const https = require("https");
const crypto = require("crypto");

const start = Date.now();

function getGoogleHomepage() {
  https
    .request("https://www.google.com", res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  const iterations = 165000;
  console.log(`threadpool size ${process.env.UV_THREADPOOL_SIZE}`);
  crypto.pbkdf2("a", "b", iterations, 512, "sha512", () => {
    console.log("hash: ", Date.now() - start);
  });
}
