import React from 'react';
import { graphql } from 'gatsby';
import { createTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Layout from '../containers/layout';
import Seo from '../components/Seo';
import LrHero from '../components/sections/LrFlexHero';
import LrFlex from '../components/sections/StructuredLrFlex';
import StackFlex from '../components/sections/StackFlex';
import StackHero from '../components/sections/StackHero';
import {
  mapLrHeroToProps,
  mapSeoToProps,
  mapLrFlexToProps,
  mapStackSectionToProps,
} from '../lib/mapToProps';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query PageTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      sections {
        ... on SanityLrHero {
          _key
          _type
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialGrid {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityFlexListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              idTag
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawFooter(resolveReferences: { maxDepth: 4 })
              _rawText(resolveReferences: { maxDepth: 5 })
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          idTag
          layout
          reverseOrder
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                alpha
                hex
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          _rawFooter(resolveReferences: { maxDepth: 4 })
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
          blockAlignment
          footerAlignment
          headerAlignment
        }
        ... on SanityLrFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 4 })
          blockAlignment
          headerAlignment
          footerAlignment
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialGrid {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityFlexListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 12 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
          idTag
          layout
          reverseOrder
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                alpha
                hex
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
        }
        ... on SanityStackHero {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 4 })
          blockWidth
          footerAlignment
          headerAlignment
          idTag
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialGrid {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityFlexListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 5 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                alpha
                hex
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
        }
        ... on SanityStackFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 4 })
          blockWidth
          footerAlignment
          headerAlignment
          idTag
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialGrid {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityFlexListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 12 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                alpha
                hex
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
        }
      }
      canonical
      slug {
        current
      }
      pageTitle
      metaDescription
      twitterShareMetaPack {
        twitterShareImage {
          asset {
            url
          }
        }
        twitterShareDescription
        twitterShareTitle
      }
      nofollow
      noindex
      fbShareMetaPack {
        fbShareTitle
        fbShareDescription
        fbShareImage {
          asset {
            url
          }
        }
      }
    }
  }
`;

const StructuredPage = ({ data, location }) => {
  const type = 'page';

  const prevTheme = useTheme();

  const theme = createTheme({
    ...prevTheme,
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1201,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout location={location}>
        <Seo {...mapSeoToProps(data.page, type)} />
        <main>
          {data.page.sections.map((section) => {
            const { _type } = section;
            switch (_type) {
              case 'lrHero':
                return <LrHero key={section._key} {...mapLrHeroToProps(section)} />;

              case 'lrFlex':
                return <LrFlex key={section._key} {...mapLrFlexToProps(section)} />;

              case 'stackFlex':
                return <StackFlex key={section._key} {...mapStackSectionToProps(section)} />;

              case 'stackHero':
                return <StackHero key={section._key} {...mapStackSectionToProps(section)} />;

              default:
                return <div>Still under development</div>;
            }
          })}
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default StructuredPage;
