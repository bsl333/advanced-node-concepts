const https = require("https");

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

getGoogleHomepage();
getGoogleHomepage();
getGoogleHomepage();
getGoogleHomepage();
getGoogleHomepage();
getGoogleHomepage();
getGoogleHomepage();
getGoogleHomepage();
getGoogleHomepage();
