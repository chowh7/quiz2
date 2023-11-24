const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// const uri = process.env.ATLAS_URI;
const uri = 'mongodb+srv://myid:123@cluster0.fisfqei.mongodb.net/Exams23001?retryWrites=true&w=majority';
//const uri = 'mongodb://127.0.0.1:27017/Exams23001';
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// define Schema Class
const Schema = mongoose.Schema;



// Create a Schema object
const quizexamrecordSchema = new Schema({
  name: { type: String, required: true },
  sid: { type: String, required: true }
});

const Quizexamrecord = mongoose.model('Quizexamrecord', quizexamrecordSchema);

Quizexamrecord.create({name: 'Chow Ho Kin Wilkins', sid: '300367633'})
      .then(() => console.log('Record added!'))
      .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});