import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import styled from 'styled-components';
import VideoEmbed from '../insertable/VideoEmbed';
import Illustration from '../insertable/Illustration';
import HighlightBox from '../insertable/highlightBox/HighlightBox';
import SmartTable from '../insertable/SmartTable';
import SmartGrid from '../insertable/SmartGrid/SmartGrid';
import SmartUnorderedList from '../insertable/StructuredPageSmartUnorderedList';
import SmartOrderedList from '../insertable/SmartOrderedList';
import ProductCard from '../insertable/productCard/ProductCard';
import AffiliateLink from '../../link/LinkAffiliate';
import JumpLink from '../../link/JumpLink';
import ExternalLink from '../../link/LinkExternal';
import InternalGlobal from '../../link/LinkInternalGlobal';
import InternalLocal from '../../link/LinkInternalLocal';
import ButtonAffiliate from '../../buttons/ButtonAffiliate';
import ButtonExternal from '../../buttons/ButtonExternal';
import ButtonInternalGlobal from '../../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../../buttons/ButtonInternalLocal';
import ButtonJumpLink from '../../buttons/ButtonJumpLink';
import ClickableImage from '../insertable/ClickableImage';
import InsertableStructuredPageWrapper from '../insertable/InsertableStructuredPageWrapper';
import { mapMuiBtnToProps } from '../../../lib/mapToProps';

const StyledTypography = styled(Typography)`
  margin-top: 1.35em;
`;

const serializers = {
  // This is to render the whole block of content without the <div> tag as wrapping container (https://github.com/sanity-io/block-content-to-react)
  container: (props) => <>{props.children}</>,
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h3':
          return props.children[0] ? (
            <StyledTypography
              gutterBottom
              variant="h3"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </StyledTypography>
          ) : (
            <br />
          );

        case 'h4':
          return props.children[0] ? (
            <StyledTypography
              gutterBottom
              variant="h4"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </StyledTypography>
          ) : (
            <br />
          );

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
        <InsertableStructuredPageWrapper>
          <Illustration illustration={node} />
        </InsertableStructuredPageWrapper>
      );
    },
    highlightBox({ node }) {
      return (
        <InsertableStructuredPageWrapper>
          <HighlightBox box={node} />
        </InsertableStructuredPageWrapper>
      );
    },
    smartTable({ node }) {
      return (
        <InsertableStructuredPageWrapper>
          <SmartTable smartTable={node} />
        </InsertableStructuredPageWrapper>
      );
    },
    videoEmbed({ node }) {
      return (
        <InsertableStructuredPageWrapper>
          <VideoEmbed url={node.url} ratio={node.ratio} />
        </InsertableStructuredPageWrapper>
      );
    },
    btnBlockMui({ node }) {
      switch (node.link[0]._type) {
        case 'jumpLink':
          return (
            <InsertableStructuredPageWrapper>
              <ButtonJumpLink {...mapMuiBtnToProps(node)} />
            </InsertableStructuredPageWrapper>
          );
        case 'internalLocal':
          return (
            <InsertableStructuredPageWrapper>
              <ButtonInternalLocal {...mapMuiBtnToProps(node)} />
            </InsertableStructuredPageWrapper>
          );
        case 'internalGlobal':
          return (
            <InsertableStructuredPageWrapper>
              <ButtonInternalGlobal {...mapMuiBtnToProps(node)} />
            </InsertableStructuredPageWrapper>
          );
        case 'externalLink':
          return (
            <InsertableStructuredPageWrapper>
              <ButtonExternal {...mapMuiBtnToProps(node)} />
            </InsertableStructuredPageWrapper>
          );
        case 'affiliateLink':
          return (
            <InsertableStructuredPageWrapper>
              <ButtonAffiliate {...mapMuiBtnToProps(node)} />
            </InsertableStructuredPageWrapper>
          );
        default:
          return <p>under development</p>;
      }
    },
    smartOrderedList({ node }) {
      return <SmartOrderedList {...node} />; // check this later may need wrapper
    },
    smartUnorderedList({ node }) {
      return <SmartUnorderedList {...node} />; // check this later may need wrapper
    },
    productCard({ node }) {
      return (
        <InsertableStructuredPageWrapper>
          <ProductCard {...node} />
        </InsertableStructuredPageWrapper>
      );
    },
    clickableImage({ node }) {
      return (
        <InsertableStructuredPageWrapper>
          <ClickableImage {...node} />
        </InsertableStructuredPageWrapper>
      );
    },
    smartGrid({ node }) {
      return <SmartGrid {...node} />;
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
    jumpLink: ({ mark, children }) => {
      const { hashId } = mark;
      return (
        <JumpLink hash={hashId} className="pt-link">
          {children}
        </JumpLink>
      );
    },
  },
  listItem: ({ children }) => (
    <Typography variant="body1" component="li">
      {children}
    </Typography>
  ),
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
