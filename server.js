//Require express. Otherwise, routes won’t work.
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
// Allows to use the files located in the `public` directory
app.use(express.static('public'));
// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set handlebars
const exphbs = require('express-handlebars');
// Defaults to `main` file located inside the views/layouts directory
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Import routes and give the server access to them
const routes = require("./controllers/burgers_controller.js");
app.use(routes);
// Start our server so that it can begin listening to client requests
app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});