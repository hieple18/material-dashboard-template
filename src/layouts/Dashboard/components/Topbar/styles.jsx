import { relative } from "path";

const TOP_HEIGHT = 64;
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
    margin: '10px'
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
  }
});