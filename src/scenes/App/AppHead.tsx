import Head from 'next/head';

const AppHead = () => (
  <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
    />
    <meta name="twitter:card" content="summary" data-react-helmet="true" />
    <meta name="twitter:creator" content="@rriosdev" data-react-helmet="true" />
    <meta
      name="twitter:title"
      content="rriosdev | Web & Native Apps Freelancer"
    />
    <meta
      name="twitter:description"
      content="Personal site of Frontend Engineer José Manuel Lucas. React, Javascript, Testing, Functional Programming, Design, and more"
    />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  </Head>
);

export default AppHead;
