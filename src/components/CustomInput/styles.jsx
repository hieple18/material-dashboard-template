const VALUE_FONT_SIZE = 14;
const INPUT_PADDING = 12;
export default theme => {
    return {
        root: {
            padding: '12px',
            borderRadius: 6,
            minHeight: 40
        },
        label: {
            fontSize: 16,
            color: '#7C88A1'
        },
        numeric: {
            padding: '12px',
            borderRadius: 6,
            minHeight: 40

        },
        emailContainer: {
            display: 'flex',
            justifyContent: 'stretch',
            alignItems: 'center'
        },
        emailAt: {
            fontSize: 16,
            margin: '0 4px'
        }
    }
}