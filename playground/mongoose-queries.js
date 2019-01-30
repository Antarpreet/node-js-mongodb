const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = '5c5153c208960e093cf18d22';

if(!ObjectID.isValid(id)) {
    console.log('Id not valid!');
};

// Todo.find({
//     completed: false
// }).then(todos => {
//     if(todos.length === 0) {
//         return console.log('Id not found');
//     }
//     console.log("Todos", todos.map(item => {
//         return item._doc;
//     }));
// });

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log("Todo", todo._doc);
// });

User.findById(id).then(user => {
    if(!user) {
        return console.log('Id not found');
    }
    console.log("User", user._doc);
}).catch(err => console.log("Error"));