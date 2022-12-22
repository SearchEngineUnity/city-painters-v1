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
    <Helmet>
      <script type="text/partytown" key="gtm-script">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P68M4K4');`}
      </script>
    </Helmet>
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
