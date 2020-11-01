//dependencies
const express = require("express");
const mongoose = require("mongoose");

//port
const PORT = process.env.PORT || 3000;

//express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connects to mongoose db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});
