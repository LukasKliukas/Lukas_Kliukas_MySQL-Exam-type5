const { insertUser, findUserByEmail } = require('../model/authModel');
const { successResponce, failResponce } = require('../utils/dbHelpers');
const { hashPass, verifyHash, generateJwtToken } = require('../utils/helper');

async function register(req, res) {
  //gauti prisijungimo email ir pass
  const { full_name, email, password } = req.body;

  //hashinti pass
  const hashedPassword = hashPass(password);
  //irasyti i  duomenu baze su model funkcija
  const insertResult = await insertUser(full_name, email, hashedPassword);

  return insertResult === false
    ? failResponce(res)
    : successResponce(res, 'user created');
}
async function login(req, res) {
  //gauti prisijungimo email ir pass
  const { email, password } = req.body;

  const findResults = await findUserByEmail(email);
  if (findResults === false) return failResponce(res);
  if (!findResults.length)
    return failResponce(res, 'email or pass not match 1');

  const foundUserObj = findResults[0];

  if (!verifyHash(password, foundUserObj)) {
    return failResponce(res, 'email or pass not match 2');
  }

  const token = generateJwtToken(foundUserObj);
  // console.log('password match');
  successResponce(res, token);

  //hashinti pass

  //irasyti i  duomenu baze su model funkcija
  // const insertResult = await insertUser(email, hashedPassword);

  // return insertResult === false
  //   ? failResponce(res)
  //   : successResponce(res, 'user created');
}

//async fn login (req,res)
//call model fn findUserByEmail(email)
// jei user found bcrypt verify pass
//jei email and pass ok
//generate jwt token
//respond with token

module.exports = {
  register,
  login,
};
