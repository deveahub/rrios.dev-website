import Head from 'next/head';

import { useThemeVariant } from '@/styles';

const AppHead = () => {
	const { themeVariant } = useThemeVariant();
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
			/>
			<link
				rel="shortcut icon"
				href={`/img/logo-acr${themeVariant === 'default' ? '' : '-white'}.svg`}
			/>
		</Head>
	);
};

export default AppHead;
