const express = require('express')
const http = require('http')
const app = express();



app.get('/', function (req, res) {
    res.send('Hello World')
})


http.createServer(app.listen(4002));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

require('./routes/employee.routes.js')(app);

