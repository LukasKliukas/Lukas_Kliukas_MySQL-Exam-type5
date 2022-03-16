const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const { groupsRoutes } = require('./routes/groupsRoutes');

// const mysql = require('mysql2/promise');
// const dbConfig = require('./dbConfig');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/auth/', authRoutes);
app.use('/', groupsRoutes);
// app.use('/accounts/', authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
