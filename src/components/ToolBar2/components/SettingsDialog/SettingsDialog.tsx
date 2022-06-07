import { Trans } from 'next-i18next';
import { Settings as SettingsIcon } from 'react-feather';

import Dialog, { Close } from '@/components/Dialog';
import Fieldset, { Label } from '@/components/Fieldset';
import LocaleSelector from '@/components/LocaleSelector';

import ThemeSwitch from './ThemeSwitch';

const SettingsDialog = () => (
  <Dialog
    trigger={{
      children: <SettingsIcon />,
      'aria-label': 'settings button',
      css: {
        borderRadius: '$md',
        width: 44,
        height: 44,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }}
  >
    <Close />
    <Fieldset direction="row" gap="2">
      <Label>
        <Trans i18nKey="common:toolbarSettingsDarkMode" />
      </Label>
      <ThemeSwitch />
    </Fieldset>
    <LocaleSelector />
  </Dialog>
);

export default SettingsDialog;
