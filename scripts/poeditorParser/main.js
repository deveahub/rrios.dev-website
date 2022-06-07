const { pipe } = require('remeda');

const {
  formatLocaleFile,
  readLocaleFile,
  writeLocaleFiles,
  getLocalesPath,
} = require('./utils');

getLocalesPath().forEach((filePath) => {
  try {
    pipe(filePath, readLocaleFile, formatLocaleFile, (formatedFile) =>
      writeLocaleFiles(filePath, formatedFile)
    );

    console.log('✅', `successfully processed the file ${filePath}`);
  } catch (err) {
    console.log('❌', `An error has occurred processing the file ${filePath}`);
    console.error(err);
  }
});
