import Section, {
  SectionContent,
  SectionTitle,
} from '@/scenes/Portfolio/components/Section';

import ProjectLink from '../components/ProjectLink';

const PersonalProjectsSection = () => (
  <Section>
    <SectionTitle>Personal projects</SectionTitle>
    <SectionContent>
      <ProjectLink
        image="/img/projects/palette-maker.jpeg"
        url="https://palettemaker.rrios.dev/"
        name="Palette Maker"
      />
    </SectionContent>
  </Section>
);

export default PersonalProjectsSection;
