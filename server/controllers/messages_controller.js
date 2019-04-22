const messages = [];
id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages)
    },
    
    create: (req, res) => {
        let message  = {
            id: id,
            text: req.body.text,
            time: req.body.time
        };
        messages.push(message);
        id++;
        res.status(200).send(messages);
    },

    update: (req, res) => {
        for(var i =0; i < messages.length; i++){
            if(messages[i].id == req.params.id){
                messages[i] = {
                    id: messages[i].id,
                    text: req.body.text || messages[i].text,
                    time: messages[i].time
                }
            }
        }
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        console.log(messages);
        for(var i = 0; i < messages.length; i++){
            if(messages[i].id == req.params.id){
                messages.splice(i, 1);
            }
        }
        console.log(messages);
        res.status(200).send(messages);
    },
}