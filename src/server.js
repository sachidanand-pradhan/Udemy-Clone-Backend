const app = require('./index');

const connect = require("./configs/db");

const port = 2345;

app.listen(port, async function () {
    await connect();
    console.log(`server is running at http://localhost:${port}`);
})