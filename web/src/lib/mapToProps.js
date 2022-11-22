export function mapSeoToProps(
  {
    pageTitle,
    metaDescription,
    fbShareMetaPack,
    twitterShareMetaPack,
    slug,
    noindex,
    nofollow,
    canonical,
  },
  type,
) {
  return {
    type,
    pageTitle,
    metaDescription,
    fbShareMetaPack,
    twitterShareMetaPack,
    slug: slug.current,
    noindex,
    nofollow,
    canonical,
  };
}

export function mapFluidImgBlockToProps({ _rawAsset, alt, _rawCaption, maxHeight, maxWidth }) {
  return {
    image: _rawAsset,
    alt,
    caption: _rawCaption,
    maxHeight,
    maxWidth,
  };
}

export function mapGuideHeroToProps({
  h1,
  _rawHeroSubtitle,
  displayDate,
  heroImage,
  includeDisclaimer,
}) {
  return {
    h1,
    subtitle: _rawHeroSubtitle,
    date: displayDate,
    image: heroImage,
    includeDisclaimer,
  };
}

// combine w/ mapLrFlexToProps
export function mapLrHeroToProps({
  _rawFooter,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  blocks,
  designSettings,
  header,
  idTag,
  layout,
  reverseOrder,
}) {
  return {
    idTag,
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    blocks,
    footer: _rawFooter,
    layout,
    blockAlignment,
    headerAlignment,
    footerAlignment,
    reverseOrder,
    designSettings,
  };
}

export function mapNavBrandToProps({ brandGroup, alt }) {
  return {
    alt,
    brandGroup,
  };
}

export function mapNavItemToProps({ isButton, title, nav }) {
  return {
    isButton,
    url: nav?.slug?.current,
    title,
  };
}

export function mapNavGroupToProps({ title, nav, group }) {
  return {
    title,
    url: nav?.slug?.current,
    subGroup: group,
  };
}

// combine w/ mapLrHeroToProps
export function mapLrFlexToProps({
  _rawFooter,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  blocks,
  designSettings,
  header,
  idTag,
  layout,
  reverseOrder,
}) {
  return {
    idTag,
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    blocks,
    footer: _rawFooter,
    layout,
    blockAlignment,
    headerAlignment,
    footerAlignment,
    reverseOrder,
    designSettings,
  };
}

export function mapSectionBlockToProps({
  header,
  _rawText,
  _rawFooter,
  headerAlignment,
  textAlignment,
  footerAlignment,
}) {
  return {
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    sectionText: _rawText,
    footer: _rawFooter,
    headerAlignment,
    textAlignment,
    footerAlignment,
  };
}

export function mapStackSectionToProps({
  _rawFooter,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  blocks,
  designSettings,
  header,
  idTag,
  blockWidth,
}) {
  return {
    idTag,
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    blocks,
    footer: _rawFooter,
    blockWidth,
    blockAlignment,
    headerAlignment,
    footerAlignment,
    designSettings,
  };
}

export function mapPaginatedListingSectionToProps({
  _rawFooter,
  headerAlignment,
  footerAlignment,
  layout = '1/1/1/1',
  designSettings,
  header,
  idTag,
}) {
  return {
    idTag,
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    footer: _rawFooter,
    layout,
    headerAlignment,
    footerAlignment,
    designSettings,
  };
}

export function mapMuiBtnToProps({ idTag, btnAlignment, link, text, design }) {
  return {
    idTag,
    text,
    variant: design?.settings?.variant,
    disableElevation: design?.settings?.disableElevation,
    disableFocusRipple: design?.settings?.disableFocusRipple,
    disableRipple: design?.settings?.disableRipple,
    fullWidth: design?.settings?.fullWidth,
    borderRadius: design?.settings?.borderRadius,
    padding: design?.settings?.padding,
    link,
    colors: design?.colors,
    alignment: btnAlignment,
    typography: design?.typography,
    bgImage: design?.settings?.variant === 'contained' ? design?.bgImage?.asset?.url : null,
  };
}

export function mapMuiBtnSubmitToProps({ settings, colors, typography, bgImage }) {
  return {
    variant: settings?.variant,
    disableElevation: settings?.disableElevation,
    disableFocusRipple: settings?.disableFocusRipple,
    disableRipple: settings?.disableRipple,
    fullWidth: settings?.fullWidth,
    borderRadius: settings?.borderRadius,
    padding: settings?.padding,
    colors,
    typography,
    bgImage: settings?.variant === 'contained' ? bgImage?.asset?.url : null,
  };
}

export function mapGridFlexToProps({
  header,
  _rawFooter,
  headerAlignment,
  footerAlignment,
  layout,
  tiles,
  tileOption,
}) {
  return {
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    footer: _rawFooter,
    headerAlignment,
    footerAlignment,
    layout,
    tiles,
    tileOption,
  };
}

export function mapFluidImgToProps({ _rawAsset, alt, maxHeight, maxWidth, _rawCaption }) {
  return {
    image: _rawAsset,
    alt,
    maxHeight,
    maxWidth,
    caption: _rawCaption,
  };
}

export function mapBlockFormNetlifyToProps({
  _rawFormNetlify,
  heading,
  headingLevel,
  titleAlignment,
  _rawFormStyle,
}) {
  return {
    heading,
    headingLevel,
    titleAlignment,
    form: _rawFormNetlify,
    style: _rawFormStyle,
  };
}

export function mapTestimonialGridToProps({
  header,
  _rawFooter,
  headerAlignment,
  footerAlignment,
  _rawTestimonialList,
  tileOption,
  layout,
}) {
  return {
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    footer: _rawFooter,
    headerAlignment,
    footerAlignment,
    testimonialList: _rawTestimonialList,
    tileOption,
    layout,
  };
}

export function mapTestimonialListToProps({ image, text, name, role, company }) {
  return {
    image: image?.asset,
    alt: image?.alt,
    text,
    name,
    role,
    company,
  };
}

export function mapClickableImageToProps({ _rawImage, link, alignment, borderRadius }) {
  return {
    image: _rawImage,
    link,
    alignment,
    borderRadius,
  };
}

export function mapSmartGridBlockToProps({
  header,
  _rawFooter,
  headerAlignment,
  footerAlignment,
  layout,
  _rawTiles,
}) {
  return {
    heading: header?.heading,
    subheading: header?.subheading,
    subtitle: header?._rawSubtitle,
    footer: _rawFooter,
    headerAlignment,
    footerAlignment,
    layout,
    tiles: _rawTiles,
  };
}
