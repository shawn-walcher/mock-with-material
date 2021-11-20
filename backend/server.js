const express = require('express');
const app = express();
const path = require('path');
const { readFile } = require('fs/promises');

const projects = require('./api/v1/routes/projects');
const { logRegister } = require('./middleware/logRegister');

const TIMEOUT_MS = process.env.TIMEOUT_MS || 240000;
const PORT = process.env.API_PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  logRegister(req, res);
  next();
});

app.use('/v1/health', (req, res) => res.status(200).json({ message: 'Server is OK' }));
app.use('/v1/projects', projects);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', async (req, res) => {
    res.send(await readFile('./build/index.html', 'utf8').catch((err) => console.log(err)));
  });
}

app.use((req, res, next) => {
  const err = new Error('Resource Not Found!');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(`${req.method} ${err.status} ${req.url} ${err.message}`);
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)).timeout = TIMEOUT_MS;
