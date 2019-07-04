export default theme => ({
    root: {
      backgroundColor: theme.palette.common.white,
      
    },
    foreground: {
        position: 'absolute',
        top: 0,
        left: 0,
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '80%',
        minHeight: '70%',
    }
});
  