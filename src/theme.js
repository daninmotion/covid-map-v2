//Colors
const black = [
  '#000', //0
  '#050507', //1
  '#2C2C31', //2
]

const white = [
  '#fff' //0
];
const blue = [
  '#0070F4' //0
];

const orange = [
  '#FF8B1A' //0
]

const green = [
  '#01CB30' //0
]

const red = [
  '#FF1A1A' //0
]

const grey = [
  '#FAFAFA', //0
  '#EAEAEA', //1
  '#999999', //2
  '#888888', //3
  '#666666', //4
  '#444444', //5
  '#D4D4D4', //6
  '#ADADAD', //7
]

const colors = {
  background: black[1],
  text: white,
  blue,
  white,
  black,
  orange,
  grey,
  green,
  red
};

//Type Scale 1 (14px), 2 (16px), 3 (20px), 4 (24px), 5 (36px), 6 (48px), 7 (80px), 8 (96px), 9 (112px), 10 (128px)
const fontSizes = ['_', 0.875, 1, 1.25, 1.5, 2.25, 3, 5, 6, 7, 8, 9].map(n => n + 'rem');

//Font Weights
const fontWeights = {
  normal: 400,
  semiBold: 600,
  bold: 700,
};

//Line Height
const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
};

//Space 0 (0px), 1 (8px), 2 (16px), 3 (32px), 4 (64px), 5 (128px), 6 (256px), 7 (512px)
export const space = [0, .25, 1, 2, 4, 8, 16, 32].map(n => n + 'rem');

//Heading & Text
const defaultHeadingStyles = {
  fontFamily: 'inherit',
  fontWeight: 'semiBold',
  lineHeight: 'title'
};

const text = {
  'body-1': {
    ...defaultHeadingStyles,
    fontSize: 3,
    fontWeight: 'normal',
    lineHeight: 'copy',
  },
  'body-2': {
    ...defaultHeadingStyles,
    fontSize: 2,
    fontWeight: 'normal',
    lineHeight: 'copy',
  },
  'body-3': {
    ...defaultHeadingStyles,
    fontSize: 1,
    fontWeight: 'normal',
    lineHeight: 'copy',
  },
  'caption-1': {
    ...defaultHeadingStyles,
    fontSize: 1,
    fontWeight: 'semiBold',
    lineHeight: 'solid',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  'caption-2': {
    ...defaultHeadingStyles,
    fontSize: '0.75rem',
    fontWeight: 'semiBold',
    lineHeight: 'solid',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },

  heading: {
    'heading-1': {
      ...defaultHeadingStyles,
      fontSize: 8
    },
    'heading-2': {
      ...defaultHeadingStyles,
      fontSize: 7,
    },
    'heading-3': {
      ...defaultHeadingStyles,
      fontSize: 6,
    },
    'heading-4': {
      ...defaultHeadingStyles,
      fontSize: 5,
    },
    'heading-5': {
      ...defaultHeadingStyles,
      fontSize: 4,
    },
    'heading-6': {
      ...defaultHeadingStyles,
      fontSize: 3,
    },
  }
}

//Forms
const forms = {
  forms: {
    select: {
      'ghost': {
        color: 'blue.0',
        border: '0px',
        borderBottom: '2px solid',
        borderRadius: '0px',
        fontSize: 4,
        fontFamily: 'inherit',
        fontWeight: 'semiBold',
      }
    },
  }
}

//Cards
const cards = {
  cards: {
    'primary': {
      backgroundColor: 'black.2',
      borderRadius: '8px',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      height: '152px',
      justifyContent: 'center',
      maxWidth: '213px',
      cursor: 'pointer'
    }
  }
}

const theme = {
  colors,
  cards,
  text,
  forms,
  fontSizes,
  fontWeights,
  lineHeights
}

export default theme;