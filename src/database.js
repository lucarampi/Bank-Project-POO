import mongooseBank from 'mongoose';
import mongooseUserDB from 'mongoose';

mongooseUserDB.connect(credentials.db.mongoDB.host, { useNewUrlParser: true, useUnifiedTopology: true });

 const UserDB = mongooseUserDB.model('users', {
    name: String,
    cpf: String,
    user: String,
    password: String,
    balance: Number,
    agency: String,
    account: String
});
