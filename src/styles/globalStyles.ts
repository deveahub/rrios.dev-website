import { globalCss } from './stitches';

const globalStyles = globalCss({
  '@font-face': {
    fontFamily: '"Lato", sans-serif',
    src: 'url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap")',
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  '*': {
    margin: 0,
  },
  'html, body': {
    height: '100%',
  },
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    backgroundColor: '$bg-dark-0',
    color: '$text',
    fontFamily:
      '"Poppins","Helvetica Neue","Helvetica","Roboto","Arial",sans-serif',
    lineHeight: 1.66,
    '-webkit-font-smoothing': 'antialiased',
  },
  'button, a': {
    cursor: 'pointer',
    '&[disabled]': {
      cursor: 'not-allowed',
    },
  },
  'input, button, a, select': {
    outlineColor: '$primary',
  },
  'input:focus-visible, button:focus-visible, a:focus-visible, select:focus-visible':
    {
      outlineStyle: 'solid',
      outlineColor: '$primary',
      outlineWidth: 2,
      outlineOffset: 0,
    },
  a: {
    textDecoration: 'none',
    color: '$text',
  },
  '*::-webkit-scrollbar': {
    width: '4px',
    height: '2px',
  },

  '*::-webkit-scrollbar-track': {
    backgroundColor: '$bg' /* color of the tracking area */,
  },

  '*::-webkit-scrollbar-thumb': {
    backgroundColor: '$text',
  },
});

export default globalStyles;
