const app = require('./index');

require ('dotenv').config();


const connect = require("./configs/db");

const port = process.env.PORT || 2345;

app.listen(port, async function () {
    await connect();
    console.log(`server is running at http://localhost:${port}`);
})