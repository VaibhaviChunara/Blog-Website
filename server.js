const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Your MongoDB connection string
mongoose.connect('mongodb://localhost:27017/Blog-Website', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define routes
app.use('/articles', require('./routes/articles'));

app.get('/', (req, res) => {
  res.redirect('/articles');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
