const express = require('express');
const groupController = require('../../src/controllers/groupsController');

const groupsRoutes = express.Router();

groupsRoutes.get('/groups', groupController.getGroups);
groupsRoutes.post('/groups', groupController.createGroup);

module.exports = {
  groupsRoutes,
};
