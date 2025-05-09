const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/productivity_extension', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Placeholder test route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
