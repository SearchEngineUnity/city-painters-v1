import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Subtitle from '../portableText/serializer/H2SubtitleSerializer';

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
          {!hasSectionHeading && heading && (
            <Box
              component={Typography}
              variant="h2"
              color={headingColor}
              borderBottom="2px solid #8BC44A"
              pb="10px"
            >
              {heading}
            </Box>
          )}
          {!hasSectionSubheading && subheading && (
            <Box component={Typography} variant="h3" gutterBottom color={subheadingColor}>
              {subheading}
            </Box>
          )}
          {!hasSectionSubtitle && subtitle && (
            <Box color={subtitleColor}>
              <Subtitle blocks={subtitle} />
            </Box>
          )}
        </Box>
      ) : null}
    </>
  );
}
export default StructuredSectionHeader;
