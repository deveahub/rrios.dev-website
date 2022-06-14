import Head from 'next/head';

import theme from '@/styles/theme';

const PortfolioHead = () => (
  <Head>
    <title>Web & Native Apps Developer | Roberto Ríos | rrios.dev</title>
    <meta theme-color={theme.colors['bg-dark-0']} />
    <meta
      name="description"
      content="Personal site of web and native apps developer Roberto Ríos, Freelancer, Typescript, React, NodeJS, React Native, System Design, Redux, Firebase and more."
    />
  </Head>
);

export default PortfolioHead;
