const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/',(req,res) => {
    res.send("hii i am home page");
});


app.listen(4000, () => `Server running on port 4000 🔥`);