const express = require('express');
const groupController = require('../../src/controllers/groupsController');

const groupsRoutes = express.Router();

groupsRoutes.get('/groups', groupController.getGroups);

module.exports = {
  groupsRoutes,
};
