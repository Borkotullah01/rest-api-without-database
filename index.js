const app = require("./app");
const port = 4000;


app.listen(port,()=>{
    console.log(`Your server is running at http://localhost:${port}`);
});