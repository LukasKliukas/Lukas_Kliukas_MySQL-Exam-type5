const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const { groupsRoutes } = require('./routes/groupsRoutes');
const { billsRoutes } = require('./routes/billsRoutes');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/auth/', authRoutes);
app.use('/', groupsRoutes);
app.use('/', billsRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
