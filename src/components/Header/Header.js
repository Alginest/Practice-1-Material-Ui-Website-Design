import React from 'react'
import {
  AppBar,
  IconButton,
  Link,
  Toolbar,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import { socialLinks } from '../../data/socialData'
const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: '#222',
  },
  logo: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  item2: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    color: '#fff',
  },
}))
const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position='static' elevation={0} className={classes.appbar}>
      <Toolbar className={classes.toolbar} variant='dense'>
        <Typography variant='h6' className={classes.logo}>
          Bnet
        </Typography>
        <div className={classes.item}>
          <IconButton>
            <MailIcon className={classes.icon} />
          </IconButton>
          <Typography>info@company.com</Typography>
        </div>
        <div className={classes.item2}>
          <IconButton>
            <PhoneIcon className={classes.icon} />
          </IconButton>
          <Typography>080-020-0340</Typography>
        </div>
        {socialLinks.map((link, index) => {
          const { url, icon } = link
          return (
            <Link href={url} key={index}>
              <IconButton>{icon}</IconButton>
            </Link>
          )
        })}
      </Toolbar>
    </AppBar>
  )
}

export default Header
