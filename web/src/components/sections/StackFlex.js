import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImgBlock from '../blocks/FluidImgBlock';
import VideoBlock from '../blocks/VideoBlock';
import SectionBlock from '../blocks/SectionBlock';
import ButtonAffiliate from '../buttons/ButtonAffiliate';
import ButtonExternal from '../buttons/ButtonExternal';
import ButtonInternalGlobal from '../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../buttons/ButtonInternalLocal';
import ButtonJumpLink from '../buttons/ButtonJumpLink';
import GridFlex from '../blocks/BlockGridFlex';
import BlockFormNetlify from '../blocks/BlockFormNetlify';
import TestimonialGrid from '../blocks/TestimonialGrid';
import ClickableImage from '../portableText/insertable/ClickableImage';
import SmartGridBlock from '../blocks/SmartGridBlock';
import {
  mapFluidImgBlockToProps,
  mapSectionBlockToProps,
  mapMuiBtnToProps,
  mapGridFlexToProps,
  mapBlockFormNetlifyToProps,
  mapTestimonialGridToProps,
  mapClickableImageToProps,
  mapSmartGridBlockToProps,
} from '../../lib/mapToProps';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import { determineColor } from '../../lib/helperFunctions';

const useStyles = makeStyles((theme) => ({
  blockOneReverse: {
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  blockTwoReverse: {
    order: 2,
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
  mobileGrid: {
    [theme.breakpoints.down('sm')]: {
      margin: -8,
      width: `calc(100% + 16px)`,
      '& > .MuiGrid-item': {
        padding: 8,
      },
    },
  },
  section: {
    backgroundColor: (props) => props.bleed && props.backgroundColor,
    backgroundImage: (props) => props.bleed && props.bgImage && `url(${props.bgImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: (props) => (props.repeat ? 'repeat' : 'no-repeat'),
    padding: theme.customSpacing.sectionOuter.padding.desktop,
    [theme.breakpoints.down('lg')]: {
      padding: theme.customSpacing.sectionOuter.padding.desktopTablet,
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.customSpacing.sectionOuter.padding.tablet,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.customSpacing.sectionOuter.padding.tabletMobile,
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.customSpacing.sectionOuter.padding.mobile,
    },
    '& .pt-link': {
      color: (props) => props.linkColor,
    },
    '& .caption-text': {
      color: (props) => props.captionColor,
    },
    '& .caption-link': {
      color: (props) => props.captionColor,
    },
  },
  column: {
    borderRadius: (props) => props.borderRadius,
    backgroundColor: (props) => !props.bleed && props.backgroundColor,
    backgroundImage: (props) => !props.bleed && props.bgImage && `url(${props.bgImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: (props) => (props.repeat ? 'repeat' : 'no-repeat'),
    width: '100%',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: (props) => props.desktopPadding || theme.customSpacing.sectionInner.padding.desktop,
    [theme.breakpoints.down('lg')]: {
      padding: (props) =>
        props.desktopTabletPadding || theme.customSpacing.sectionInner.padding.desktopTablet,
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '1000px',
      padding: (props) => props.tabletPadding || theme.customSpacing.sectionInner.padding.tablet,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '780px',
      padding: (props) =>
        props.tabletMobilePadding || theme.customSpacing.sectionInner.padding.tabletMobile,
    },
    [theme.breakpoints.down('xs')]: {
      padding: (props) => props.mobilePadding || theme.customSpacing.sectionInner.padding.mobile,
    },
  },
  block: {
    marginTop: '13px',
    '&:first-child': {
      marginTop: '0px',
    },
  },
}));

function StackFlex({
  idTag,
  heading,
  subheading,
  subtitle,
  blocks,
  footer,
  blockWidth,
  headerAlignment,
  footerAlignment,
  designSettings,
}) {
  const colCalculator = (value) => {
    switch (value) {
      case 12:
        return {
          xs: 12,
        };
      case 10:
        return {
          xs: 12,
          md: 10,
        };
      case 9:
        return {
          xs: 12,
          md: 9,
        };
      case 8:
        return {
          xs: 12,
          md: 8,
        };
      case 7:
        return {
          xs: 12,
          md: 7,
        };
      case 6:
        return {
          xs: 12,
          md: 6,
        };
      case 5:
        return {
          xs: 12,
          md: 5,
        };
      case 4:
        return {
          xs: 12,
          md: 4,
        };
      case 3:
        return {
          xs: 12,
          md: 3,
        };
      case 2:
        return {
          xs: 12,
          md: 2,
        };
      default:
        console.log('calculator missing');
        return null;
    }
  };

  const bleed = designSettings ? !!designSettings?.bleed : true;
  const bgImage = designSettings?.bgImage?.asset?.url;
  const repeat = !!designSettings?.repeat;
  const backgroundColor = determineColor(designSettings?.background?.color) || 'transparent';
  const foregroundColor = determineColor(designSettings?.foreground?.color) || 'text.primary';
  const linkColor = determineColor(designSettings?.link?.color) || 'initial';
  const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';
  const captionColor = determineColor(designSettings?.caption?.color) || '#757575';
  const desktopPadding = designSettings?.innerPadding?.desktopPadding;
  const desktopTabletPadding = designSettings?.innerPadding?.desktopTabletPadding;
  const tabletPadding = designSettings?.innerPadding?.tabletPadding;
  const tabletMobilePadding = designSettings?.innerPadding?.tabletMobilePadding;
  const mobilePadding = designSettings?.innerPadding?.mobilePadding;
  const borderRadius = designSettings?.borderRadius || '0px';

  const classes = useStyles({
    linkColor,
    bleed,
    bgImage,
    backgroundColor,
    captionColor,
    repeat,
    desktopPadding,
    desktopTabletPadding,
    tabletPadding,
    tabletMobilePadding,
    mobilePadding,
    borderRadius,
  });

  return (
    <Box
      id={idTag}
      component="section"
      color={foregroundColor}
      className={classes.section}
      mb="30px"
      mt="46px"
    >
      <div className={classes.column}>
        <StructuredSectionHeader
          heading={heading}
          subheading={subheading}
          subtitle={subtitle}
          headingColor={headingColor}
          subheadingColor={subheadingColor}
          subtitleColor={subtitleColor}
          align={headerAlignment}
        />
        {(!!heading || !!subheading) && blocks.length > 0 ? <Box mt="16px" /> : null}
        {blocks.map((block) => {
          const { _type, _key } = block;
          const col = colCalculator(parseInt(blockWidth, 10));
          const blockSelector = (key) => {
            switch (true) {
              case key === 'smartGridBlock':
                return (
                  <SmartGridBlock
                    key={block._key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapSmartGridBlockToProps(block)}
                  />
                );
              case key === 'videoBlock':
                return <VideoBlock url={block.url} ratio={block.ratio} key={_key} />;
              case key === 'imageBlock':
                return <ImgBlock {...mapFluidImgBlockToProps(block)} key={_key} />;
              case key === 'sectionBlock':
                return (
                  <SectionBlock
                    key={_key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapSectionBlockToProps(block)}
                  />
                );
              case key === 'gridFlex':
                return (
                  <GridFlex
                    key={_key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapGridFlexToProps(block)}
                  />
                );
              case key === 'clickableImage':
                return <ClickableImage {...mapClickableImageToProps(block)} />;
              case key === 'blockFormNetlify':
                return <BlockFormNetlify key={block._key} {...mapBlockFormNetlifyToProps(block)} />;
              case key === 'btnBlockMui' && block.link[0]._type === 'jumpLink':
                return <ButtonJumpLink key={_key} {...mapMuiBtnToProps(block)} />;
              case key === 'btnBlockMui' && block.link[0]._type === 'affiliateLink':
                return <ButtonAffiliate key={_key} {...mapMuiBtnToProps(block)} />;
              case key === 'btnBlockMui' && block.link[0]._type === 'externalLink':
                return <ButtonExternal key={_key} {...mapMuiBtnToProps(block)} />;
              case key === 'btnBlockMui' && block.link[0]._type === 'internalGlobal':
                return <ButtonInternalGlobal key={_key} {...mapMuiBtnToProps(block)} />;
              case key === 'btnBlockMui' && block.link[0]._type === 'internalLocal':
                return <ButtonInternalLocal key={_key} {...mapMuiBtnToProps(block)} />;
              case key === 'testimonialGrid':
                return (
                  <TestimonialGrid
                    key={_key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapTestimonialGridToProps(block)}
                  />
                );
              default:
                return <div key="default-inner-block"> Block still under development</div>;
            }
          };
          return (
            <Grid
              container
              justifyContent="center"
              spacing={4}
              className={classes.mobileGrid}
              key={_key}
            >
              <Grid item {...col}>
                <div className={classes.block}>{blockSelector(_type)}</div>
              </Grid>
            </Grid>
          );
        })}
        <StructuredSectionFooter
          footer={footer}
          footerColor={footerColor}
          align={footerAlignment}
        />
      </div>
    </Box>
  );
}

export default StackFlex;
