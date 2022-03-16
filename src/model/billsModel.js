const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function getBillsByIdDb(group_id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = 'SELECT * FROM bills WHERE group_id = ?';
    const [rows] = await conn.execute(sql, [group_id]);
    await conn.close();
    return rows;
  } catch (error) {
    console.log('getBillsByIdDb ===', error);
    return false;
  }
}
module.exports = {
  getBillsByIdDb,
};
