const app = require("./app.js");

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
