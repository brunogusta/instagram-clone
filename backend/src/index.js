const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb+srv://instagran-test:insta321@cluster0-gxfgl.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
);

app.use(require('./routes'));
app.listen(3333);
