import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import VideoEmbed from '../insertable/VideoEmbed';
import Illustration from '../insertable/Illustration';
import AffiliateLink from '../../link/LinkAffiliate';
import ExternalLink from '../../link/LinkExternal';
import InternalGlobal from '../../link/LinkInternalGlobal';
import InternalLocal from '../../link/LinkInternalLocal';
import ButtonAffiliate from '../../buttons/ButtonAffiliate';
import ButtonExternal from '../../buttons/ButtonExternal';
import ButtonInternalGlobal from '../../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../../buttons/ButtonInternalLocal';
import ButtonJumpLink from '../../buttons/ButtonJumpLink';
import SmartUnorderedList from '../insertable/SmartUnorderedList';
import ClickableImage from '../insertable/ClickableImage';
import VerticalSpacingWrapper from '../insertable/VerticalSpacingWrapper';
import { mapMuiBtnToProps } from '../../../lib/mapToProps';

const serializers = {
  // This is to render the whole block of content without the <div> tag as wrapping container (https://github.com/sanity-io/block-content-to-react)
  container: (props) => <>{props.children}</>,
  types: {
    block(props) {
      switch (props.node.style) {
        case 'blockquote':
          return props.children[0] ? (
            <Box
              component="blockquote"
              fontSize="h3.fontSize"
              fontWeight={100}
              borderColor="primary.main"
              pl={4}
              py={1}
              borderLeft={4}
            >
              &#8220; {props.children} &#8221;
            </Box>
          ) : (
            <br />
          );

        default:
          return props.children[0] ? (
            <Typography gutterBottom variant="body1">
              {props.children}
            </Typography>
          ) : (
            <br />
          );
      }
    },
    illustration({ node }) {
      return (
        <VerticalSpacingWrapper>
          <Illustration illustration={node} />
        </VerticalSpacingWrapper>
      );
    },
    clickableImage({ node }) {
      return (
        <VerticalSpacingWrapper>
          <ClickableImage {...node} />
        </VerticalSpacingWrapper>
      );
    },
    videoEmbed({ node }) {
      return (
        <VerticalSpacingWrapper>
          <VideoEmbed url={node.url} ratio={node.ratio} />
        </VerticalSpacingWrapper>
      );
    },
    btnBlockMui({ node }) {
      switch (node.link[0]._type) {
        case 'jumpLink':
          return (
            <VerticalSpacingWrapper>
              <ButtonJumpLink {...mapMuiBtnToProps(node)} />
            </VerticalSpacingWrapper>
          );
        case 'internalLocal':
          return (
            <VerticalSpacingWrapper>
              <ButtonInternalLocal {...mapMuiBtnToProps(node)} />
            </VerticalSpacingWrapper>
          );
        case 'internalGlobal':
          return (
            <VerticalSpacingWrapper>
              <ButtonInternalGlobal {...mapMuiBtnToProps(node)} />
            </VerticalSpacingWrapper>
          );
        case 'externalLink':
          return (
            <VerticalSpacingWrapper>
              <ButtonExternal {...mapMuiBtnToProps(node)} />
            </VerticalSpacingWrapper>
          );
        case 'affiliateLink':
          return (
            <VerticalSpacingWrapper>
              <ButtonAffiliate {...mapMuiBtnToProps(node)} />
            </VerticalSpacingWrapper>
          );
        default:
          return <p>under development</p>;
      }
    },
    smartUnorderedList({ node }) {
      return <SmartUnorderedList {...node} />;
    },
  },
  marks: {
    internalLocal: ({ mark, children }) => {
      const { slug = {} } = mark.reference;
      const { newTab, hashId, parameter } = mark;
      const baseSlug = slug.current === '/' ? `/` : `/${slug.current}`;
      const href = `${baseSlug}${hashId ? `#${hashId}` : ''}${parameter ? `?${parameter}` : ''}`;
      return (
        <InternalLocal href={href} newTab={newTab} className="pt-link">
          {children}
        </InternalLocal>
      );
    },
    internalGlobal: ({ mark, children }) => {
      const { href, newTab } = mark;
      return (
        <InternalGlobal href={href} newTab={newTab} className="pt-link">
          {children}
        </InternalGlobal>
      );
    },
    externalLink: ({ mark, children }) => {
      const { href, noreferrer, newTab } = mark;
      return (
        <ExternalLink href={href} noreferrer={noreferrer} newTab={newTab} className="pt-link">
          {children}
        </ExternalLink>
      );
    },
    affiliateLink: ({ mark, children }) => {
      const { href } = mark;
      return (
        <AffiliateLink href={href} className="pt-link">
          {children}
        </AffiliateLink>
      );
    },
  },
  list: ({ children }) => {
    switch (children[0].props.node.listItem) {
      case 'bullet':
        return <ul>{children}</ul>;
      default:
        return <ol>{children}</ol>;
    }
  },
  listItem: ({ children }) => (
    <Typography variant="body1" component="li">
      {children}
    </Typography>
  ),
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
