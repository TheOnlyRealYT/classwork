const express = require("express")

var app = express();
const PORT = 3000;
app.listen(PORT, "localhost", ()=>{
    console.log(`Server running on localhost:${PORT}`);
})