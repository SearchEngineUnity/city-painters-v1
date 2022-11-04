/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Icon,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  Paper,
  Popper,
  Link,
  ClickAwayListener,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { navigate } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  primaryOutline: {
    outlineColor: '#8BC44A',
    '&:hover': {
      color: '#8BC44A',
    },
  },
  dropdownMenu: {
    borderTop: '2px solid #8BC44A',
    backgroundColor: '#2E2739',
    minWidth: '200px',
    fontSize: '1.4rem',
    color: '#f1f1f1',
  },
  hoverItem: {
    '&:hover': {
      color: '#8BC44A',
    },
    '&.Mui-selected': {
      color: '#8BC44A',
      backgroundColor: 'transparent',
    },
  },
}));

const NavGroup = ({ title, subGroup, location, position }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleNavigate = (nav) => {
    navigate(`/${nav.slug.current}`);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div role="none">
      <Link
        ref={anchorRef}
        component="button"
        color="primary"
        onClick={handleToggle}
        type="button"
        style={{ lineHeight: '56px' }}
        role="menuitem"
        aria-controls={open ? title.replace(' ', '-') : undefined}
        aria-expanded={open}
        aria-haspopup="true"
        underline="none"
        className={classes.primaryOutline}
      >
        <Box
          fontSize="16px"
          lineHeight="26px"
          fontFamily="'Open Sans', sans-serif"
          fontWeight="700"
          color="black"
          my={2}
        >
          {title}
          {open ? (
            <ExpandLess style={{ verticalAlign: 'middle' }} />
          ) : (
            <ExpandMore style={{ verticalAlign: 'middle' }} />
          )}
        </Box>
      </Link>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement={position}
        role={undefined}
        disablePortal
        style={{ zIndex: 1900, top: '26px' }}
      >
        <Paper role="none" square elevation={0} className={classes.dropdownMenu}>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList
              role="menu"
              autoFocusItem={open}
              id={title.replace(' ', '-')}
              // eslint-disable-next-line react/jsx-no-bind
              onKeyDown={handleListKeyDown}
            >
              {subGroup.map(({ icon, title: itemTitle, nav, _key }) => (
                <MenuItem
                  role="menuitem"
                  onClick={() => handleNavigate(nav)}
                  key={_key}
                  selected={`/${nav.slug.current}` === location.pathname}
                  className={classes.hoverItem}
                >
                  {icon && (
                    <ListItemIcon>
                      <Icon>{icon}</Icon>
                    </ListItemIcon>
                  )}
                  <ListItemText primary={itemTitle} />
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </div>
  );
};

export default NavGroup;
