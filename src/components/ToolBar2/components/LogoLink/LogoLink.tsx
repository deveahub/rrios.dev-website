import NextLink from 'next/link';

import Logo from '@/components/Logo';

import { Link } from './styles';

const LogoLink = () => (
  <NextLink href="/" shallow passHref scroll>
    <Link title="Home">
      <Logo />
    </Link>
  </NextLink>
);

export default LogoLink;
