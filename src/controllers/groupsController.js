const { getGroupsDb } = require('../model/groupsModel');
const { failResponce, successResponce } = require('../utils/dbHelpers');

async function getGroups(req, res) {
  const foundGroups = await getGroupsDb();
  return foundGroups === false
    ? failResponce(res)
    : successResponce(res, foundGroups);
}

module.exports = {
  getGroups,
};
