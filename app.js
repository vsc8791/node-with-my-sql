require('dotenv').config();
const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "This is REST APIs Working"
    });
});


const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
    console.log("Server is running at port number :" + port)
}); 