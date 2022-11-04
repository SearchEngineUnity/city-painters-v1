/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    position: 'sticky',
    top: 0,
  },
  activeLink: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
}));
// Used to calculate each heading's offset from the top of the page.
// This will be compared to window.scrollY to determine which heading
// is currently active.
const accumulateOffsetTop = (el, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }
  return totalOffset;
};
function Toc({ toc }) {
  const classes = useStyles();
  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
  });
  // Controls which heading is currently highlighted as active.
  const [active, setActive] = useState(null);
  // Read heading titles, depths and nodes from the DOM.
  useEffect(() => {
    // Fallback to sensible defaults for headingSelector, getTitle and getDepth
    // inside useEffect rather than specifying them as Toc default props to avoid
    // the need for useMemo and useCallback, resp.
    // Otherwise, these would change on every render and since this effect calls
    // setHeadings which triggers a rerender, it would cause an infinite loop.
    // The default selector targets all headings (h1, h2, ..., h6) inside
    // a main element. You can pass in whatever string or array of strings
    // targets all the headings you want to appear in the ToC.

    const nodes = Array.from(document.querySelectorAll('h2'));
    setHeadings({ titles: toc, nodes });
  }, [toc]);
  // Add scroll event listener to update currently active heading.
  useEffect(() => {
    const scrollHandler = () => {
      const { titles, nodes } = headings;
      // Offsets need to be recomputed inside scrollHandler because
      // lazily-loaded content increases offsets as user scrolls down.
      const offsets = nodes.map((el) => accumulateOffsetTop(el));
      const activeIndex = offsets.findIndex((offset) => offset > window.scrollY + 45);
      // activeIndex could be greater than the number of titles and this is why it is failing.
      // if activeIndex > headings.titles.length then the index should be max titles.length
      setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1);
    };
    window.addEventListener(`scroll`, scrollHandler);
    return () => window.removeEventListener(`scroll`, scrollHandler);
  }, [headings]);
  // add hash on scroll based on current active heading
  useEffect(() => {
    const { origin, pathname } = window.location;
    let { hash } = window.location;
    console.log(active);
    if (active === -1 || active === null) {
      if (active === -1) {
        hash = '';
      }
      window.history.replaceState(null, null, `${origin + pathname + hash}`);
    } else {
      window.history.replaceState(
        null,
        null,
        `${origin + pathname}#${headings.titles[active].hashID}`,
      );
    }
  }, [active, headings]);

  return (
    <Box p={3} className={classes.root}>
      <Typography component="p" variant="h4" gutterBottom>
        Table of Contents
      </Typography>
      {headings.titles.map(({ title, hashId }, index) => (
        <Box mb={1} fontSize="body2.fontSize" display="block" key={hashId}>
          <Link
            to={`#${hashId}`}
            className={`${active === index ? classes.activeLink : null} ${classes.link}`}
            underline="hover"
            onClick={(e) => {
              e.preventDefault();
              window.history.replaceState(
                null,
                null,
                `${window.location.origin + window.location.pathname}#${hashId}`,
              );
              headings.nodes[index].scrollIntoView({
                behavior: `smooth`,
                block: `start`,
              });
            }}
          >
            {title}
          </Link>
        </Box>
      ))}
    </Box>
  );
}
export default Toc;
