// Starting point of our node.js application

const app = require('./app'); // app.js imported
const db = require('./config/db'); // db.js imported
const UserModel = require('./model/user.model');
const ToDoModel = require('./model/todo.model');
const port = 3000;

app.get('/',(req, res)=>{
    res.send("Hello World??");
});

app.listen(port, ()=> {
    console.log(`Server Listening on Port http://localhost:${port}`);
});