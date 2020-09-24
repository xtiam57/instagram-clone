const colors = {
  primary: '#be0a75',
  secondary: '#01ffff',
  darkGray: '#222222',
  lightGray: '#fafafa',
  black: '#000000',
  white: '#ffffff',
};

const space = [0, '0.25rem', '0.5rem', '1rem', '2rem', '3.5rem'];
space.xs = space[1];
space.sm = space[2];
space.md = space[3];
space.lg = space[4];
space.xl = space[5];

export const theme = {
  colors,
  space,
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  header: {
    height: '60px',
  },
  footer: {
    height: '50px',
    bgColor: colors.darkGray,
    textColor: '#787878',
  },
};
