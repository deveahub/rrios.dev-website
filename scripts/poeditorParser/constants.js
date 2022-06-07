const path = require('path');

const LOCALES_PATH = path.resolve(__dirname, '..', '..', 'source-locales');
const LOCALES_OUTPUT_PATH = path.resolve(
  __dirname,
  '..',
  '..',
  'public',
  'locales'
);
const REGEX_LOCALE_FROM_FILE_PATH = /\/(\w+)\.json$/;

module.exports = {
  LOCALES_PATH,
  LOCALES_OUTPUT_PATH,
  REGEX_LOCALE_FROM_FILE_PATH,
};
