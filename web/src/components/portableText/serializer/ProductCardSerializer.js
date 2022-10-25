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
import SmartGrid from '../insertable/SmartGrid/SmartGrid';
import ClickableImage from '../insertable/ClickableImage';
import InsertableWrapper from '../insertable/InsertableWrapper';
import InsertableBtnWrapper from '../insertable/InsertableBtnWrapper';
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
        <InsertableWrapper>
          <Illustration illustration={node} />
        </InsertableWrapper>
      );
    },
    clickableImage({ node }) {
      return (
        <InsertableWrapper>
          <ClickableImage {...node} />
        </InsertableWrapper>
      );
    },
    videoEmbed({ node }) {
      return (
        <InsertableWrapper>
          <VideoEmbed url={node.url} ratio={node.ratio} />
        </InsertableWrapper>
      );
    },
    btnBlockMui({ node }) {
      switch (node.link[0]._type) {
        case 'jumpLink':
          return (
            <InsertableBtnWrapper>
              <ButtonJumpLink {...mapMuiBtnToProps(node)} />
            </InsertableBtnWrapper>
          );
        case 'internalLocal':
          return (
            <InsertableBtnWrapper>
              <ButtonInternalLocal {...mapMuiBtnToProps(node)} />
            </InsertableBtnWrapper>
          );
        case 'internalGlobal':
          return (
            <InsertableBtnWrapper>
              <ButtonInternalGlobal {...mapMuiBtnToProps(node)} />
            </InsertableBtnWrapper>
          );
        case 'externalLink':
          return (
            <InsertableBtnWrapper>
              <ButtonExternal {...mapMuiBtnToProps(node)} />
            </InsertableBtnWrapper>
          );
        case 'affiliateLink':
          return (
            <InsertableBtnWrapper>
              <ButtonAffiliate {...mapMuiBtnToProps(node)} />
            </InsertableBtnWrapper>
          );
        default:
          return <p>under development</p>;
      }
    },
    smartUnorderedList({ node }) {
      return <SmartUnorderedList {...node} />;
    },
    smartGrid({ node }) {
      return <SmartGrid {...node} />;
    },
  },
  marks: {
    hashId: ({ children }) => children,
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
