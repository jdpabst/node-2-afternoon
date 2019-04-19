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

    },
    delete: (req, res) => {

    },
}