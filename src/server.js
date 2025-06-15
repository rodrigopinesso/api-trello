const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const taskRoutes = require('./routes/task.routes');
app.use('/tasks', taskRoutes);

// rota teste
app.get('/', (req, res) => {
  res.send('API Task rodando...');
});

const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('mongo conectou');
    app.listen(PORT, () => console.log(`servidor rodando na ${PORT}`));
  })
  .catch((err) => console.error('mongo nao conectou:', err));