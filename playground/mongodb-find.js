const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c51126343fa209b44f5e639')
    // }).toArray().then(docs => {
    //     console.log('todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }).catch(err => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find().count().then(count => {
        console.log('todos count: ' + count);
    }).catch(err => {
        console.log('Unable to fetch todos', err);
    });

    // db.close();
});