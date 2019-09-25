const newrelic = require("newrelic");

exports.start = function() {
  const newrelic_browser = newrelic.getBrowserTimingHeader(); 
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    ${newrelic_browser}
    <title>MERN with New Relic - Boilerplate</title>
  </head>
  <body>  
    <div id="root"></div>
    <script type="text/javascript" src="main.js"></script>
  </body>
  </html>`;
}
