const DRAWER_WIDTH = 271;
const MENU_LIST_ITEM_BORDER_WIDTH = 4;
const MENU_LIST_ITEM_FONT_WEIGHT = 500
export default theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(9)
    // width: theme.spacing(5) + 1,
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(7) + 1,
    // },
  },
  sidebar: {
    width: `calc( ${DRAWER_WIDTH}px - 1px)`
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
    height: '63px',
    padding: '0 8px',
    borderBottom: `1px solid #DFE3E8`,
  },
  logoWrapper: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexShrink: 0,

  },
  logoLink: {
    fontSize: 0
  },
  logoImage: {
    cursor: 'pointer',
    maxWidth: '100%',
    padding: '50px',
  },
  divider: {
    marginBottom: theme.spacing(2)
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: '100px',
    height: '100px'
  },
  nameText: {
    marginTop: theme.spacing(2)
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      // borderLeft: `${MENU_LIST_ITEM_BORDER_WIDTH}px solid ${theme.palette.primary.main}`,
      // borderRadius: `${MENU_LIST_ITEM_BORDER_WIDTH}px`,
      '& $listItemIcon': {
        color: theme.palette.primary.main,
        // marginLeft: `-${MENU_LIST_ITEM_BORDER_WIDTH}px`
      }
    },
    '& + &': {
      // marginTop: theme.spacing(1)
    }
  },
  listSubItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      '& $listItemIcon': {
        color: theme.palette.primary.main,
        marginLeft: `-${MENU_LIST_ITEM_BORDER_WIDTH}px`
      }
    },
  },
  activeListItem: {
    borderLeft: `${MENU_LIST_ITEM_BORDER_WIDTH}px solid ${theme.palette.primary.main}`,
    '& $listItemText': {
      color: theme.palette.text.primary
    },
    '& $listItemIcon': {
      color: theme.palette.primary.main,
      marginLeft: `-${MENU_LIST_ITEM_BORDER_WIDTH}px`
    }
  },
  activeListSubItem: {
    // borderRight: `${MENU_LIST_ITEM_BORDER_WIDTH}px solid ${theme.palette.primary.main}`,
    '& $listItemText': {
      color: theme.palette.text.primary
    },
    '& $listItemIcon': {
      color: theme.palette.primary.main,
      marginLeft: `-${MENU_LIST_ITEM_BORDER_WIDTH}px`
    }
  },
  listItemIcon: {
    marginRight: 0,
    padding: '10px'
  },
  listItemText: {
    fontWeight: MENU_LIST_ITEM_FONT_WEIGHT,
    color: theme.palette.text.secondary
  },
  listDivider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }, 
  hidden: {
    display: 'none'
  }
});
