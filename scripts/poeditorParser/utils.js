const {
    readFileSync,
    readdirSync,
    mkdirSync,
    writeFileSync,
    existsSync,
    rmSync,
  } = require('fs');
  const { exec } = require('child_process');
  const path = require('path');
  const { pipe } = require('remeda');
  
  const {
    LOCALES_PATH,
    LOCALES_OUTPUT_PATH,
    REGEX_LOCALE_FROM_FILE_PATH,
  } = require('./constants');
  
  const prettifyFile = (locale) =>
    exec(`yarn prettier --write ${LOCALES_OUTPUT_PATH}/${locale}`);
  
  const getLocalesPath = () =>
    readdirSync(LOCALES_PATH).map(
      (localeFile) => `${LOCALES_PATH}/${localeFile}`
    );
  
  const readLocaleFile = (filePath) => JSON.parse(readFileSync(filePath));
  
  const formatPluralObject = (key, transObj) => ({
    ...('one' in transObj && { [`${key}_one`]: transObj.one }),
    ...('other' in transObj && { [`${key}_other`]: transObj.other }),
  });
  
  const formatPlurals = (file) =>
    Object.keys(file).reduce((acc, key) => {
      const ns = file[key];
  
      const formatedNs = Object.keys(ns).reduce((accNs, transKey) => {
        const element = ns[transKey];
        return {
          ...accNs,
          ...(typeof element === 'object'
            ? formatPluralObject(transKey, element)
            : { [transKey]: element }),
        };
      }, {});
  
      return {
        ...acc,
        [key]: formatedNs,
      };
    }, {});
  
  const formatLocaleFile = (file) => pipe(file, formatPlurals);
  
  const createDirIfNotExists = (dirPath) => {
    const exists = existsSync(dirPath);
    if (exists) {
      rmSync(dirPath, { force: true, recursive: true });
    }
    mkdirSync(dirPath, { force: true, recursive: true });
  };
  
  const getOutputLocaleDir = (filePath) =>
    filePath.match(REGEX_LOCALE_FROM_FILE_PATH)[1];
  
  const writeLocaleFiles = (filePath, file) => {
    const locale = getOutputLocaleDir(filePath);
    const properPath = `${LOCALES_OUTPUT_PATH}/${locale}`;
    createDirIfNotExists(properPath);
  
    Object.keys(file).forEach((ns) => {
      writeFileSync(`${properPath}/${ns}.json`, JSON.stringify(file[ns]));
    });
  
    prettifyFile(locale);
  };
  
  module.exports = {
    writeLocaleFiles,
    formatLocaleFile,
    getLocalesPath,
    readLocaleFile,
  };
  