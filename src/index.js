const mongoose = require("mongoose");
const server = require("./app");
const config = require("./config/config");

mongoose.connect(config.mongoose.url, config.mongoose.options)
    .then(() => {
        console.log('Connected to Mongodb')
    }).catch((err) => {
        console.log(`MongoDB connection error: ${err}`);
    })

server.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});

module.exports = server;
// const app = require("./app");
// const config = require("./config/config");

// let server;

