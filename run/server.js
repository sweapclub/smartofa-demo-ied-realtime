const express = require("express");
// const path = require('path');
const http = require("http");
const cors = require('cors');

const app = express();

app.use(cors());

app.use(function (err, req, res, next) {
    ``;
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.use(express.static("dist/front-end"));
app.get("/*", (req, res) => {
    console.log("Client access to Demo webpage.")
    res.sendFile("dist/front-end/index.html", { root: __dirname });
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || "3000";
app.set("port", port);



/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, "0.0.0.0", () =>
    console.log(`API running on localhost:${port}`)
);
