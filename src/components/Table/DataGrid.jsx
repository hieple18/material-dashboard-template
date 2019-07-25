import React, { Component } from 'react';
import {
    Paper,
    withStyles,
    Typography,
    IconButton,
    Link
} from '@material-ui/core';
import {
    Column,
    FilteringState, GroupingState,
    IntegratedFiltering, IntegratedGrouping, IntegratedPaging, IntegratedSelection, IntegratedSorting,
    PagingState, SelectionState, SortingState, DataTypeProvider, DataTypeProviderProps, CustomPaging,
    SearchState,
    RowDetailState
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableSelection,
    PagingPanel,
    Toolbar,
    SearchPanel,
    TableRowDetail
} from '@devexpress/dx-react-grid-material-ui';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { Loading } from 'components'

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

const URL = 'https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems';

// Component styles
const styles = theme => ({
    paper: {
        borderRadius: 20,
        padding: '16px',
        margin: '16px',
        boxShadow: "none",
        position: 'relative',
        border: '1px solid #DFE3E8'
    },
    searchPanel: {
        '&:before': {
            border: 'none'
        }
    },
    header: {
        position: 'absolute',
        top: 25,
        left: 40
    },
    headerText: {
        fontWeight: 500
    },
});


const detailContainerStyles = theme => ({
    detailContainer: {
        marginBottom: theme.spacing(3),
    },
    title: {
        color: theme.palette.text.primary,
        fontSize: theme.typography.fontSize,
    },
    paper: {
        paddingTop: theme.spacing(3.5),
    },
});

const gridDetailContainerBase = () => ({ row, classes }) => {
    return (
        <div className={classes.detailContainer}>
            <h5 className={classes.title}>
                {/* {`Notes about ${row.region}`} */}
                Note here
            </h5>
        </div>
    );
};
const gridDetailContainer = () => withStyles(detailContainerStyles, { name: 'Notes' })(gridDetailContainerBase);

class DataGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: this.props.columns,
            data: this.props.data,
            sorting: this.props.options.sorting,
            totalCount: this.props.data ? this.props.data.length : 0,
            pageSize: this.props.options.pageSize || 0,
            pageSizes: this.props.options.pageSizes || [5],
            currentPage: 0,
            // loading: true,
            loading: false,
            selection: this.props.options.selection || [],
            searchValue: '',
        };

        this.changeSorting = this.changeSorting.bind(this);
        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.changePageSize = this.changePageSize.bind(this);
        this.changeSelection = this.changeSelection.bind(this);
        this.changeSearchValue = this.changeSearchValue.bind(this);
    }

    componentDidMount() {
        // this.loadData();
    }

    componentDidUpdate() {
        // this.loadData();
    }

    changeSelection = (selection) => {
        this.setState({ selection })
        console.log("changeSelection --- selection:", selection)
    };

    changeSorting(sorting) {
        this.setState({
            // loading: true,
            sorting,
        });
        console.log("changeSorting --- sorting:", sorting)
    }

    changeCurrentPage(currentPage) {
        this.setState({
            // loading: true,
            currentPage,
        });
        console.log("changeCurrentPage --- currentPage:", currentPage)
    }

    changePageSize(pageSize) {
        const { totalCount, currentPage: stateCurrentPage } = this.state;
        const totalPages = Math.ceil(totalCount / pageSize);
        const currentPage = Math.min(stateCurrentPage, totalPages - 1);

        this.setState({
            // loading: true,
            pageSize,
            currentPage,
        });
        console.log("changePageSize --- pageSize:", pageSize)
    }

    changeSearchValue = value => this.setState({ searchValue: value });

    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTable: {
                paper: {
                    padding: 16,
                    margin: 16,
                    boxShadow: "none",
                    borderRadius: 20,
                    border: '1px solid #DFE3E8'
                }
            },
            MUIDataTableSelectCell: {
                headerCell: {
                    backgroundColor: '#eaeaea',
                    borderTop: '1px solid rgba(224, 224, 224, 1)'
                }
            },
            MUIDataTableHeadCell: {
                toolButton: {
                    height: 'unset',
                },
                fixedHeader: {
                    backgroundColor: '#eaeaea',
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
                    backgroundColor: '#eaeaea',
                    borderTop: '1px solid rgba(224, 224, 224, 1)',
                    fontSize: '14px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: '#BEC6D1',
                },
                root: {
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#eaeaea',

                    },
                    '&$selected': {
                        backgroundColor: 'gray'
                    }
                }
            },
            MuiTableCell: {
                root: {
                    fontSize: 14,
                    borderBottom: 'none'
                }
            },
            Toolbar: {
                toolbar: {
                    borderBottom: 'none'
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
            },
            MuiInput: {
                underline: {
                    '&:before': {
                        borderBottom: 'none!important'
                    }
                }
            },

        }
    })


    render() {
        const {
            tableColumnExtensions,
            sorting,
            pageSize,
            pageSizes,
            currentPage,
            totalCount,
            loading,
            selection,
            searchValue
        } = this.state;
        const { classes, data, columns, title, className, options, dataTypes } = this.props

        return (
            <MuiThemeProvider theme={this.getMuiTheme()}>
                <Paper className={classes.paper}>
                    <Grid
                        rows={data}
                        columns={columns}>

                        <div className={classes.header}>
                            <Typography className={classes.headerText} variant="h5">{title}</Typography>
                        </div>
                        <SortingState
                            sorting={sorting}
                            onSortingChange={this.changeSorting} />

                        {options.searchable &&
                            <SearchState
                                value={searchValue}
                                onValueChange={this.changeSearchValue} />}
                        {options.selectable &&
                            <SelectionState
                                selection={selection}
                                onSelectionChange={this.changeSelection} />}
                        <PagingState
                            currentPage={currentPage}
                            onCurrentPageChange={this.changeCurrentPage}
                            pageSize={pageSize}
                            onPageSizeChange={this.changePageSize} />

                        <IntegratedSorting />
                        <IntegratedFiltering />
                        {options.selectable &&
                            <IntegratedSelection />}
                        <IntegratedPaging />
                        
                        {dataTypes && dataTypes.map((type) => {
                            return(
                                <DataTypeProvider
                                    for={type.targetColumns}
                                    formatterComponent={type.formatterComponent}
                                    editorComponent={type.editorComponent}
                                    availableFilterOperations={type.availableFilterOperations}
                            />
                            )
                        })}
                        <CustomPaging
                            totalCount={totalCount}
                        />
                        <Table
                            columnExtensions={tableColumnExtensions}
                        />
                        <TableHeaderRow showSortingControls />

                        {/* <TableRowDetail
                            contentComponent={gridDetailContainer()} /> */}

                        {options.selectable &&
                            <TableSelection showSelectAll={options.showSelectAll} />}
                        <PagingPanel
                            pageSizes={pageSizes} />
                        <Toolbar />
                        {options.searchable &&
                            <SearchPanel className={classes.searchPanel} />}
                    </Grid>
                    {loading && <Loading />}
                </Paper>
            </MuiThemeProvider>
        );
    }
}

DataGrid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    columns: PropTypes.arrayOf(PropTypes.object),
    totalCount: PropTypes.number,
    // options: PropTypes.objectOf(PropTypes.shape({
    //     sorting: PropTypes.arrayOf(PropTypes.object),
    //     pageSize: PropTypes.number,
    //     pageSizes: PropTypes.arrayOf(PropTypes.number),
    //     selectable: PropTypes.bool
    // })),
    dataTypes: PropTypes.objectOf(PropTypes.shape({
        targetColumns: PropTypes.arrayOf(PropTypes.string).isRequired ,
        formatterComponent: PropTypes.node,
        editorComponent: PropTypes.node,
        availableFilterOperations: PropTypes.node
    })),
};

DataGrid.defaultProps = {
    columns: [
        { name: "Name", title: "Name" },
        { name: "Email", title: "Email" },
        { name: "Address", title: "Address" },
        { name: "Company", title: "Company" }
    ],
    data: [
        {
            "Name": "Hunter",
            "Email": "tincidunt@liberoMorbiaccumsan.net",
            "Address": "Enines",
            "Company": "Mus Proin Vel Incorporated"
        },
        {
            "Name": "Cedric",
            "Email": "tempus.risus.Donec@doloregestas.net",
            "Address": "Stalhille",
            "Company": "Nec Associates"
        },
        {
            "Name": "Luke",
            "Email": "fermentum.vel.mauris@hymenaeosMauris.org",
            "Address": "Shaki",
            "Company": "Augue Porttitor Interdum Incorporated"
        },
        {
            "Name": "Raphael",
            "Email": "cursus.non@maurisipsumporta.com",
            "Address": "Noorderwijk",
            "Company": "In Lorem Donec Institute"
        },
        {
            "Name": "Caesar",
            "Email": "Proin.vel.arcu@penatibus.co.uk",
            "Address": "Cavallino",
            "Company": "Auctor LLC"
        },
        {
            "Name": "Lucas",
            "Email": "Suspendisse.aliquet@eget.edu",
            "Address": "Gijzegem",
            "Company": "Aenean Euismod Mauris Corp."
        },
        {
            "Name": "Eagan",
            "Email": "mi.lacinia@VivamusnisiMauris.co.uk",
            "Address": "Hamme",
            "Company": "Pellentesque Massa Lobortis Institute"
        },
        {
            "Name": "Demetrius",
            "Email": "in@ametlorem.edu",
            "Address": "Perinaldo",
            "Company": "Fringilla Euismod Limited"
        },
        {
            "Name": "Brett",
            "Email": "sit@anuncIn.co.uk",
            "Address": "Burin",
            "Company": "Non Luctus Sit Institute"
        },
        {
            "Name": "Simon",
            "Email": "ullamcorper.nisl@pedeCras.ca",
            "Address": "Solapur",
            "Company": "Nibh Incorporated"
        },
        {
            "Name": "Brett",
            "Email": "risus.a@viverraDonec.net",
            "Address": "Dendermonde",
            "Company": "Dolor Limited"
        },
        {
            "Name": "Matthew",
            "Email": "vel.arcu@Etiamligulatortor.ca",
            "Address": "Stamford",
            "Company": "Ultricies Foundation"
        },
        {
            "Name": "Jonas",
            "Email": "iaculis.lacus@aliquetlobortisnisi.net",
            "Address": "Bingen",
            "Company": "Arcu Imperdiet Industries"
        },
        {
            "Name": "Hayes",
            "Email": "ac.nulla.In@Etiamvestibulummassa.net",
            "Address": "Sloten",
            "Company": "Velit Associates"
        }
    ],
    totalCount: 14,
    options: {
        sorting: [],
        pageSize: 5,
        pageSizes: [5, 10, 15, 20],
        selectable: false,
        searchable: false,
        showSelectAll: false
    },

}

export default withStyles(styles)(DataGrid)