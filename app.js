var app = require("express")();
var http = require("http").Server(app);
var ip = require("ip");

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

app.get("/bm_cer_download_ios", function (req, res) {
  res.download(
    "res/iOS/bm.pem",
    "bm.pem"
  );
});

app.get("/pacForIos", function (req, res) {
  res
    .status(200)
    .attachment(`res/sample.pac`)
    .send(
      `function FindProxyForURL(url, host) { \r\n if (dnsDomainIs(host, "adc-ad-assets.adtilt.com") || dnsDomainIs(host, "c4d-cdn.adcolony.com") || dnsDomainIs(host, "code.jquery.com") || dnsDomainIs(host, "content.tapjoy.com") || dnsDomainIs(host, "networksdk.ssacdn.com") || dnsDomainIs(host, "s.mzstatic.com") || dnsDomainIs(host, ".apple.com") || dnsDomainIs(host, ".icloud.com") || dnsDomainIs(host, ".cdn-apple.com")) \r\n return "DIRECT"; \r\n return "PROXY ${req.query.host}:8082"; \r\n }`
    );
});

http.listen(3000, function () {
  console.log(`listening on port 3000 with host ip ${ip.address()} so the base endpoint will be ---> http://${ip.address()}:3000`);
});
