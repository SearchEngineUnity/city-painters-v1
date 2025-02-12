/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import MainNav from '../components/navs/headerElements/MainNav';
import ContactUsTag from '../components/navs/footerElements/ContactUsTag';
import CpFooter from '../components/navs/footerElements/CpFooter';

const MyLayout = ({ data, children, location }) => (
  <>
    {data.mainNav && <MainNav location={location} />}
    <>{children}</>
    <ContactUsTag />
    <CpFooter />
  </>
);

export default function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          footer: sanityNavMenu(type: { eq: "mainFooter" }) {
            type
          }
          mainNav: sanityNavMenu(type: { eq: "mainNav" }) {
            type
          }
        }
      `}
      render={(data) => <MyLayout data={data} {...props} />}
    />
  );
}
