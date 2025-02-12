import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImgBlock from '../blocks/FluidImgBlock';
import VideoBlock from '../blocks/VideoBlock';
import SectionBlock from '../blocks/HeroSectionBlock';
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
import HeroSectionFooter from './HeroSectionFooter';
import HeroSectionHeader from './HeroSectionHeader';
import { determineColor } from '../../lib/helperFunctions';

const useStyles = makeStyles((theme) => ({
  blockOneReverse: {
    order: 1,
    [theme.breakpoints.down('xs')]: {
      order: 2,
    },
  },
  blockTwoReverse: {
    order: 2,
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
  },
  section: {
    backgroundColor: (props) => props.bleed && props.backgroundColor,
    backgroundImage: (props) => props.bleed && props.bgImage && `url(${props.bgImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: (props) => (props.repeat ? 'repeat' : 'no-repeat'),
    padding: (props) =>
      props.desktopOuterPadding || theme.customSpacing.sectionOuter.padding.desktop,
    [theme.breakpoints.down('md')]: {
      padding: (props) =>
        props.tabletOuterPadding || theme.customSpacing.sectionOuter.padding.tablet,
    },
    [theme.breakpoints.down('sm')]: {
      padding: (props) =>
        props.tabletMobileOuterPadding || theme.customSpacing.sectionOuter.padding.tabletMobile,
    },
    [theme.breakpoints.down('xs')]: {
      padding: (props) =>
        props.mobileOuterPadding || theme.customSpacing.sectionOuter.padding.mobile,
      backgroundImage: (props) =>
        props.bleed && props.bgImage && props.repeat ? `url(${props.bgImage})` : 'none',
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
    maxWidth: '1180px', // CP specific
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: (props) =>
      props.desktopInnerPadding || theme.customSpacing.sectionInner.padding.desktop,
    [theme.breakpoints.down('md')]: {
      padding: (props) =>
        props.tabletInnerPadding || theme.customSpacing.sectionInner.padding.tablet,
    },
    [theme.breakpoints.down('sm')]: {
      padding: (props) =>
        props.tabletMobileInnerPadding || theme.customSpacing.sectionInner.padding.tabletMobile,
    },
    [theme.breakpoints.down('xs')]: {
      padding: (props) =>
        props.mobileInnerPadding || theme.customSpacing.sectionInner.padding.mobile,
      backgroundImage: (props) =>
        !props.bleed && props.bgImage && props.repeat ? `url(${props.bgImage})` : 'none',
    },
  },
  block: {
    marginTop: '13px',
    '&:first-child': {
      marginTop: '0px',
    },
  },
}));

function LrFlexHero({
  idTag,
  heading,
  subheading,
  subtitle,
  blocks,
  footer,
  layout,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  reverseOrder,
  designSettings,
}) {
  const colArr = layout.split(':').map((el) => parseInt(el, 10));
  const colCalculator = (value) => {
    switch (value) {
      case 9:
        return {
          xs: 12,
          sm: 6,
          md: 9,
        };
      case 8:
        return {
          xs: 12,
          sm: 6,
          md: 8,
        };
      case 7:
        return {
          xs: 12,
          sm: 6,
          md: 7,
        };
      case 6:
        return {
          xs: 12,
          sm: 6,
          md: 6,
        };
      case 5:
        return {
          xs: 12,
          sm: 6,
          md: 5,
        };
      case 4:
        return {
          xs: 12,
          sm: 6,
          md: 4,
        };
      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 3,
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
  const desktopOuterPadding = designSettings?.outerPadding?.desktopPadding;
  const tabletOuterPadding = designSettings?.outerPadding?.tabletPadding;
  const tabletMobileOuterPadding = designSettings?.outerPadding?.tabletMobilePadding;
  const mobileOuterPadding = designSettings?.outerPadding?.mobilePadding;
  const desktopInnerPadding = designSettings?.innerPadding?.desktopPadding;
  const tabletInnerPadding = designSettings?.innerPadding?.tabletPadding;
  const tabletMobileInnerPadding = designSettings?.innerPadding?.tabletMobilePadding;
  const mobileInnerPadding = designSettings?.innerPadding?.mobilePadding;
  const borderRadius = designSettings?.borderRadius || '0px';

  const classes = useStyles({
    linkColor,
    bleed,
    bgImage,
    backgroundColor,
    captionColor,
    repeat,
    desktopOuterPadding,
    tabletOuterPadding,
    tabletMobileOuterPadding,
    mobileOuterPadding,
    desktopInnerPadding,
    tabletInnerPadding,
    tabletMobileInnerPadding,
    mobileInnerPadding,
    borderRadius,
  });

  return (
    <Box
      id={idTag}
      component="section"
      color={foregroundColor}
      className={classes.section}
      mb="10px"
    >
      <div className={classes.column}>
        <HeroSectionHeader
          heading={heading}
          subheading={subheading}
          subtitle={subtitle}
          headingColor={headingColor}
          subheadingColor={subheadingColor}
          subtitleColor={subtitleColor}
          align={headerAlignment}
        />
        {(!!heading || !!subheading) && blocks.length > 0 ? <Box mt="16px" /> : null}
        <Grid container justifyContent="center" alignItems={blockAlignment} spacing={4}>
          {blocks.map((block, index) => {
            const { _type, _key } = block;
            const col = colCalculator(colArr[index]);
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
                  return <VideoBlock key={_key} url={block.url} ratio={block.ratio} />;
                case key === 'imageBlock':
                  return (
                    <ImgBlock {...mapFluidImgBlockToProps(block)} key={_key} loading="eager" />
                  );
                case key === 'heroBlock':
                  return (
                    <SectionBlock
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
                      key={block._key}
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
                case key === 'blockFormNetlify':
                  return (
                    <BlockFormNetlify key={block._key} {...mapBlockFormNetlifyToProps(block)} />
                  );
                case key === 'clickableImage':
                  return <ClickableImage {...mapClickableImageToProps(block)} />;
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
                item
                {...col}
                key={block._key}
                className={`${index === 0 && reverseOrder ? classes.blockOneReverse : null} ${
                  index === 1 && reverseOrder ? classes.blockTwoReverse : null
                }`}
              >
                <div className={classes.block}>{blockSelector(_type)}</div>
              </Grid>
            );
          })}
        </Grid>
        <HeroSectionFooter footer={footer} footerColor={footerColor} align={footerAlignment} />
      </div>
    </Box>
  );
}

export default LrFlexHero;
