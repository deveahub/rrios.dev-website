import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { styled } from '@/styles';

import Stack from './Stack';

const Container = styled(Stack, {
  width: '100%',
  px: 1,
  gap: 2,
  overflowX: 'auto',
  borderRadius: '$md',
  py: 0.5,

  a: {
    p: 0.5,
    whiteSpace: 'nowrap',
    '&:hover': {
      color: '$primary-light',
    },
  },

  '@bp4': {
    px: 0,
  },
});

const TopBar = () => {
  const { t } = useTranslation('common');
  return (
    <Container>
      <Link href="mailto: porner.contact.@gmail.com" passHref>
        <a>{t('topbarLinksContact')}</a>
      </Link>
      <Link
        href="https://ilt.eff.org/2257_Reporting_Requirements.html"
        passHref
      >
        <a target="_blank">{t('topbarLinksServiceTerms')}</a>
      </Link>
      <Link
        href="https://www.privacypolicygenerator.info/live.php?token=3IWjXfBJAhe1i91KJVSw5Q6KFFX7hoiY"
        passHref
      >
        <a target="_blank">{t('topbarLinksPrivacyPolitic')}</a>
      </Link>
      <Link href="https://www.exoclick.com/terms-conditions/" passHref>
        <a target="_blank">{t('topbarLinksAdvertisements')}</a>
      </Link>
    </Container>
  );
};

export default TopBar;
