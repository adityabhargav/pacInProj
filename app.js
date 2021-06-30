var app = require("express")();
var http = require("http").Server(app);

app.get("/pac_iOS", function (req, res) {
  res.download(
    "res/iOS/proxy.pac",
    "proxy.pac"
  );
});


app.get("/pac_android", function (req, res) {
  res.download(
    "res/android/proxy.pac",
    "proxy.pac"
  );
});

http.listen(3000, function () {
  console.log("listening on port 3000");
});
