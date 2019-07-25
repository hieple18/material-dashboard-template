import image from 'assets/images/lost-01.jpg'

export default theme => ({
  root: {
    flex: 1,
    height: '100vh',
    // backgroundColor: theme.palette.common.white,
    // boxShadow: '10px 10px 47px 13px rgba(0,0,0,0.1)',
    padding: theme.spacing(3),
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  floatingPage: { 
    // position: 'absolute', 
    // left: '50%', top: '50%',
    // transform: 'translate(-50%, -50%)',
    // minHeight: '70%',
    // minWidth: '70%',
    // borderRadius: '5px',
  },
  fullPage: {
    width:'100%',
    height: '100%'
  },
  leftContainer: {
    padding: theme.spacing(3, 2),

  },
  imageContainer: {
    padding: 0
  },
  img: {
    display: 'block',
    width: '100%',
  },
  fab: {
    margin: theme.spacing(2),
    borderRadius: '50px',
    padding: theme.spacing(2, 4),
    // paddingBottom: theme.spacing(2),
    // paddingLeft: theme.spacing(4),
    // paddingRight: theme.spacing(4),
    // backgroundColor: '#CD60A1',//theme.palette.warning.main,
    backgroundImage: 'linear-gradient(to right bottom, #fa7268, #f66e6f, #f16a75, #eb677b, #e46480, #de6285, #d76189, #cf608d, #c65f91, #bc5f94, #b25f96, #a75f97)',
    color: theme.palette.warning.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.warning.light,
      color: '#450C6B',//theme.palette.warning.dark,
      boxShadow: 'inset 0px 0px 0px 2px #450C6B',// + theme.palette.warning.dark,
      boxSizing: 'border-box',
    },
  },
  leftContainer: {
  },
  fabIcon: {
    marginLeft: theme.spacing(1),
  },
  menuBar: {
    // padding: theme.spacing(2),
    flexDirection: 'row',
    display: 'flex'
  },
  menu: {
    marginLeft: 'auto',
    padding: theme.spacing(1, 2),
  },
  menuButton: {
    padding: theme.spacing(1, 3),
    margin: theme.spacing(0, 2),
  },
  groupButton: {
    borderColor: theme.palette.warning.main
  },
  filledBg: {
    backgroundColor: theme.palette.common.neutral
  },
  bigText: {
    margin: theme.spacing(2),
    fontSize: '50px',
    fontWeight: '600'
  },
  mediumText: {
    margin: theme.spacing(2),
    fontSize: '20px',
    fontWeight: '300'
  }
});
