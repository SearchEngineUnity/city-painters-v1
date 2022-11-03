import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '&:first-child': {
      marginTop: '0px',
    },
    '&:last-child': {
      marginBottom: '0px',
    },
  },
}));

const VerticalSpacingWrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.spacing}>{children}</div>;
};

export default VerticalSpacingWrapper;
