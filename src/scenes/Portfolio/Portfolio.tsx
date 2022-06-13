import Stack from '@/components/Stack';
import Text from '@/components/Text';

import Layout from './components/Layout';
import SocialLinks from './components/SocialLinks';
import PortfolioHead from './PortfolioHead';
import PresentationSection from './sections/PresentationSection';
import TechSection from './sections/TechSection';
import WorksSection from './sections/WorksSection';

const Portfolio = () => (
  <Layout>
    <PortfolioHead />
    <PresentationSection />
    <SocialLinks />
    <Text
      css={{
        px: 2,
        textAlign: 'center',
        '@bp2': {
          px: 0,
          textAlign: 'left',
        },
      }}
    >
      I develop web and mobile applications with react/native, if you are
      looking for a developer to carry out your idea do not hesitate to contact
      me.
    </Text>
    <TechSection />
    <WorksSection />
    {/* <MyPostsSection />
    <PersonalProjectsSection /> */}
    <Stack as="footer">© Roberto Ríos, 2022</Stack>
  </Layout>
);

export default Portfolio;
