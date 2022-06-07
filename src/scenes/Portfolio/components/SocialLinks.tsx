import Image from 'next/image';
import { GitHub, Mail, Twitter } from 'react-feather';

import Stack from '@/components/Stack';
import { styled } from '@/styles';

const Icon = styled('a', {
	size: 4,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'flex-end',
});

const SocialLinks = () => (
	<Stack spacing={2}>
		<Icon href="https://twitter.com/rriosper" target="_blank">
			<Twitter size={22} />
		</Icon>
		<Icon href="https://github.com/rriosper" target="_blank">
			<GitHub height={22} />
		</Icon>
		<Icon href="https://github.com/rriosper" target="_blank">
			<Image layout="fixed" src="/img/mediumIcon.svg" width={24} height={24} />
		</Icon>
		<Icon href="mailto:contact@rrios.dev?subject=Hello from portfolio">
			<Mail size={24} />
		</Icon>
	</Stack>
);

export default SocialLinks;
