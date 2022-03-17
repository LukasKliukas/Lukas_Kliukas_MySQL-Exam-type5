const express = require('express');
const billsController = require('../../src/controllers/billsController');

const billsRoutes = express.Router();

billsRoutes.get('/bills/:id', billsController.getBillsById);
billsRoutes.post('/bills', billsController.createBill);

module.exports = {
  billsRoutes,
};
