<html>
  <head>
  <title>Météo</title>
    <script>
      function callMeteo():
      {
        const http = require("https");

        const options = {
          "method": "GET",
          "hostname": "community-open-weather-map.p.rapidapi.com",
          "port": null,
          "path": "/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml",
          "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "76365ce905msh74b1f18ab4d74bdp18eb77jsnfe25b1f762c5",
            "useQueryString": true
          }
        };

        const req = http.request(options, function (res)
        {
          const chunks = [];

          res.on("data", function (chunk) {
            chunks.push(chunk);
          });

          res.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString());
          });
        });
        document.write("Check 2");
        req.end();
        
      }
    </script>
  </head>
  <body>
  <h1>Ceci est un test</h1>
    <script>document.write("Check 1");
    callMeteo();
    document.write("Check 3");</script>
  </body>
</html>
