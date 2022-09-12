var express = require("express");
var enforce = require("express-sslify");
var app = express();

var newBaseURL = process.env.NEW_BASE_URL || "http://example.com";
var redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);
var port = process.env.PORT || 5000;

app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.get("*", function(request, response) {
  response.redirect(redirectStatus, newBaseURL + request.url);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});