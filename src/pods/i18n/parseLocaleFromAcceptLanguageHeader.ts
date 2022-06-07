import { IncomingHttpHeaders } from 'http';

import { AVAILABLES_LOCALES, DEFAULT_LOCALE } from './constants';

const parseLocaleFromAcceptLanguageHeader = (headers: IncomingHttpHeaders) => {
  const rawLocale = headers['accept-language']?.split(',')?.[0];
  if (!rawLocale) return DEFAULT_LOCALE;
  const parsedRawLocale = rawLocale.replace(/-.+/, '');
  return AVAILABLES_LOCALES.includes(
    parsedRawLocale as typeof AVAILABLES_LOCALES[number]
  )
    ? parsedRawLocale
    : DEFAULT_LOCALE;
};

export default parseLocaleFromAcceptLanguageHeader;
