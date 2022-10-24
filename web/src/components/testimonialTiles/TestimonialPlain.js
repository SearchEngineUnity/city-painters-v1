import React from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    borderLeft: `4px solid #8BC44A`,
    height: '100%',
  },
  cardContent: {
    padding: '13px 26px 13px 70px',
  },
}));

function TestimonialPlain({ name, text, role, company }) {
  const classes = useStyles();

  const printedRole = role && `, ${role}`;
  const printedCompany = company && `, ${company}`;

  return (
    <Card elevation={0} classes={{ root: classes.card }} square>
      <CardContent className={classes.cardContent}>
        <Box fontSize="20px" fontStyle="italic" fontWeight="300" component="p" m="0 0 13px">
          {text}
        </Box>
        <Box fontSize="12px" lineHeight="1.625" color="black" fontWeight="800">
          {`\u2014 `}
          {name}
          {printedRole}
          {printedCompany}
        </Box>
      </CardContent>
    </Card>
  );
}

export default TestimonialPlain;
