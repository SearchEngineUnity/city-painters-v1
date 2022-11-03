import React from 'react';
import { Box } from '@material-ui/core';

const IndentFullWrapper = ({ children }) => <Box mx={{ xs: 2.5, md: 5 }}>{children}</Box>;

export default IndentFullWrapper;
