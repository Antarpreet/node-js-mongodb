const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c51216b08960e093cf186a3')
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then(res => {
        console.log(res);
    })

    db.collection('Users').findOneAndUpdate({
        name: 'Jen'
    }, {
        $set: {
            name: 'Antarpreet'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(res => {
        console.log(res);
    })

    // db.close();
});