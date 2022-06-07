import Switch from '@/components/Switch';
import useThemeVariant from '@/styles/useThemeVariant';

const ThemeSwitch = () => {
  const {
    handlers: { changeTheme },
    themeVariant,
  } = useThemeVariant();

  return (
    <Switch
      checked={themeVariant === 'dark'}
      onClick={() => {
        changeTheme((k) => (k === 'default' ? 'dark' : 'default'));
      }}
    />
  );
};

export default ThemeSwitch;
