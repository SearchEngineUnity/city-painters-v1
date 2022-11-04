import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Container, Toolbar } from '@material-ui/core';
import NavItem from './NavItem';
import NavGroup from './NavGroup';
import NavBrand from './NavBrand';
import NavPhone from './NavPhone';
import NavClickableImage from './NavClickableImage';
import MainNavHamburger from './MainNavHamburger';
import { mapNavBrandToProps, mapNavItemToProps, mapNavGroupToProps } from '../../../lib/mapToProps';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  items: {
    padding: '0px 10px',
    borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
    '&:first-child': {
      padding: '0px 10px 0px 0px',
      border: 'none',
    },
    '&:last-child': {
      padding: '0px 0px 0px 10px',
    },
  },
}));

const MainNav = ({ data, location }) => {
  const classes = useStyles();

  return (
    <>
      {data.sanityNavMenu && (
        <AppBar
          position="relative"
          classes={{ colorDefault: classes.appBar }}
          color="default"
          elevation={0}
        >
          <Container
            maxWidth="lg"
            component="nav"
            aria-label="main navigation header"
            style={{ paddingLeft: '16px', paddingRight: '16px' }}
          >
            {data.sanityNavMenu.menuArray.map((menuRow, menuIndex) => {
              // menu group is not a navgroup. it is the top level menu item.
              const { menuGroup, _key } = menuRow;

              return (
                <Box
                  display={{
                    xs: menuIndex === 0 ? 'block' : 'none',
                    sm: menuIndex === 0 ? 'block' : 'none',
                    md: 'block',
                    lg: 'block',
                    xl: 'block',
                  }}
                  key={_key}
                  role="none"
                >
                  <Toolbar
                    style={{
                      display: 'flex',
                      justifyContent: menuIndex === 0 ? 'space-between' : 'flex-start',
                      columnGap: menuIndex === 0 ? '24px' : '0px',
                    }}
                    disableGutters
                    role="menubar"
                  >
                    {menuGroup.map((group, index) => {
                      const { _type, _key: groupKey } = group;
                      const arrayLength = menuGroup.length;
                      let position = 'bottom-start';

                      if (index + 1 === arrayLength) {
                        position = 'bottom-end';
                      }

                      if (index > 0 && index + 1 < arrayLength) {
                        position = 'bottom';
                      }

                      switch (_type) {
                        case 'navClickableImage':
                          return (
                            <Box py={1}>
                              <NavClickableImage
                                image={group.image}
                                link={group.link}
                                key={groupKey}
                              />
                            </Box>
                          );
                        case 'navBrand':
                          return (
                            <Box py={1}>
                              <NavBrand
                                {...mapNavBrandToProps(group)}
                                url={data.sanityContactInfo.homePage}
                                key={groupKey}
                              />
                            </Box>
                          );
                        case 'navPhone':
                          return (
                            <Box py={1}>
                              <NavPhone
                                text={group.text}
                                key={groupKey}
                                number={group.phoneNumber}
                              />
                            </Box>
                          );
                        case 'navItem':
                          return (
                            <Box key={groupKey} role="none" className={classes.items}>
                              <NavItem {...mapNavItemToProps(group)} location={location} />
                            </Box>
                          );
                        case 'navGroup':
                          return (
                            <Box key={groupKey} role="none" className={classes.items}>
                              <NavGroup
                                {...mapNavGroupToProps(group)}
                                location={location}
                                position={position}
                              />
                            </Box>
                          );

                        default:
                          return <div>under construction</div>;
                      }
                    })}
                    {menuIndex === 0 && (
                      <MainNavHamburger
                        bottomMenu={data.sanityNavMenu.menuArray[1].menuGroup}
                        topMenu={data.sanityNavMenu.menuArray[0].menuGroup}
                        brandUrl={data.sanityContactInfo.homePage}
                        location={location}
                      />
                    )}
                  </Toolbar>
                </Box>
              );
            })}
          </Container>
        </AppBar>
      )}
    </>
  );
};

export default function MainNavigation(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          sanityNavMenu(type: { eq: "mainNav" }) {
            type
            menuArray {
              _key
              menuGroup {
                ... on SanityNavClickableImage {
                  _key
                  _type
                  image: _rawImage(resolveReferences: { maxDepth: 10 })
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
                ... on SanityNavBrand {
                  _key
                  _type
                  alt
                  brandGroup {
                    _key
                    height
                    type
                    brand {
                      _id
                      logo {
                        asset {
                          url
                        }
                      }
                    }
                  }
                }
                ... on SanityNavGroup {
                  _key
                  _type
                  title
                  group {
                    title
                    isButton
                    icon
                    nav {
                      ... on SanityPage {
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        slug {
                          current
                        }
                      }
                      ... on SanityFlexListingPage {
                        slug {
                          current
                        }
                      }
                    }
                    _key
                  }
                }
                ... on SanityNavItem {
                  _key
                  _type
                  isButton
                  title
                  nav {
                    ... on SanityPage {
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      slug {
                        current
                      }
                    }
                    ... on SanityFlexListingPage {
                      slug {
                        current
                      }
                    }
                  }
                }
                ... on SanityNavPhone {
                  _key
                  _type
                  text
                  phoneNumber
                }
              }
            }
          }
          sanityContactInfo {
            homePage
          }
        }
      `}
      render={(data) => <MainNav data={data} {...props} />}
    />
  );
}
