/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const Seo = ({
  data,
  type,
  pageTitle,
  metaDescription,
  fbShareMetaPack,
  twitterShareMetaPack,
  slug,
  noindex,
  nofollow,
  canonical,
  heroImage,
}) => {
  let metaURL = data.sanityGeneralSettings.siteDomain;
  const socialImage = data.sanityGeneralSettings.socialImage.asset.url;
  let ogType = '';
  const robots = `${nofollow ? 'nofollow' : ''} ${noindex ? 'noindex' : ''}`;

  switch (type) {
    case 'page':
      metaURL = slug === '/' ? metaURL : `${metaURL}/${slug}`;
      ogType = 'website';
      break;
    case 'guide':
      metaURL = `${metaURL}/${slug}`;
      ogType = 'article';
      break;
    default:
      break;
  }

  const ogTitle = fbShareMetaPack?.fbShareTitle || pageTitle;
  const ogDescription = fbShareMetaPack?.fbShareDescription || metaDescription;
  const ogImage = fbShareMetaPack?.fbShareImage?.asset.url || heroImage || socialImage;

  const twitterTitle = twitterShareMetaPack?.twitterShareTitle || ogTitle || pageTitle;
  const twitterImage =
    twitterShareMetaPack?.twitterShareImage?.asset?.url || heroImage || socialImage;
  const twitterDescription =
    twitterShareMetaPack?.twitterShareDescription || ogDescription || metaDescription;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={metaURL} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {(noindex || nofollow) && <meta name="robots" content={robots} />}
      {canonical ? (
        <link rel="canonical" href={canonical} />
      ) : (
        <link rel="canonical" href={metaURL} />
      )}
    </Helmet>
  );
};

export default function MySeo(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          sanityGeneralSettings {
            siteDomain
            socialImage {
              asset {
                url
              }
            }
          }
        }
      `}
      render={(data) => <Seo data={data} {...props} />}
    />
  );
}
