import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styled from 'styled-components';
import fb from './fb.png';
import insta from './insta.png';
import homeStars from './homeStars.png';
import linkedIn from './linkedIn.png';

const FooterNav = styled.div`
  background-color: #332c3e;
  font-family: 'Open Sans', sans-serif;
  text-align: left;
  font-size: 16px;
  font-weight: 300;
  color: #f1f1f1;
  padding-top: 24px;
  padding-bottom: 24px;
`;
const List = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`;
const Title = styled.p`
  font-size: 16px;
  font-weight: 800;
  line-height: 1.1;
  border-bottom: 2px solid #8bc44a;
  padding: 10px 0;
`;
const IconItem = styled.p`
  text-decoration: none;
  color: #f1f1f1;
  font-size: 16px;
  font-weight: 500;
`;
const EmailItem = styled.a`
  text-decoration: none;
  &:link,
  &:visited {
    color: #f1f1f1;
    font-size: 16px;
    font-weight: 500;
  }
  &:hover,
  &:focus,
  &:active {
    color: #8bc44a;
  }
`;
const Social = styled.a`
  &:link,
  &:visited {
    color: #f1f1f1;
  }
  &:hover,
  &:focus,
  &:active {
    color: #8bc44a;
  }
`;
const NavItem = styled(Link)`
  text-decoration: none;
  &:link,
  &:visited {
    color: #f1f1f1;
    font-size: 16px;
    font-weight: 500;
  }
  &:hover,
  &:focus,
  &:active {
    color: #8bc44a;
  }
`;
const Footer = styled.footer`
  background-color: #2e2739;
  font-family: 'Open Sans', sans-serif;
  text-align: left;
  font-size: 13px;
  font-weight: 300;
  color: #848484;
  line-height: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #8bc44a;
`;
const Hyperlink = styled(Link)`
  text-decoration: none;
  &:link,
  &:visited {
    color: white;
    font-size: 13px;
    font-weight: 300;
  }
  &:hover,
  &:focus,
  &:active {
    color: #8bc44a;
  }
`;

function CpFooter() {
  return (
    <>
      <FooterNav>
        <Container
          maxWidth="lg"
          component="nav"
          role="menubar"
          style={{ paddingLeft: '16px', paddingRight: '16px' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Title>CONTACT INFO</Title>
              <List>
                <li>
                  <IconItem>
                    <RoomIcon color="primary" />
                    &nbsp;&nbsp;10 Navy Wharf Ct, Toronto, ON M5V 3V2, Canada
                  </IconItem>
                </li>
                <li>
                  <IconItem>
                    <PhoneIcon color="primary" />
                    &nbsp;&nbsp;Toronto: 647-237-6900
                  </IconItem>
                </li>
                <li>
                  <IconItem>
                    <MailOutlineIcon color="primary" />
                    &nbsp;&nbsp;
                    <EmailItem href="mailto:info@thecitypainters.com">
                      info@thecitypainters.com
                    </EmailItem>
                  </IconItem>
                </li>
              </List>
              <br />
              <Grid container spacing={3}>
                <Grid item>
                  <Social
                    href="https://www.facebook.com/thecitypainters"
                    target="_blank"
                    rel="noopener"
                  >
                    <img src={fb} alt="facebook" width="48" height="48" />
                  </Social>
                </Grid>
                <Grid item>
                  <Social
                    href="https://www.instagram.com/citypainters"
                    target="_blank"
                    rel="noopener"
                  >
                    <img src={insta} alt="instagram" width="48" height="48" />
                  </Social>
                </Grid>
                <Grid item>
                  <Social
                    href="https://homestars.com/companies/2795419-the-city-painters?service_area=1857483"
                    target="_blank"
                    rel="noopener"
                  >
                    <img src={homeStars} alt="homestars" width="48" height="48" />
                  </Social>
                </Grid>
                <Grid item>
                  <Social
                    href="https://www.linkedin.com/company/the-city-painters"
                    target="_blank"
                    rel="noopener"
                  >
                    <img src={linkedIn} alt="linkedin" width="48" height="48" />
                  </Social>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Title>PAINTING SERVICES</Title>
              <List>
                <li>
                  <NavItem to="/interior-painting" target="_blank" rel="noopener">
                    Home Interior Painting
                  </NavItem>
                </li>
                <li>
                  <NavItem to="/exterior-painting" target="_blank" rel="noopener">
                    Home Exterior Painting
                  </NavItem>
                </li>
                <li>
                  <NavItem to="/condo-painters-toronto" target="_blank" rel="noopener">
                    Condo Painting
                  </NavItem>
                </li>
                <li>
                  <NavItem to="/apartment-painters" target="_blank" rel="noopener">
                    Apartment Painting
                  </NavItem>
                </li>
                <li>
                  <NavItem href="/commercial-painting-services" target="_blank" rel="noopener">
                    Commercial Painting
                  </NavItem>
                </li>
                <li>
                  <NavItem to="/epoxy-flooring" target="_blank" rel="noopener">
                    Epoxy Flooring Solutions
                  </NavItem>
                </li>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Title>RESOURCE CENTER</Title>
              <List>
                <li>
                  <NavItem to="/best-primer-cabinets" target="_blank" rel="noopener">
                    Best Primer for Cabinets
                  </NavItem>
                </li>
                <li>
                  <NavItem href="/best-paint-sprayer-ceiling" target="_blank" rel="noopener">
                    Best Ceiling Paint Sprayer
                  </NavItem>
                </li>
                <li>
                  <NavItem href="/best-paint-brush-for-trim" target="_blank" rel="noopener">
                    Best Trim Paint Brush
                  </NavItem>
                </li>
                <li>
                  <NavItem href="/best-paint-brush-for-cabinets" target="_blank" rel="noopener">
                    Best Cabinets Paint Brush
                  </NavItem>
                </li>
                <li>
                  <NavItem href="/cost-to-paint-kitchen-cabinets" target="_blank" rel="noopener">
                    Cost to Paint Cabinets
                  </NavItem>
                </li>
                <li>
                  <NavItem to="/blog" target="_blank" rel="noopener">
                    All Resources
                  </NavItem>
                </li>
              </List>
            </Grid>
          </Grid>
        </Container>
      </FooterNav>
      <Footer>
        <Container
          maxWidth="lg"
          component="nav"
          role="menubar"
          style={{ paddingLeft: '16px', paddingRight: '16px' }}
        >
          <p>
            <Hyperlink to="/privacy-policy" target="_blank" rel="noopener">
              Privacy Policy
            </Hyperlink>
            &nbsp; - Copyright {new Date().getFullYear()} The City Painters
          </p>
        </Container>
      </Footer>
    </>
  );
}
export default CpFooter;
