const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

    db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

    // db.close();
});