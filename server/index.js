const express = require('express');
const mc =  require('./controllers/messages_controller.js');

const app = express();

// parse JSON from the body
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', mc.read);
app.post('/api/messages', mc.create);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

const port = 3001;
app.listen(port, () =>{
    console.log(`listening on port ${ port }`)
})
