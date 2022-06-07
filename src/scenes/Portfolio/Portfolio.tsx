import Image from 'next/image';
import { GitHub, Mail, Twitter } from 'react-feather';

import Stack from '@/components/Stack';
import Text from '@/components/Text';
import { keyframes, styled } from '@/styles';

import CircleLogo from './components/CircleLogo';
import Layout from './components/Layout';
import SocialLinks from './components/SocialLinks';

const Portfolio = () => (
	<Layout>
		<Stack
			css={{
				height: 200,
			}}
		>
			<Stack fullWidth>
				<Stack
					justifyContent="center"
					alignItems="center"
					spacing={2}
					css={{
						border: '1px solid $colors$text',
						width: 'fit-content',
						whiteSpace: 'nowrap',
						p: 2,
					}}
				>
					<Text
						css={{
							fontSize: '4rem',
							fontWeight: 400,
						}}
					>
						I'M
					</Text>
					<Stack
						direction="column"
						css={{
							fontSize: '1.5rem',
							fontWeight: 300,
						}}
					>
						<Text>Roberto Ríos</Text>
						<Text
							css={{
								fontSize: '1.1rem',
								fontWeight: 300,
							}}
						>
							web & native apps developer
						</Text>
					</Stack>
				</Stack>
				<Image layout="fixed" src="/img/me.jpeg" width={200} height={200} />
			</Stack>
			<Stack justifyContent="center" alignItems="center" fullWidth>
				<CircleLogo />
			</Stack>
		</Stack>
		<SocialLinks />
		<Stack>
			<Text>
				Desarrollo aplicaciones web y nativas, actualmente soy desarrollador en
				ManoMano, si estas buscando la manera de desarrollar tu idea no dudes en
				contactarme.
			</Text>
		</Stack>
		<Stack>Technologies</Stack>
		<Stack>Posts</Stack>
		<Stack>Projects</Stack>
	</Layout>
);

export default Portfolio;
