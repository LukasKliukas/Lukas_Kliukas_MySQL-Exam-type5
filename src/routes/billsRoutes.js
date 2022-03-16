const express = require('express');
const billsController = require('../../src/controllers/billsController');

const billsRoutes = express.Router();

billsRoutes.get('/bills/:id', billsController.getBillsById);

module.exports = {
  billsRoutes,
};
