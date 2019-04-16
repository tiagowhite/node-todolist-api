const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');

/*mongo instance connection*/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/TodoDb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);
console.log('Todo List RESTful API server started on: ' + port);
