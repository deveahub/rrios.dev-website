import Stack from '@/components/Stack';

import Layout from './components/Layout';
import PresentationText from './components/PresentationText';
import SocialLinks from './components/SocialLinks';
import PortfolioHead from './PortfolioHead';
import PersonalProjectsSection from './sections/PersonalProjectsSection';
import PresentationSection from './sections/PresentationSection';
import TechSection from './sections/TechSection';
import WorksSection from './sections/WorksSection';

const Portfolio = () => (
  <Layout>
    <PortfolioHead />
    <PresentationSection />
    <SocialLinks />
    <PresentationText />
    <TechSection />
    <WorksSection />
    <PersonalProjectsSection />
    <Stack as="footer">© Roberto Ríos, 2022</Stack>
  </Layout>
);

export default Portfolio;
