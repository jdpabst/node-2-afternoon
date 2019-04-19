const express = require('express');

const app = express();

// parse JSON from the body
app.use(express.json());

const port = 3000;
app.listen(port, () =>{
    console.log(`listening on port ${ port }`)
})
