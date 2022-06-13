import { styled } from '@/styles';

const Stack = styled('div', {
  display: 'flex',
  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    fullHeight: {
      true: {
        height: '100%',
      },
    },
    justifyContent: {
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceEvenly: {
        justifyContent: 'space-evenly',
      },
      center: {
        justifyContent: 'center',
      },
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
    },
    alignItems: {
      spaceBetween: {
        alignItems: 'space-between',
      },
      spaceAround: {
        alignItems: 'space-around',
      },
      spaceEvenly: {
        alignItems: 'space-evenly',
      },
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    spacing: {
      0: {
        gap: 0,
      },
      1: {
        gap: 1,
      },
      2: {
        gap: 2,
      },
      3: {
        gap: 3,
      },
      4: {
        gap: 4,
      },
      5: {
        gap: 5,
      },
      6: {
        gap: 6,
      },
      7: {
        gap: 7,
      },
      8: {
        gap: 8,
      },
      9: {
        gap: 9,
      },
      10: {
        gap: 10,
      },
    },
    direction: {
      column: {
        flexDirection: 'column',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
      row: {
        flexDirection: 'row',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
    },
  },
});

export default Stack;
