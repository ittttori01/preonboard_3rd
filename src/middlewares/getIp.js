const requestIp = require('request-ip');

const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req);
    res.locals.ip = clientIp;
    next();
};

module.exports = {ipMiddleware}
