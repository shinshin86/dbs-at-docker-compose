const accessControlAllow = (req, res, next) => {
  // Allow to connect : localhost:3000
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  next();
}

module.exports = accessControlAllow

