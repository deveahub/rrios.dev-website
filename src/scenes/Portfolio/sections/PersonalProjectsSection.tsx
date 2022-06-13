import Stack from '@/components/Stack';
import Section, {
  SectionContent,
  SectionTitle,
} from '@/scenes/Portfolio/components/Section';

const PersonalProjectsSection = () => (
  <Section>
    <SectionTitle>Personal projects</SectionTitle>
    <SectionContent>
      <Stack
        css={{
          p: 1,
        }}
      >
        Make Palette!
      </Stack>
      <Stack
        css={{
          p: 1,
        }}
      >
        Seed generator
      </Stack>
    </SectionContent>
  </Section>
);

export default PersonalProjectsSection;
