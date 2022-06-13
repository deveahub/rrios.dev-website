import Stack from '@/components/Stack';
import Section, {
  SectionContent,
  SectionTitle,
} from '@/scenes/Portfolio/components/Section';
import TechItem from '@/scenes/Portfolio/components/TechItem';
import { styled } from '@/styles';

const TechRow = styled(Stack, {
  gap: 1,

  '@bp15': {
    gap: 10,
  },
});

const TechSection = () => (
  <Section>
    <SectionTitle>My stack</SectionTitle>
    <SectionContent spacing={0} alignItems="center">
      <Stack>
        <TechItem
          src="/img/tech-stack/sentry.svg"
          tooltip="Sentry"
          href="https://sentry.io/welcome/"
        />
      </Stack>
      <TechRow>
        <TechItem
          src="/img/tech-stack/stitches.svg"
          tooltip="Stitches"
          href="https://stitches.dev/"
        />
        <TechItem
          src="/img/tech-stack/radix.svg"
          tooltip="Radix UI"
          href="https://www.radix-ui.com/"
        />
      </TechRow>
      <TechRow>
        <TechItem
          src="/img/tech-stack/redux.svg"
          tooltip="Redux"
          href="https://redux.js.org/"
        />
        <TechItem
          src="/img/tech-stack/swr.svg"
          tooltip="SWR"
          href="https://swr.vercel.app/es-ES"
        />
        <TechItem
          src="/img/tech-stack/recoil-js.svg"
          tooltip="RecoilJS"
          href="https://recoiljs.org/"
        />
      </TechRow>
      <TechRow>
        <TechItem
          src="/img/tech-stack/nodejs.svg"
          tooltip="NodeJS"
          href="https://nodejs.org/en/"
        />
        <TechItem
          src="/img/tech-stack/react.svg"
          tooltip="React"
          href="https://reactjs.org/"
        />
        <TechItem
          src="/img/tech-stack/react-native.svg"
          tooltip="React Native"
          href="https://reactnative.dev/"
        />
        <TechItem
          src="/img/tech-stack/next-js.svg"
          tooltip="NextJS"
          href="https://nextjs.org/"
        />
      </TechRow>
      <TechRow>
        <TechItem
          src="/img/tech-stack/graphql.svg"
          tooltip="Graphql"
          href="https://graphql.org/"
        />
        <TechItem
          src="/img/tech-stack/apollo.svg"
          tooltip="Apollo/Graphql"
          href="https://www.apollographql.com/"
        />
        <TechItem
          src="/img/tech-stack/firebase.svg"
          tooltip="Firebase"
          href="https://firebase.google.com/"
        />
      </TechRow>
      <TechRow>
        <TechItem
          src="/img/tech-stack/postgresql.svg"
          tooltip="PostgreSQL"
          href="https://www.postgresql.org/"
        />
        <TechItem
          src="/img/tech-stack/mongodb.svg"
          tooltip="MongoDB"
          href="https://www.mongodb.com/"
        />
      </TechRow>
      <Stack>
        <TechItem
          src="/img/tech-stack/typescript.svg"
          tooltip="Typescript"
          href="https://www.typescriptlang.org/"
        />
      </Stack>
    </SectionContent>
  </Section>
);

export default TechSection;
