import Section, {
  SectionContent,
  SectionTitle,
} from '@/scenes/Portfolio/components/Section';

import ProjectLink from '../components/ProjectLink';

const PersonalProjectsSection = () => (
  <Section>
    <SectionTitle>Personal projects</SectionTitle>
    <SectionContent
      spacing={2}
      direction="row"
      css={{ flexWrap: 'wrap' }}
      justifyContent="center"
    >
      <ProjectLink
        image="https://palette-maker.rrios.dev/palette-maker.jpeg"
        url="https://palette-maker.rrios.dev/"
        name="Palette Maker"
      />
      <ProjectLink
        image="https://seed-generator.rrios.dev/seed-generator.webp"
        url="https://seed-generator.rrios.dev/"
        name="Seed generator"
      />
      <ProjectLink
        image="https://raw.githubusercontent.com/rrios-dev/react-ui-kit/main/react-ui-kit.jpeg"
        url="https://ui-kit.rrios.dev/"
        name="React UI Kit"
      />
      <ProjectLink
        image="https://raw.githubusercontent.com/rrios-dev/monorepo-boilerplate/main/monorepo-boilerplate.jpeg"
        url="https://github.com/rrios-dev/monorepo-boilerplate"
        name="Monorepo boilerplate"
      />
    </SectionContent>
  </Section>
);

export default PersonalProjectsSection;
