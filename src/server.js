const app = require('./index');

const connect = require("./configs/db");

const port = 2345;

app.listen(port, async function () {
    await connect();
    console.log(`server started at http://localhost:${port}`);
})