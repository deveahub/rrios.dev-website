import Stack from '@/components/Stack';
import Text from '@/components/Text';
import { keyframes, styled } from '@/styles';

const beforeElementAnimation = keyframes({
	from: {
		transform: 'translate(0, 0) rotate(-360deg)',
	},
	to: {
		transform: 'translate(1px, 1px) rotate(360deg)',
	},
});

const afterElementAnimation = keyframes({
	from: {
		transform: 'translate(0, 0) rotate(360deg)',
	},
	to: {
		transform: 'translate(1px, 1px) rotate(-360deg)',
	},
});

const circleBomAnimation = keyframes({
	to: {
		transform: 'scale(1.1)',
	},
});

const Circle = styled(Stack, {
	size: 20,
	border: '6px solid $colors$text',
	borderRadius: '100%',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '3rem',
	position: 'relative',
	animationName: circleBomAnimation.name,
	animationDuration: '0.6s',
	animationDirection: 'alternate',
	animationIterationCount: 'infinite',
	animationTimingFunction: 'linear',
	animationPlayState: 'running',
});

const CircleText = styled(Text, {
	position: 'relative',
	zIndex: 1,

	'&::before, &::after': {
		zIndex: -1,
		animationDuration: '1.3s',
		animationIterationCount: 'infinite',
		animationTimingFunction: 'linear',
		animationPlayState: 'running',
		opacity: 0.3,
		content: '</>',
		position: 'absolute',
	},
	'&::before': {
		animationName: beforeElementAnimation.name,
		color: 'blue',
	},
	'&::after': {
		animationName: afterElementAnimation.name,
		color: 'red',
		top: 0,
		left: 0,
	},
});

const CircleLogo = () => (
	<Circle>
		<CircleText>{'</>'}</CircleText>
	</Circle>
);

export default CircleLogo;
