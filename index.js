const express = require("express")

var app = express();
const PORT = 3000;
app.listen(PORT, "localhost", ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
    res.status(200)
    res.header({"Content-Type": "text/html"})
    res.end("<h1>Hello</h1>")
})