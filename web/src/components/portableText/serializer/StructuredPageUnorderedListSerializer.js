// THIS FILE SHOULD NOT GO INTO V1! It's CP specific!
import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Box } from '@material-ui/core';
import VideoEmbed from '../insertable/VideoEmbed';
import BasicTable from '../insertable/BasicTable';
import Illustration from '../insertable/Illustration';
import HighlightBox from '../insertable/highlightBox/HighlightBox';
import SmartTable from '../insertable/SmartTable';
import JumpLink from '../../link/JumpLink';
import AffiliateLink from '../../link/LinkAffiliate';
import ExternalLink from '../../link/LinkExternal';
import InternalGlobal from '../../link/LinkInternalGlobal';
import InternalLocal from '../../link/LinkInternalLocal';
import ButtonAffiliate from '../../buttons/ButtonAffiliate';
import ButtonExternal from '../../buttons/ButtonExternal';
import ButtonInternalGlobal from '../../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../../buttons/ButtonInternalLocal';
import ButtonJumpLink from '../../buttons/ButtonJumpLink';
import ClickableImage from '../insertable/ClickableImage';
import InsertableWrapper from '../insertable/InsertableWrapper';
import InsertableBtnWrapper from '../insertable/InsertableBtnWrapper';
import { mapMuiBtnToProps } from '../../../lib/mapToProps';

const serializers = {
  // This is to render the whole block of content without the <div> tag as wrapping container (https://github.com/sanity-io/block-content-to-react)
  container: (props) => <>{props.children}</>,
  types: {
    block(props) {
      return props.children[0] ? (
        <Box
          fontSize="20px"
          fontWeight="500"
          component="p"
          margin="0"
          lineHeight="40px"
          color="#999999"
        >
          {props.children}
        </Box>
      ) : (
        <br style={{ marginBottom: '39px' }} />
      );
    },
    illustration({ node }) {
      return (
        <InsertableWrapper>
          <Illustration illustration={node} />
        </InsertableWrapper>
      );
    },
    basicTable({ node }) {
      return (
        <InsertableWrapper>
          <BasicTable basicTable={node} />
        </InsertableWrapper>
      );
    },
    highlightBox({ node }) {
      return (
        <InsertableWrapper>
          <HighlightBox box={node} />
        </InsertableWrapper>
      );
    },
    smartTable({ node }) {
      return (
        <InsertableWrapper>
          <SmartTable smartTable={node} />
        </InsertableWrapper>
      );
    },
    instagram() {
      return <p>Work in progress</p>;
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
    clickableImage({ node }) {
      return (
        <InsertableWrapper>
          <ClickableImage {...node} />
        </InsertableWrapper>
      );
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
    jumpLink: ({ mark, children }) => {
      const { hashId } = mark;
      return (
        <JumpLink hash={hashId} className="pt-link">
          {children}
        </JumpLink>
      );
    },
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
