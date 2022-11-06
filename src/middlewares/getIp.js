const requestIp = require('request-ip');

// inside middleware handler
const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    next();
};


module.exports = ipMiddleware

const logDao = require("../models/logDao");

const getLogByGender = async (gender) => {
  const result = await logDao.getLogByGender(gender);

  return result.length;
};

const getLogByAge = async () => {
  const result = await logDao.getLogByAge();

  return result;
};

const getLogByTime = async (time) => {
  const result = await logDao.getLogByTime(time);

  console.log(result);
  return result;
};

module.exports = {
  getLogByGender,
  getLogByAge,
  getLogByTime,
};
