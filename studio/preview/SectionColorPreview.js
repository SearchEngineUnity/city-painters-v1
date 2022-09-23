/* eslint-disable import/no-unresolved */
import React from 'react';
import QueryContainer from 'part:@sanity/base/query-container';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import { determineColor } from '../lib/helperFunctions';

const SectionColorPreview = ({ document }) => {
  // The JSON preview
  const documentQuery = `*[_type == 'sectionDesignSet' && name == '${document.displayed.name}'] | order(_updatedAt desc) {
    background->, foreground->, link->, heading->, subheading->, subtitle->, footer->, "bgImage": bgImage.asset->url, bleed, repeat
  }`;
  return (
    <QueryContainer query={documentQuery}>
      {({ result, loading }) => {
        const bgImage = result?.documents[0]?.bgImage;
        const repeat = result?.documents[0]?.repeat;

        const bgColor = result?.documents[0]?.background?.color?.hex
          ? determineColor(result?.documents[0]?.background?.color)
          : 'transparent';

        const color = result?.documents[0]?.foreground?.color?.hex
          ? determineColor(result?.documents[0]?.foreground?.color)
          : 'initial';

        const linkColor = result?.documents[0]?.link?.color?.hex
          ? determineColor(result?.documents[0]?.link?.color)
          : 'initial';

        const headingColor = result?.documents[0]?.heading?.color?.hex
          ? determineColor(result?.documents[0]?.heading?.color)
          : 'inherit';

        const subheadingColor = result?.documents[0]?.subheading?.color?.hex
          ? determineColor(result?.documents[0]?.subheading?.color)
          : 'inherit';

        const subtitleColor = result?.documents[0]?.subtitle?.color?.hex
          ? determineColor(result?.documents[0]?.subtitle?.color)
          : 'inherit';

        const footerColor = result?.documents[0]?.footer?.color?.hex
          ? determineColor(result?.documents[0]?.footer?.color)
          : 'inherit';

        const captionColor = result?.documents[0]?.caption?.color?.hex
          ? determineColor(result?.documents[0]?.caption?.color)
          : '#757575';

        return loading ? (
          <Box display="flex" height="100%" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        ) : (
          result && (
            <div
              style={{
                width: '100%',
              }}
            >
              <div
                style={{
                  margin: '16px',
                  padding: '32px',
                  backgroundColor: bgColor,
                  backgroundImage: `url(${bgImage})`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: repeat ? 'repeat' : 'no-repeat',
                  color,
                }}
              >
                <Typography variant="h3" style={{ color: headingColor }} gutterBottom>
                  This is the section heading
                </Typography>
                <Typography variant="h4" style={{ color: subheadingColor }} gutterBottom>
                  This is the subheading
                </Typography>
                <Typography variant="body1" style={{ color: subtitleColor }} gutterBottom>
                  This is the section subtitle text.
                </Typography>
                <br />
                <Typography variant="body1">
                  This is the section content. This is a{' '}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a style={{ color: linkColor }} href="#">
                    link
                  </a>{' '}
                  in section content.
                </Typography>
                <br />
                <p style={{ color: footerColor }}>This is the section footer.</p>
                <br />
                <Typography
                  variant="caption"
                  component="p"
                  style={{ color: captionColor }}
                  gutterBottom
                >
                  <i>
                    This is the caption text of an image with a{' '}
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" style={{ color: captionColor }}>
                      link
                    </a>
                    .
                  </i>
                </Typography>
              </div>
            </div>
          )
        );
      }}
    </QueryContainer>
  );
};

export default SectionColorPreview;
