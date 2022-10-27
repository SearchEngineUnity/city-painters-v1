import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import JumpLink from '../../link/JumpLink';
import ExternalLink from '../../link/LinkExternal';
import InternalGlobal from '../../link/LinkInternalGlobal';
import InternalLocal from '../../link/LinkInternalLocal';
import AffiliateLink from '../../link/LinkAffiliate';
import Illustration from '../insertable/Illustration';
import ClickableImage from '../insertable/ClickableImage';
import ButtonJumpLink from '../../buttons/ButtonJumpLink';
import ButtonAffiliate from '../../buttons/ButtonAffiliate';
import ButtonExternal from '../../buttons/ButtonExternal';
import ButtonInternalGlobal from '../../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../../buttons/ButtonInternalLocal';
import InsertableBtnWrapper from '../insertable/InsertableBtnWrapper';
import { mapMuiBtnToProps } from '../../../lib/mapToProps';

const NoIndentUl = styled.ul`
  list-style-type: disc;
  margin-left: 1.4rem;
  padding-left: 0;
  margin-top: 0;

  & > li {
    position: relative;
  }
`;

const NoIndentOl = styled.ol`
  list-style-type: decimal;
  margin-left: 1.4rem;
  padding-left: 0;
  margin-top: 0;

  & > li {
    position: relative;
  }
`;

const serializers = {
  // This is to render the whole block of content without the <div> tag as wrapping container (https://github.com/sanity-io/block-content-to-react)
  container: (props) => <>{props.children}</>,
  types: {
    block(props) {
      return props.children[0] ? (
        <Typography gutterBottom variant="body1">
          {props.children}
        </Typography>
      ) : (
        <br />
      );
    },
    illustration({ node }) {
      return (
        <InsertableBtnWrapper>
          <Illustration illustration={node} />
        </InsertableBtnWrapper>
      );
    },
    clickableImage({ node }) {
      return <ClickableImage {...node} />;
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
  list: ({ children }) => {
    switch (children[0].props.node.listItem) {
      case 'bullet':
        return <NoIndentUl>{children}</NoIndentUl>;
      default:
        return <NoIndentOl>{children}</NoIndentOl>;
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
