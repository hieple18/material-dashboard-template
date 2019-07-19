import { relative } from "path"

const TOP_HEIGHT = 64
export default theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.border}`,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    height: TOP_HEIGHT,
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%'
  },
  title: {
    marginLeft: theme.spacing(1)
  },
  menuButton: {
    marginLeft: '-4px'
  },
  notificationsButton: {
    marginLeft: 'auto'
  },
  leftButtons: {
    marginLeft: 'auto'
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  hidden: {
    display: 'none'
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    display: 'inline-flex',
    fontSize: '14px',
    fontWeight: 500,
    height: '36px',
    width: '36px'
  },
  profile: {
    padding: '16px'
  },
  profileButton: {
    textTranform: 'none'
  },
  dropdownContainer: {
    position: 'relative',
    marginLeft: 'auto'
  },
  dropdown: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
  },
  
  wrapper: {
    background: 'transparent',
    '&:before': {
      position: 'absolute',
      backgroundColor: '#FFF',
      width: 16,
      height: 16,
      content: "''",
      top: 7,
      left: 'calc(100% - 32px)',
      transform: 'rotate(45deg)',
      borderTop: '1px solid #d9d9d9',
      borderLeft: '1px solid #d9d9d9',

    }
  },
  transparent: {
    background: 'transparent',
    paddingTop: 15,
    boxShadow: 'none',
  }
});