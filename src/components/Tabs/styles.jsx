
export default theme => ({
    root:{
        flexGrow: 1,
    },
    tab: {
        // textTransform: 'none',
        // color: '#fff',
        // fontWeight: theme.typography.fontWeightRegular,
        // fontSize: theme.typography.pxToRem(15),
        // marginRight: theme.spacing(1),
        // '&:focus': {
        //   opacity: 1,
        // },
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
});