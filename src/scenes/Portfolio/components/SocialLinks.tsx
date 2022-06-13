/* eslint-disable @next/next/no-img-element */
import { GitHub, Linkedin, Mail, Twitter } from 'react-feather';

import Stack from '@/components/Stack';
import { styled } from '@/styles';

const Icon = styled('a', {
  size: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',

  '& img': {
    width: 24,
    height: 24,
  },
});

const Container = styled(Stack, {
  gap: 2,
  justifyContent: 'center',
  px: 2,
  '@bp2': {
    px: 0,
    justifyContent: 'flex-start',
  },
});

const SocialLinks = () => (
  <Container>
    <Icon href="https://twitter.com/rriosdev" target="_blank">
      <Twitter size={22} />
    </Icon>
    <Icon href="https://github.com/rriosper" target="_blank">
      <GitHub height={22} />
    </Icon>
    <Icon href="https://github.com/rriosper" target="_blank">
      <img alt="medium" src="/img/mediumIcon.svg" />
    </Icon>
    <Icon href="https://www.linkedin.com/in/rriosper/">
      <Linkedin size={24} />
    </Icon>
    <Icon href="mailto:contact@rrios.dev?subject=Hello from portfolio">
      <Mail size={24} />
    </Icon>
  </Container>
);

export default SocialLinks;
