import express = require("express");

const app: express.Application = express();
const PORT: any = process.env.PORT || 4242;

app.get('/', function(req, res) {
    res.json({'success': true}).status(200);
});

app.listen(PORT, function() {
    console.log(`Service listening on port ${PORT}`);
})