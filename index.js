const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db.js');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

const startServer = async () => {
    await connectDb();

    app.listen(port, () => {
        console.log(`server started at port ${port}`);
    });
};

startServer();
