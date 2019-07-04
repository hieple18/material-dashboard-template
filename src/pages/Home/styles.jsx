export default theme => ({
    root: {
        flex: 1,    
        backgroundColor: theme.palette.common.white,
        height: '100%',
        boxShadow: '10px 10px 47px 13px rgba(0,0,0,0.1)',
        borderRadius: '5px'
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
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      backgroundColor: theme.palette.warning.main,
      color:  theme.palette.warning.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.warning.light,
        color:  theme.palette.warning.dark,
        boxShadow: 'inset 0px 0px 0px 2px ' + theme.palette.warning.dark,
        boxSizing: 'border-box', 
      }
    },
    fabIcon: {
      marginLeft: theme.spacing(1),
    },
});
  