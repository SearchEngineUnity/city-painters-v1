import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ProductCardSegment from '../../serializer/ProductCardSerializer';

function ProductCardFlexSegment({ title, headingLevel, content }) {
  return (
    <Box margin={3}>
      <Typography component={headingLevel} variant="h5" gutterBottom>
        {title}
      </Typography>
      <ProductCardSegment blocks={content} />
    </Box>
  );
}

export default ProductCardFlexSegment;
