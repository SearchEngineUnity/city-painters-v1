/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import QueryContainer from 'part:@sanity/base/query-container';
import { Button, Box, TextField, Divider, CircularProgress } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { determineColor } from '../lib/helperFunctions';

const ButtonMuiPreview = ({ document }) => {
  const [text, setText] = useState('Button Text');
  // The JSON preview
  const documentQuery = `*[_type == 'btnDesignMui' && name == '${document.displayed.name}'] | order(_updatedAt desc) {name, settings, 'main': colors.main->color, 'dark': colors.dark->color, 'contrastText': colors.contrastText->color, typography, "bgImage": bgImage.asset->url}`;

  return (
    <QueryContainer query={documentQuery}>
      {({ result, loading }) => {
        let main;
        let dark;
        let contrastText;
        let typography;
        let settings;
        let variant;
        let padding;
        let borderRadius;
        let disableElevation;
        let disableFocusRipple;
        let disableRipple;
        let fullWidth;
        let mainColor;
        let darkColor;
        let contrastTextColor;
        let backgroundImage;
        let hoverOverlay = {};

        if (result) {
          main = result?.documents[0].main;
          dark = result?.documents[0].dark;
          contrastText = result?.documents[0].contrastText;
          typography = result?.documents[0].typography;
          settings = result?.documents[0].settings;

          variant = settings.variant;
          padding = settings.padding;
          borderRadius = settings.borderRadius;
          disableElevation = settings.disableElevation;
          disableFocusRipple = settings.disableFocusRipple;
          disableRipple = settings.disableRipple;
          fullWidth = settings.fullWidth;

          mainColor = main ? determineColor(main) : null;
          darkColor = dark ? determineColor(dark) : null;
          contrastTextColor = contrastText ? determineColor(contrastText) : null;
          hoverOverlay = dark ? dark.rgb : null;

          backgroundImage = result?.documents[0].bgImage;
        }

        const theme = createTheme({
          palette: {
            primary: {
              main: mainColor || '#3f51b5',
              dark: darkColor || '#303f9f',
              contrastText: contrastTextColor || '#fff',
            },
          },
          shape: {
            borderRadius: borderRadius || '4px',
          },
          typography: {
            button: {
              fontFamily: typography?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
              fontWeight: typography?.fontWeight || 500,
              fontSize: typography?.fontSize || '0.875rem',
              lineHeight: typography?.lineHeight || 1.75,
              letterSpacing: typography?.letterSpacing || '0.02857em',
              textTransform: 'none',
            },
          },
          overrides: {
            MuiButton: {
              root: {
                backgroundImage: backgroundImage && `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                '&:hover': {
                  backgroundImage:
                    backgroundImage &&
                    `linear-gradient(rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50), rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50)), url(${backgroundImage})`,
                },
                '@media (hover: none)': {
                  backgroundImage: backgroundImage && `url(${backgroundImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  '&:hover': {
                    backgroundImage:
                      backgroundImage &&
                      `linear-gradient(rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50), rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50)), url(${backgroundImage})`,
                  },
                },
              },
            },
          },
        });

        return loading ? (
          <Box display="flex" height="100%" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        ) : (
          result && (
            <>
              <Box p={3}>
                <TextField
                  id="outlined-basic"
                  label="Custom button text"
                  variant="outlined"
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                />
                <br />
                <Box color="red" component="p">
                  Warning: Font style is not true to design.
                </Box>
              </Box>
              <Divider />
              <Box p={3}>
                <ThemeProvider theme={theme}>
                  <Button
                    color="primary"
                    variant={variant}
                    disableElevation={disableElevation}
                    disableFocusRipple={disableFocusRipple}
                    disableRipple={disableRipple}
                    fullWidth={fullWidth}
                    style={{ padding }}
                  >
                    {text}
                  </Button>
                </ThemeProvider>
              </Box>
            </>
          )
        );
      }}
    </QueryContainer>
  );
};

export default ButtonMuiPreview;
