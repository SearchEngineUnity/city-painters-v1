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
          const proxyUrl = new URL('https://wwww.thecitypanters.com/');
          proxyUrl.searchParams.append('url', url);
          return proxyUrl;
        }
      }}
    />,
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
