export default theme => ({
    root: {
      padding: theme.spacing(4),
      display: 'flex',
      flexWrap: 'wrap',
    },
    content: {
      marginTop: '150px',
      textAlign: 'center'
    },
    image: {
      display: 'inline-block',
      marginTop: '50px',
      maxWidth: '100%',
      width: '554px'
    },
    margin: {
      margin: theme.spacing(1),
      marginBottom: theme.spacing(3),
    },
});