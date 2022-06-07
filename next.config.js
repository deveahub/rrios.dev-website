/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');
const { i18n } = require('./next-i18next.config');

const moduleExports = {
  distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  i18n,
  async rewrites() {
    return [
      {
        source: '/api/redtube/:path*',
        destination: `${process.env.NEXT_PUBLIC_REDTUBE_API_URL}/:path*`,
      },
      {
        source: '/api/redtube-v2/:path*',
        destination: `${process.env.NEXT_PUBLIC_REDTUBE_V2_API_URL}/:path*`,
      },
    ];
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
