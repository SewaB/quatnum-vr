'use client'
import React from 'react'
import Image from 'next/image'

import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'

import useScrollTrigger from '@mui/material/useScrollTrigger'
import MenuIcon from '@mui/icons-material/Menu'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Socials from '../../components/Socials'
import Link from 'next-intl/link'
import CallIcon from '@mui/icons-material/Call'
import Typography from '@mui/material/Typography'

export default function NavbarContainer({ content, locale }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
  const navitems = [
    { title: content.about, id: 'about' },
    { title: content.games, id: 'games' },
    { title: content.price, id: 'price' },
    { title: content.certificate, id: 'price' },
    { title: content.event, id: 'price' },
    { title: content.faq, id: 'faq' },
    { title: content.contacts, id: 'contacts' }
  ]

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Button
        href='#header'
        variant='text'
        sx={{
          my: 1
        }}
      >
        <Image
          src='/logo.svg'
          quality={100}
          width={120}
          height={38}
          alt=''
          style={{ objectFit: 'contain' }}
        />
      </Button>
      <List sx={{ p: 0 }}>
        {navitems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ color: '#fff' }} href={'#' + item.id}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ display: 'flex', px: 1 }}>
        <Select
          value={locale}
          inputProps={{
            MenuProps: {
              disableScrollLock: true,
              sx: {
                '.MuiPaper-root': {
                  backgroundColor: 'rgba(0,0,0,0.5)'
                }
              }
            }
          }}
          IconComponent={() => null}
          sx={{
            borderRadius: 0,
            '.MuiSelect-select': {
              border: '0',
              p: '0!important',
              borderRadius: 0,
              fontSize: '1rem',
              '.MuiButtonBase-root': {
                color: '#fff',
                fontWeight: { md: 'bold' }
              }
            },
            '.MuiOutlinedInput-notchedOutline': {
              display: 'none'
            }
          }}
        >
          <MenuItem value='ua'>
            <Link href='/' locale='ua'>
              <NavbarItem lang>UA</NavbarItem>
            </Link>
          </MenuItem>
          <MenuItem value='en'>
            <Link href='/' locale='en'>
              <NavbarItem lang>EN</NavbarItem>
            </Link>
          </MenuItem>
          <MenuItem value='ru'>
            <Link href='/' locale='ru'>
              <NavbarItem lang>RU</NavbarItem>
            </Link>
          </MenuItem>
        </Select>
      </Box>

      <Socials />
    </Box>
  )

  return (
    <>
      <AppBar
        component='nav'
        position='fixed'
        sx={{
          backgroundColor: 'rgba(47, 47, 51, 0.7)',
          backdropFilter: 'blur(4px)'
        }}
      >
        <Container maxWidth='xl' disableGutters={true}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'center',
              '& a': {
                fontSize: '1rem'
              }
            }}
          >
            <Box
              sx={{
                mr: 'auto',
                display: 'flex'
              }}
            >
              <Box
                sx={{
                  display: {
                    xs: 'flex',
                    sm: 'none',
                    gap: '0.5rem',
                    alignItems: 'center'
                  }
                }}
              >
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Image
                  src='/logo.svg'
                  priority
                  quality={100}
                  width={120}
                  height={38}
                  alt=''
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <Button
                href='#header'
                variant='text'
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  p: 0,
                  mr: 1
                }}
              >
                <Image
                  src='/logo.svg'
                  priority
                  quality={100}
                  width={155}
                  height={40}
                  alt=''
                  style={{ objectFit: 'contain' }}
                />
              </Button>

              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' }
                }}
              >
                <NavbarItem link='#about' mainColor hidden>
                  {content.about}
                </NavbarItem>
                <NavbarItem link='#price' mainColor>
                  {content.price}
                </NavbarItem>
                <NavbarItem link='#price' mainColor>
                  {content.event}
                </NavbarItem>
                <NavbarItem link='#price' mainColor>
                  {content.certificate}
                </NavbarItem>
                <NavbarItem link='#games' mainColor hidden>
                  {content.games}
                </NavbarItem>
                <NavbarItem link='#faq' mainColor hidden>
                  {content.faq}
                </NavbarItem>
                <NavbarItem link='#contacts' mainColor>
                  {content.contacts}
                </NavbarItem>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: '0.9rem', lg: '1.5rem' }
              }}
            >
              <Typography
                component='a'
                href='tel:38000000'
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  gap: '0.5rem',
                  alignItems: 'center',
                  '&:hover': {
                    color: '#ec318a'
                  }
                }}
              >
                <CallIcon fontSize='small' />
                +380 00 00 0 000
              </Typography>
              <Button
                href='#booking'
                sx={{
                  color: '#000',
                  textTransform: 'capitalize',
                  backgroundColor: '#fcd222',
                  fontWeight: 'bold',
                  position: 'relative',
                  borderRadius: 0,
                  py: { xs: 0.5, sm: 0.75 },
                  px: 2,
                  minWidth: '140px',
                  clipPath:
                    'polygon(0 0, 92% 0, 100% 30%, 100% 100%, 80% 100%, 80% 90%, 70% 90%, 70% 100%, 8% 100%, 0 70%)',

                  //
                  // '&:after': {
                  //   content: "''",
                  //   position: 'absolute',
                  //   backgroundColor: 'red',
                  //   transform: 'translate(10px, -10px)',
                  //   width: '100%',
                  //   height: '100%',
                  //   opacity: 1,
                  //   clipPath:
                  //     'polygon(0 0, 92% 0, 100% 30%, 100% 100%, 80% 100%, 80% 90%, 70% 90%, 70% 100%, 8% 100%, 0 70%)'
                  // },

                  '&:hover': {
                    color: '#fff',
                    backgroundColor: '#ec318a'
                    // boxShadow: '0px 0px 2rem 0px #fff',
                    // '&:after': {
                    //   opacity: 1
                    // }
                  }
                }}
              >
                {content.book}
              </Button>

              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' }
                }}
              >
                <Select
                  value={locale}
                  inputProps={{
                    MenuProps: {
                      disableScrollLock: true,
                      sx: {
                        '.MuiPaper-root': {
                          backgroundColor: 'rgba(0,0,0,0.5)'
                        }
                      }
                    }
                  }}
                  IconComponent={() => null}
                  sx={{
                    borderRadius: 0,
                    '.MuiSelect-select': {
                      border: '0',
                      p: '0!important',
                      borderRadius: 0,
                      '.MuiButtonBase-root': {
                        color: '#fff',
                        fontWeight: { md: 'bold' }
                      }
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                      display: 'none'
                    }
                  }}
                >
                  <MenuItem value='ua'>
                    <Link href='/' locale='ua'>
                      <NavbarItem lang>UA</NavbarItem>
                    </Link>
                  </MenuItem>
                  <MenuItem value='en'>
                    <Link href='/' locale='en'>
                      <NavbarItem lang>EN</NavbarItem>
                    </Link>
                  </MenuItem>
                  <MenuItem value='ru'>
                    <Link href='/' locale='ru'>
                      <NavbarItem lang>RU</NavbarItem>
                    </Link>
                  </MenuItem>
                </Select>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              backgroundColor: 'rgba(30, 31, 67 , 1)',
              width: 240
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <BookButton>{content.book}</BookButton>
    </>
  )
}

function BookButton(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 700
  })

  return (
    <Fade in={trigger}>
      <Button className='book-button' href='#booking' variant='text'>
        <span className='glowing-txt'>{children}</span>
      </Button>
    </Fade>
  )
}

function NavbarItem({ link, children, lang, mainColor, hidden }) {
  return (
    <Button
      href={link}
      variant='text'
      sx={{
        display: { xs: hidden ? 'none' : 'flex', lg: 'flex' },
        color: mainColor || lang ? '#fcd222' : '#fff',
        fontWeight: mainColor ? 'bold' : null,
        textTransform: 'capitalize',
        minWidth: lang ? '40px' : 'unset',
        fontSize: 'inherit',

        '&:before': {
          content: "''",
          position: 'absolute',
          bottom: 0,
          width: 0,
          height: 2,
          backgroundColor: '#fbdd54',
          transition: '0.3s all'
        },
        '&:after': {
          content: "''",
          position: 'absolute',
          top: 0,
          width: 0,
          height: 2,
          backgroundColor: '#fbdd54',
          transition: '0.3s all'
        },
        '&:hover': {
          color: '#fbdd54',
          '&:before,&:after': {
            width: '100%'
          }
        }
      }}
    >
      {children}
    </Button>
  )
}
