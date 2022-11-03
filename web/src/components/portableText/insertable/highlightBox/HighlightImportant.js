import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ErrorOutlineOutlined } from '@material-ui/icons';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.important.bgColor,
    borderColor: theme.palette.hlBox.important.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.important.linkColor,
    },
  },
  icon: {
    color: theme.palette.hlBox.important.iconColor,
  },
  text: {
    color: theme.palette.hlBox.important.textColor,
  },
  link: {
    color: theme.palette.hlBox.definition.linkColor,
  },
}));

function HighlightImportant({ blockContent, id }) {
  const classes = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} p={2}>
      <Typography component="p" variant="h4" className={classes.text}>
        <ErrorOutlineOutlined className={classes.icon} /> Important
      </Typography>
      <div className={classes.text}>
        <TextContent blocks={blockContent} />
      </div>
    </Box>
  );
}

export default HighlightImportant;
