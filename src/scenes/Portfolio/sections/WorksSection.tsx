import Section, {
  SectionContent,
  SectionTitle,
} from '@/scenes/Portfolio/components/Section';

import WorkItemLink from '../components/WorkItemLink';

const WorksSection = () => (
  <Section>
    <SectionTitle>I have worked in</SectionTitle>
    <SectionContent
      direction="row"
      spacing={2}
      justifyContent="center"
      css={{ flexWrap: 'wrap' }}
    >
      <WorkItemLink
        src="/img/tech-companies/sewan.webp"
        tooltip="Sewan telecommunications"
        href="https://www.sewan.es/"
      />
      <WorkItemLink
        src="/img/tech-companies/nexiona.webp"
        tooltip="Nexiona IoT"
        href="https://nexiona.com/"
      />
      <WorkItemLink
        src="/img/tech-companies/bob.io.webp"
        tooltip="BoB.io"
        href="https://bob.io/"
      />
      <WorkItemLink
        src="/img/tech-companies/freepik.webp"
        tooltip="Freepik"
        href="https://www.freepik.com/"
      />
      <WorkItemLink
        src="/img/tech-companies/manomano.webp"
        tooltip="ManoMano"
        href="https://www.manomano.fr/"
      />
    </SectionContent>
  </Section>
);

export default WorksSection;
