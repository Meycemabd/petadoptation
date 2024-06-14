const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const petRoutes = require('./routes/petRoutes');
const adopterRoutes = require('./routes/adopterRoutes');
const swaggerSetup = require('./swagger');

dotenv.config(); 

const port = process.env.PORT || 4001;
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  app.use('/api', petRoutes);
  app.use('/api', adopterRoutes);

  swaggerSetup(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;