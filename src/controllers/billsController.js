const { getBillsByIdDb } = require('../model/billsModel');
const { failResponce, successResponce } = require('../utils/dbHelpers');

async function getBillsById(req, res) {
  const group_id = req.params.id;
  const foundSingleUser = await getBillsByIdDb(group_id);
  return foundSingleUser === false
    ? failResponce(res)
    : successResponce(res, foundSingleUser);
}

module.exports = {
  getBillsById,
};
