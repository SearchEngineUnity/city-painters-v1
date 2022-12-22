/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <Partytown
      key="partytown"
      debug
      forward={['dataLayer.push']}
      resolveUrl={(url) => {
        // https://partytown.builder.io/proxying-requests
        const proxyDomains = ['www.googletagmanager.com'];
        if (proxyDomains.includes(url.hostname)) {
          const proxyUrl = new URL('https://wwww.thecitypanters.com/~partytown');
          proxyUrl.searchParams.append('url', url);
          return proxyUrl;
        }
      }}
    />,
    <script
      type="text/partytown"
      key="gtm-script"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P68M4K4');`,
      }}
    />,
    // <script
    //   key="analytics"
    //   src="https://www.google-analytics.com/analytics.js"
    //   type="text/partytown"
    // />,
  ]);

  // For GTM, we will need to add this noscript tag to the body of the HTML
  setPreBodyComponents([
    <noscript
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `
                  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P68M4K4" height="0" width="0"
                      style="display:none;visibility:hidden"></iframe>
                `,
      }}
    />,
  ]);
};
