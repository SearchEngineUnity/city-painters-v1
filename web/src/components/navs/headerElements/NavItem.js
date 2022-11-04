import React from 'react';
import { Link, Button } from 'gatsby-theme-material-ui';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  primaryOutline: {
    outlineColor: '#8BC44A',
    '&:hover': {
      color: '#8BC44A',
    },
  },
}));

function NavItem({ url, title, isButton, location }) {
  const classes = useStyles();
  return (
    <>
      {isButton ? (
        <Button variant="contained" color="primary" to={`/${url}`} role="menuitem">
          <Typography component="span" variant="h4">
            {title}
          </Typography>
        </Button>
      ) : (
        <Box
          fontSize="16px"
          lineHeight="26px"
          fontFamily="'Open Sans', sans-serif"
          fontWeight="700"
          color={`/${url}` === location.pathname ? '#8BC44A' : 'black'}
          role="none"
        >
          <Link
            to={`/${url}`}
            role="menuitem"
            color="inherit"
            className={classes.primaryOutline}
            underline="none"
          >
            {title}
          </Link>
        </Box>
      )}
    </>
  );
}

export default NavItem;
