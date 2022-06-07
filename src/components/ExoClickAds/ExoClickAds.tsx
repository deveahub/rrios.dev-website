/* eslint-disable jsx-a11y/iframe-has-title */
import { FC, memo } from 'react';

import { ComponentProps } from '@/styles';

import { ExoClickAdsIframe } from './styles';

const ExoClickAds: FC<ComponentProps<typeof ExoClickAdsIframe>> = ({
  src,
  ...props
}) => (
  <ExoClickAdsIframe
    {...props}
    css={{
      minHeight: props.height,
      minWidth: props.width,
    }}
    src={
      src && process.env.NODE_ENV === 'production'
        ? src
        : 'https://images.unsplash.com/photo-1572756317709-fe9c15ced298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhbWxlc3MlMjBwYXR0ZXJufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    }
    scrolling="no"
    marginWidth={0}
    marginHeight={0}
    frameBorder="0"
  />
);

export const ExoClickAdsMemo = memo(ExoClickAds);

export default ExoClickAds;
