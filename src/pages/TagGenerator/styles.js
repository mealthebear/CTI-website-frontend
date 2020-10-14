import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles( theme => ({
  testDiv: {
    fontFamily: theme.primaryFontFamily,
    textAlign: 'center',
  },
}));

export default useStyles;