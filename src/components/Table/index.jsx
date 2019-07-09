import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles, CircularProgress, Typography } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// Component styles
const styles = theme => ({
    root: {
        padding: theme.spacing(4)
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
    }
});

class CustomTable extends Component {

    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTable: {
                paper: {
                    padding: '16px',
                    margin: '16px',
                    boxShadow: "none",
                    borderRadius: '20px',
                }
            },
            MuiTable: {
                root: {
                    // borderCollapse: 'separate',
                    // borderSpacing: '0 8px',
                },
            },
            MUIDataTableSelectCell: {
                headerCell: {
                    // backgroundColor: "transparent",
                    backgroundColor: '#FCFBFC',
                    borderTop: '1px solid rgba(224, 224, 224, 1)'
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    // padding: '16px 32px',
                    fontSize: '14px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#BEC6D1',
                    // backgroundColor: '#FCFBFC',
                    // borderTop: '1px solid rgba(224, 224, 224, 1)'
                },
                toolButton: {
                    height: 'unset',
                },
                fixedHeader: {
                    backgroundColor: '#FCFBFC',
                    // borderTop: '1px solid rgba(224, 224, 224, 1)',
                    // borderBottom: '1px solid rgba(224, 224, 224, 1)',
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    padding: '16px',
                    fontSize: '16px'
                },

            },
            MUIDataTableBodyRow: {
                root: {
                    padding: "8px",
                    margin: "8px 0px",
                    backgroundColor: '#FFF',
                },
            },
            MuiTableRow: {
                head: {
                    backgroundColor: '#FCFBFC',
                    borderTop: '1px solid rgba(224, 224, 224, 1)'
                    // boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'                
                }
            },
            MuiTableCell: {
                root: {
                }
            },
            MuiTableSortLabel: {
                icon: {

                }
            },
            MUIDataTablePagination: {
                root: {
                    '&:last-child': {
                        padding: 0,
                        borderBottom: 'none'
                    }
                }
            },
            MuiTablePagination: {
                toolbar: {
                    paddingRight: 0
                },
                select: {
                    fontSize: '16px'
                }
            },
            MuiTypography: {
                caption: {
                    fontSize: '16px'
                }
            },
            MUIDataTableToolbarSelect: {
                root: {
                    backgroundColor: 'transparent'
                }
            },
            MuiPaper: {
                elevation1: {
                    boxShadow: 'none'
                }
            },
            MuiIconButton: {
                root: {
                    '& .MUIDataTableToolbar > .icon': {

                            border: 'solid 1px grey',
                            margin: '0 5px',
                    }
                }
            }
        }
    })

    render() {
        const { classes, className, data, columns, options, title } = this.props;
        return (
            <MuiThemeProvider theme={this.getMuiTheme()}>
                <MUIDataTable
                    title={title}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </MuiThemeProvider>
        );

    }

};

CustomTable.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array.isRequired,
    options: PropTypes.object
};

CustomTable.defaultProps = {
    data: [],
    columns: [],
    options: {
        filterType: "dropdown",
        responsive: "scroll"
    }
};

export default withStyles(styles)(CustomTable);