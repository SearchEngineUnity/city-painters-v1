import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Subtitle from '../portableText/serializer/H1SubtitleSerializer';

function StructuredSectionHeader({
  heading,
  subheading,
  subtitle,
  headingColor,
  subheadingColor,
  subtitleColor,
  align,
  hasSectionHeading,
  hasSectionSubheading,
  hasSectionSubtitle,
  id,
}) {
  return (
    <>
      {(!hasSectionHeading && heading) ||
      (!hasSectionSubheading && subheading) ||
      (!hasSectionSubtitle && subtitle) ? (
        <Box component={heading ? 'header' : 'div'} textAlign={align}>
          {!hasSectionHeading && heading && id === 'service-hero' ? (
            <Box
              component="h1"
              fontSize="24px"
              fontWeight="800"
              color={headingColor}
              lineHeight="1.1"
              margin="auto 0"
              height="90px"
              display="table-cell"
              letterSpacing="normal"
              style={{ verticalAlign: 'middle' }}
            >
              {heading}
            </Box>
          ) : (
            <Box color={headingColor} mt="26px" mb="13px">
              <Typography variant="h1">{heading}</Typography>
            </Box>
          )}
          {!hasSectionSubheading && subheading && (
            <Box component={Typography} variant="h2" mt="0.35rem" color={subheadingColor}>
              {subheading}
            </Box>
          )}
          {!hasSectionSubtitle && subtitle && (
            <Box color={subtitleColor} mb="40px">
              <Subtitle blocks={subtitle} />
            </Box>
          )}
        </Box>
      ) : null}
    </>
  );
}
export default StructuredSectionHeader;
