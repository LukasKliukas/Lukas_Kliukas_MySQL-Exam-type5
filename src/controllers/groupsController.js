const { getGroupsDb, insertGroupToDb } = require('../model/groupsModel');
const { failResponce, successResponce } = require('../utils/dbHelpers');

async function getGroups(req, res) {
  const foundGroups = await getGroupsDb();
  return foundGroups === false
    ? failResponce(res)
    : successResponce(res, foundGroups);
}

async function createGroup(req, res) {
  const newGroupData = req.body;
  //validacija
  //validateToken prideta reiksme
  // const username = req.username;
  // console.log('username ===', username);
  const { name } = newGroupData;
  // if (checkBody(newPostData)) {
  //   res.status(400).json({ error: 'Uzpildykite visus laukus' });
  //   return;
  // }
  const postAddingResult = await insertGroupToDb(newGroupData);
  if (postAddingResult === false) {
    res.status(500);
    return;
  }
  // res.json(newCarData);
  res.json(postAddingResult);
}

module.exports = {
  getGroups,
  createGroup,
};
