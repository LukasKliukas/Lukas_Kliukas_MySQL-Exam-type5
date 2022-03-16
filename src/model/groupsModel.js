const mysql = require('mysql2/promise');
const dbConfig = require('../dbConfig');

async function getGroupsDb() {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = 'SELECT * FROM groups';
    const [rows] = await conn.execute(sql);
    await conn.close();
    return rows;
  } catch (error) {
    console.log('getGroupsDb ===', error);
    return false;
  }
}

module.exports = {
  getGroupsDb,
};
