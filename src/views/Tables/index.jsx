import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid, Typography } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import {
  Table,
  DataGrid
} from 'components'

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

class Tables extends Component {

  render() {
    const { classes } = this.props;
    const columns = [
      { name: "Name", title: "Name" },
      { name: "Gender", title: "Gender" },
      { name: "Email", title: "Email" },
      { name: "Address", title: "Address" },
      { name: "Position", title: "Position" },
      { name: "Attachment", title: "Attachment" },
      { name: "Status", title: "Status" },
      // { name: "Notes", title: "Notes" },
    ];
    const data = [
      {
        "Name": "Keven Walter",
        "Email": "tincidunt@liberoMorbiaccumsan.net",
        "Gender": "Female",
        "Status": "Accepted",
        "Address": "Enines",
        "Position": "Front-end Developer",
        // "Notes": "sdfghkjdfhcuhvrntker"
      },
      {
        "Name": "Macey Gulgowski",
        "Email": "tempus.risus.Donec@doloregestas.net",
        "Gender": "Male",
        "Status": "Accepted",
        "Address": "Stalhille",
        "Position": "PHP Programmer", 
        "Attachment": "https://www.cbs.dk/files/cbs.dk/cv_template_sheet_en.pdf"
      },
      {
        "Name": "Luke",
        "Email": "fermentum.vel.mauris@hymenaeosMauris.org",
        "Gender": "Female",
        "Status": "Rejected",
        "Address": "Shaki",
        "Position": "Designer"
      },
      {
        "Name": "Raphael",
        "Email": "cursus.non@maurisipsumporta.com",
        "Gender": "Male",
        "Status": "New",
        "Address": "Noorderwijk",
        "Position": "Tester", 
        "Attachment": "https://www.cbs.dk/files/cbs.dk/cv_template_sheet_en.pdf"
      },
      {
        "Name": "Caesar",
        "Email": "Proin.vel.arcu@penatibus.co.uk",
        "Gender": "Female",
        "Status": "Read",
        "Address": "Cavallino",
        "Position": "Java Developer"
      },
      {
        "Name": "Lucas",
        "Email": "Suspendisse.aliquet@eget.edu",
        "Gender": "Female",
        "Status": "New",
        "Address": "Gijzegem",
        "Position": "PM"
      },
      {
        "Name": "Eagan",
        "Email": "mi.lacinia@VivamusnisiMauris.co.uk",
        "Gender": "Female",
        "Status": "Accepted",
        "Address": "Hamme",
        "Position": "QA/QC"
      },
      {
        "Name": "Demetrius",
        "Email": "in@ametlorem.edu",
        "Gender": "Female",
        "Status": "New",
        "Address": "Perinaldo",
        "Position": "Intern"
      },
      {
        "Name": "Brett",
        "Email": "sit@anuncIn.co.uk",
        "Gender": "Female",
        "Status": "New",
        "Address": "Burin",
        "Position": "HR"
      },
      {
        "Name": "Simon",
        "Email": "ullamcorper.nisl@pedeCras.ca",
        "Gender": "Male",
        "Status": "Read",
        "Address": "Solapur",
        "Position": "Front-end Developer"
      },
      {
        "Name": "Brett",
        "Email": "risus.a@viverraDonec.net",
        "Gender": "Female",
        "Status": "Rejected",
        "Address": "Dendermonde",
        "Position": "Tester", 
        "Attachment": "https://www.cbs.dk/files/cbs.dk/cv_template_sheet_en.pdf"
      },
      {
        "Name": "Matthew",
        "Email": "vel.arcu@Etiamligulatortor.ca",
        "Gender": "Male",
        "Status": "Rejected",
        "Address": "Stamford",
        "Position": "Designer", 
        "Attachment": "https://www.cbs.dk/files/cbs.dk/cv_template_sheet_en.pdf"
      },
      {
        "Name": "Jonas",
        "Email": "iaculis.lacus@aliquetlobortisnisi.net",
        "Gender": "Female",
        "Status": "Rejected",
        "Address": "Bingen",
        "Position": "Full-stack Developer"
      },
      {
        "Name": "Hayes",
        "Email": "ac.nulla.In@Etiamvestibulummassa.net",
        "Gender": "Female",
        "Status": "Rejected",
        "Address": "Sloten",
        "Position": "Velit Associates"
      }
    ]

    const options = {
      // sorting: [{ columnName: 'Name', direction: 'asc' }],
      pageSize: 5,
      pageSizes: [5, 10, 15],
      selectable: true,
      showSelectAll: true,
      searchable: true,
      genderColumns: ['Gender'],
      attachmentColumns: ['Attachment'],
      statusColumns: ['Status']
    };

    return (
      <div>
        <DataGrid
          title={"APPLICATION LIST"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );

  }
}

Tables.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tables);
