function logRegister(req, res) {
  const ip = req.headers['X-FORWARDED-FOR'] || req.connection.remoteAddress;
  const start = process.hrtime();
  res.on('finish', function () {
    const durationMS = getActualRequestDurationMS(start);
    console.log(`${req.method} ${res.statusCode} ${req.originalUrl} ${res.statusMessage} -> ${ip} (${durationMS.toLocaleString()}ms)`);
  });
}

const getActualRequestDurationMS = (start) => {
  const NS_PER_SEC = 1e9; //convert to nanoseconds
  const NS_TO_MS = 1e6; //convert to milliseconds
  const hrTime = process.hrtime(start);
  return (hrTime[0] * NS_PER_SEC + hrTime[1]) / NS_TO_MS;
};

module.exports = { logRegister };
