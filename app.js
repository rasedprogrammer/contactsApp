const express = require("express");
const morgan = require("morgan");
const contactRoutes = require("./contactRoutes");

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/contacts", contactRoutes);

app.get("*", (req, res) => {
	res.send("<h1>Please Use The Correct Routes</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
	console.log(`Server is running Port ${PORT}`);
});

// Route Handleing
//Controller Needed
//Contact Object File Needed
