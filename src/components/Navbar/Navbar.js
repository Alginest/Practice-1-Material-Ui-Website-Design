import React from 'react'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  List,
  Link,
  ListItem,
  Badge,
} from '@material-ui/core'
import MailIcon from '@mui/icons-material/Mail'
import { Stack } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#fff',
    height: 100,
  },
  toolbar: {
    height: '100%',
  },
  logo: {
    color: '#068201',
    fontSize: '50px',
    flexGrow: '1',
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexGrow: '2',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    color: '#222',
  },
  link: {
    fontSize: '20px',
    color: '#222',
  },
  stack: {
    flexGrow: '1',
    justifyContent: 'center',
  },
}))
const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appbar} position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography color='secondary' className={classes.logo}>
          Zay
        </Typography>
        <List className={classes.list}>
          <ListItem>
            <Link href='#' className={classes.link}>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#' className={classes.link}>
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#' className={classes.link}>
              Shop
            </Link>
          </ListItem>
          <ListItem>
            <Link href='#' className={classes.link}>
              Contact
            </Link>
          </ListItem>
        </List>
        <Stack
          spacing={4}
          direction='row'
          sx={{ color: 'action.active' }}
          className={classes.stack}
        >
          <Badge color='secondary' badgeContent={99}>
            <MailIcon className={classes.icon} />
          </Badge>
          <Badge color='secondary' badgeContent={100}>
            <MailIcon className={classes.icon} />
          </Badge>
          <Badge color='secondary' badgeContent={1000} max={999}>
            <MailIcon className={classes.icon} />
          </Badge>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
