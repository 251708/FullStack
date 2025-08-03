/*
const express = require('express')
const app = express()
const port = 4000
const mongoDB = require("./db")
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  
// 2nd time get problem in connecting
const express = require('express');
const mongoDB = require('./db');
const app = express();
const port = 5000;
const cors = require('cors');

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  next();
})
// Call the MongoDB connection function
mongoDB();

app.use(cors());
app.use(express.json())
app.use('/api' , require("./Routes/CreateUser"));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



*/


const express = require('express');
const mongoDB = require('./db');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS for Vite frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect to MongoDB
mongoDB();

app.use(express.json());

// Routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
