import React from 'react';
import { Grid, Box } from '@material-ui/core';
import StructuredSectionHeader from '../sections/StructuredSectionHeader';
import StructuredSectionFooter from '../sections/StructuredSectionFooter';
import ProductCardGridPtTile from '../portableText/insertable/SmartGrid/ProductCardGridPtTile';
import PtTile from '../portableText/serializer/SmartGridSerializer';
import Illustration from '../portableText/insertable/Illustration';
import SmartUnorderedList from '../portableText/insertable/SmartUnorderedList';
import VideoEmbed from '../portableText/insertable/VideoEmbed';
import ButtonJumpLink from '../buttons/ButtonJumpLink';
import ButtonAffiliate from '../buttons/ButtonAffiliate';
import ButtonExternal from '../buttons/ButtonExternal';
import ButtonInternalGlobal from '../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../buttons/ButtonInternalLocal';
import ClickableImage from '../portableText/insertable/ClickableImage';
import { mapMuiBtnToProps } from '../../lib/mapToProps';

function SmartGridBlock({
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
}) {
  // number of tiles desktop/desktop-tablet/tablet/tablet-mobile/mobile: '6/4/4/2/1' -> {xl: 2, lg: 3, md: 3, sm: 6, xs: 12}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = {
      xl: 12 / valueArrNum[0],
      lg: 12 / valueArrNum[1],
      md: 12 / valueArrNum[2],
      sm: 12 / valueArrNum[3],
      xs: 12 / valueArrNum[4],
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
          const { _key, _type } = tile;

          const tileSelector = (key) => {
            switch (true) {
              case key === 'productCardGridPtTile':
                return <ProductCardGridPtTile {...tile} />;
              case key === 'smartGridPtTile':
                return <PtTile blocks={tile.content} />;
              case key === 'illustration':
                return <Illustration illustration={tile} />;
              case key === 'smartUnorderedList':
                return <SmartUnorderedList {...tile} />;
              case key === 'clickableImage':
                return <ClickableImage {...tile} />;
              case key === 'videoEmbed':
                return <VideoEmbed {...tile} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'jumpLink':
                return <ButtonJumpLink {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'affiliateLink':
                return <ButtonAffiliate {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'externalLink':
                return <ButtonExternal {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'internalGlobal':
                return <ButtonInternalGlobal {...mapMuiBtnToProps(tile)} />;
              case key === 'btnBlockMui' && tile.link[0]._type === 'internalLocal':
                return <ButtonInternalLocal {...mapMuiBtnToProps(tile)} />;
              default:
                return <div> Tile still under development</div>;
            }
          };

          return (
            <Grid item key={_key} {...col}>
              {tileSelector(_type)}
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

export default SmartGridBlock;
