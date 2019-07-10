const boxen = require('boxen');
const dotenv =
  process.env.ENVIRON !== 'HEROKU'
    ? require('dotenv').config()
    : { parsed: {} };

if (dotenv.error) {
  console.error(
    `Welcome to MirrorOS!\n
You have not configured your installation yet, please run the setup utility by executing:\n` +
      boxen('$   yarn setup', {
        padding: 1,
        margin: 1,
        borderStyle: 'double'
      })
  );
  process.exit();
}

const PORT = 3001;
const ENVIRON = process.env.ENVIRON || dotenv.parsed.ENVIRON || 'DEV';
const MONGODB_URI =
  process.env.MONGODB_URI ||
  dotenv.parsed.MONGODB_URI ||
  'mongodb://localhost/display';

module.exports = {
  ENVIRON,
  PORT,
  MONGODB_URI
};
