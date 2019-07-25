const DRAWER_WIDTH = 271;
const MENU_LIST_ITEM_BORDER_WIDTH = 4;
const MENU_LIST_ITEM_FONT_WEIGHT = 500

/**
 * 
 * TODO: themes
	-  **light** theme
 `background-color: #FFFFFF`

	-  **gradient** theme
`background-image: linear-gradient(to right bottom, #fa7268, #f66e6f, #f16a75, #eb677b, #e46480, #de6285, #d76189, #cf608d, #c65f91, #bc5f94, #b25f96, #a75f97);`

	- **dark** theme #2C3033
 `background-color: #2C3033`

 */

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
    overflowY: 'hidden',
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.3)',
    borderRight: 'none',
    // dark theme
    backgroundColor: "#2C3033",
    // colorful theme
    // backgroundImage: 'linear-gradient(to right bottom, #fa7268, #f66e6f, #f16a75, #eb677b, #e46480, #de6285, #d76189, #cf608d, #c65f91, #bc5f94, #b25f96, #a75f97)'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.3)',
    borderRight: 'none',
    // dark theme
    backgroundColor: "#2C3033",
    // colorful theme
    // backgroundImage: 'linear-gradient(to right bottom, #fa7268, #f66e6f, #f16a75, #eb677b, #e46480, #de6285, #d76189, #cf608d, #c65f91, #bc5f94, #b25f96, #a75f97)',
    width: theme.spacing(9)
  },
  sidebar: {
    width: `calc( ${DRAWER_WIDTH}px - 1px)`,
    overflowY: 'auto'
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
    height: '63px',
    padding: '0 8px',
    // borderBottom: `1px solid #DFE3E8`,
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
  listHeader: {
    padding: '48px 8px 32px 32px'
  },
  listTitle: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF'
  },
  listTitleHidden: {
    height: 21,
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: 'pointer',
    '&:hover': {
      // dark theme
      backgroundColor: '#464B53',
      // colorful theme
      // backgroundColor: '#FF8895',// theme.palette.primary.light,
      // borderLeft: `${MENU_LIST_ITEM_BORDER_WIDTH}px solid ${theme.palette.primary.main}`,
      // borderRadius: `${MENU_LIST_ITEM_BORDER_WIDTH}px`,
      '& $listItemIcon': {
        color: '#FFF',
        // TODO: theme!!!!! theme.palette.primary.main,
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
      // dark theme
      backgroundColor: '#464B53',
      // colorful theme
      // backgroundColor: '#FF8895',//theme.palette.primary.light,
      '& $listItemIcon': {
        color: '#FFF',
        // TODO: theme!!!!! theme.palette.primary.main,
        marginLeft: `-${MENU_LIST_ITEM_BORDER_WIDTH}px`
      }
    },
  },
  activeListItem: {
    borderLeft: `${MENU_LIST_ITEM_BORDER_WIDTH}px solid #FFF`,
    // backgroundColor: '#A75F97',
    '& $listItemText': {
      color: '#FFF'
      // TODO: theme!!!!!
      //theme.palette.text.primary
    },
    '& $listItemIcon': {
      color:'#FFF',
      // TODO: theme!!!!! theme.palette.primary.main,
      marginLeft: `-${MENU_LIST_ITEM_BORDER_WIDTH}px`
    }
  },
  activeListSubItem: {
    // borderRight: `${MENU_LIST_ITEM_BORDER_WIDTH}px solid ${theme.palette.primary.main}`,
    '& $listItemText': {
      color: '#FFF',
      // TODO: theme!!!!! theme.palette.text.primary
    },
    '& $listItemIcon': {
      color: '#FFF',
      // TODO: theme!!!!! theme.palette.primary.main,
      marginLeft: `-${MENU_LIST_ITEM_BORDER_WIDTH}px`
    }
  },
  listItemIcon: {
    marginRight: 0,
    padding: '10px',
    // dark theme
    color: '#C2C7CB',
    // colorful theme
    // color: '#FADFE1',
  },
  listItemText: {
    fontWeight: MENU_LIST_ITEM_FONT_WEIGHT,
    // dark theme
    color: '#C2C7CB',
    // colorful theme
    // color: '#FADFE1',
    fontSize: 12
    // TODO: theme!!!!! theme.palette.text.secondary
  },
  listDivider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }, 
  hidden: {
    display: 'none'
  },
  sidebarCollapseButton: {
    color: '#FFF'
  }
});
