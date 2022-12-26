import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { MenuList, SwipeableDrawer } from '@mui/material';

const pages = ['Blog', 'Travel', 'About'];

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgba(0, 0, 0, 0.6)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        webkitBackdropFilter: 'blur(5px)',
        zIndex: 20,
        my: { md: 4 }
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          px: { xs: 0, md: 5 }
        }}
      >
        <Typography
          variant="h4"
          noWrap
          component={Link}
          href="/"
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'quicksand',
            fontWeight: 'bold'
          }}
        >
          amresh mishra
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerOpen}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
          >
            <MenuList
              sx={{
                width: '30vw',
                mt: '5vh',
                ml: '5vw'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleDrawerClose}>
                  <Typography
                    textAlign="center"
                    component={Link}
                    href={`/${page.toLowerCase()}`}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </MenuList>
          </SwipeableDrawer>
        </Box>
        <Typography
          variant="h5"
          noWrap
          component={Link}
          href="/"
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'quicksand',
            fontWeight: 'bold',
            justifyContent: 'flex-start'
          }}
        >
          amresh
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'end',
            gap: 2
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                textTransform: 'capitalize',
                fontFamily: 'Inter',
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 'normal'
              }}
              component={Link}
              href={`/${page.toLowerCase()}`}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
