import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { setCookie } from 'nookies';
import { ChangeEvent } from 'react';

import Select from '@/components/Select';

import Fieldset, { Label } from './Fieldset';

const LOCALES_OPTIONS = {
  es: 'common:toolbarSettingsLocalesSpanish',
  en: 'common:toolbarSettingsLocalesEnglish',
};

const LocaleSelector = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const onChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    setCookie(null, 'user-lng', e.target.value, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    router.push(
      {
        query: router.query,
        pathname: router.pathname,
      },
      undefined,
      { locale: e.target.value }
    );
  };
  return (
    <Fieldset direction="row" gap="2">
      <Label>{t('common:toolbarSettingsLanguage')}</Label>
      <Select
        options={LOCALES_OPTIONS}
        value={i18n.language as keyof typeof LOCALES_OPTIONS}
        onChange={onChangeLanguage}
      />
    </Fieldset>
  );
};

export default LocaleSelector;
