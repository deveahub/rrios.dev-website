import * as Sentry from '@sentry/nextjs';
import GA4React from 'ga-4-react';
import { GA4ReactResolveInterface } from 'ga-4-react/dist/models/gtagModels';
import { useEffect } from 'react';

const ga4 = new GA4React('');

let gaResolver: GA4ReactResolveInterface | null = null;

async function initialize() {
  try {
    if (
      !GA4React.isInitialized() &&
      process.browser &&
      process.env.NODE_ENV !== 'development'
    ) {
      gaResolver = await ga4.initialize();
    }
  } catch (err) {
    Sentry.captureException(err);
  }
}

const useAnalytics = () => {
  useEffect(() => {
    initialize();
  }, []);

  return gaResolver;
};

export default useAnalytics;
