import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Tile1 from '../tiles/TileImageRecSqr';
import Tile2 from '../tiles/TileImageCircle';
import Tile3 from '../tiles/TileImageTitleBorder';
import Tile4 from '../tiles/TileImageTitleTextBase';
import Tile5 from '../tiles/TileSmImageTitleText';
import StructuredSectionHeader from '../sections/StructuredSectionHeader';
import StructuredSectionFooter from '../sections/StructuredSectionFooter';
import { mapFluidImgToProps } from '../../lib/mapToProps';

function GridFlex({
  hasSectionHeading,
  hasSectionSubheading,
  hasSectionSubtitle,
  hasSectionFooter,
  heading,
  subheading,
  subtitle,
  footer,
  headerAlignment,
  footerAlignment,
  headingColor,
  subheadingColor,
  subtitleColor,
  footerColor,
  layout,
  tiles,
  tileOption,
}) {
  // number of tiles desktop/tablet/tablet-mobile/mobile: '6/4/2/1' -> {lg: 2, md: 3, sm: 6, xs: 12}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = {
      lg: 12 / valueArrNum[0],
      md: 12 / valueArrNum[1],
      sm: 12 / valueArrNum[2],
      xs: 12 / valueArrNum[3],
    };
    return colObj;
  };

  const col = colCalculate(layout);

  return (
    <>
      <StructuredSectionHeader
        heading={heading}
        subheading={subheading}
        subtitle={subtitle}
        align={headerAlignment}
        hasSectionHeading={hasSectionHeading}
        hasSectionSubheading={hasSectionSubheading}
        hasSectionSubtitle={hasSectionSubtitle}
        headingColor={headingColor}
        subheadingColor={subheadingColor}
        subtitleColor={subtitleColor}
      />
      {tiles.length > 0 &&
      !hasSectionHeading &&
      !hasSectionSubheading &&
      (!!heading || !!subheading || !!subtitle) ? (
        <Box mt="16px" />
      ) : null}
      <Grid container spacing={4}>
        {tiles.map((tile) => {
          const tileSelector = (key) => {
            switch (key) {
              case '1':
                return <Tile1 {...mapFluidImgToProps(tile.tileImage)} link={tile.link[0]} />;
              case '2':
                return <Tile2 {...mapFluidImgToProps(tile.tileImage)} link={tile.link[0]} />;
              case '3':
                return (
                  <Tile3
                    {...mapFluidImgToProps(tile.tileImage)}
                    link={tile.link[0]}
                    title={tile.title}
                  />
                );
              case '4':
                return (
                  <Tile4
                    {...mapFluidImgToProps(tile.tileImage)}
                    link={tile.link[0]}
                    title={tile.title}
                    text={tile.text}
                  />
                );
              case '5':
                return (
                  <Tile5
                    {...mapFluidImgToProps(tile.tileImage)}
                    link={tile.link[0]}
                    title={tile.title}
                    text={tile.text}
                  />
                );
              default:
                return <div> Tile still under development</div>;
            }
          };

          return (
            <Grid item key={tile._key} {...col}>
              {tileSelector(tileOption)}
            </Grid>
          );
        })}
      </Grid>
      <StructuredSectionFooter
        footer={footer}
        footerColor={footerColor}
        align={footerAlignment}
        hasSectionFooter={hasSectionFooter}
      />
    </>
  );
}

export default GridFlex;
