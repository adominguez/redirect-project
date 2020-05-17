const express = require("express");
const route = require('./routes/routes');

app = express();
var PORT = process.env.PORT || 3129;

/**
 * Get Printers
 */
route.routes(app);

// Server port listening
app.listen(PORT, function () {
  console.log('Express served in the port ' + PORT)
  console.log('http://localhost:' + PORT)
});

