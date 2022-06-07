import { AdsContainer, ExoClickAdsResponsive } from './styles';

const COMMON_EXOCLICK_CONFIG = {
  width: '300',
  height: '100',
};

const EXOCLICK_CONFIG = {
  general: {
    ...COMMON_EXOCLICK_CONFIG,
    src: '//a.realsrv.com/iframe.php?idzone=4657436&size=300x100',
  },
  mobile1: {
    ...COMMON_EXOCLICK_CONFIG,
    src: '//a.realsrv.com/iframe.php?idzone=4657440&size=300x100',
  },
  mobile2: {
    ...COMMON_EXOCLICK_CONFIG,
    src: '//a.realsrv.com/iframe.php?idzone=4657436&size=300x100',
  },
  tablet: {
    ...COMMON_EXOCLICK_CONFIG,
    src: '//a.realsrv.com/iframe.php?idzone=4657444&size=300x100',
  },
  laptop: {
    ...COMMON_EXOCLICK_CONFIG,
    src: '//a.realsrv.com/iframe.php?idzone=4657448&size=300x100',
  },
};

const VideoSelectorBarAds = () => (
  <AdsContainer>
    <ExoClickAdsResponsive
      title="Exoclick VideoSelectorBarAds"
      {...EXOCLICK_CONFIG.general}
    />
    <ExoClickAdsResponsive
      variant="mobile1"
      title="Exoclick VideoSelectorBarAds mobile1"
      {...EXOCLICK_CONFIG.mobile1}
    />
    <ExoClickAdsResponsive
      variant="mobile2"
      title="Exoclick VideoSelectorBarAds mobile2"
      {...EXOCLICK_CONFIG.mobile2}
    />
    <ExoClickAdsResponsive
      variant="tablet"
      title="Exoclick VideoSelectorBarAds tablet"
      {...EXOCLICK_CONFIG.tablet}
    />
    <ExoClickAdsResponsive
      variant="laptop"
      title="Exoclick VideoSelectorBarAds laptop"
      {...EXOCLICK_CONFIG.laptop}
    />
  </AdsContainer>
);

export default VideoSelectorBarAds;
