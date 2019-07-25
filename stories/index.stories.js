import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import {
  DataGrid as Table
} from 'components'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const tableData = [{
  "Name": "Keven Walter",
  "Email": "tincidunt@liberoMorbiaccumsan.net",
  "Gender": "Female",
  "Status": "Accepted",
  "Address": "Enines",
  "Position": "Front-end Developer",
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
}];

const tableColumns = [
  { name: "Name", title: "Name" },
  { name: "Gender", title: "Gender" },
  { name: "Email", title: "Email" },
  { name: "Position", title: "Position" },
  { name: "Attachment", title: "Attachment" },
  { name: "Status", title: "Status" }
];

const selectableTableOptions = {
  selectable: true,
  showSelectAll: true,
}
const searchableTableOptions = {
  searchable: true,
};

storiesOf('Table', module)
  .add('Basic Table', () => (
    <Table
      title={"Basic Table"}
      data={tableData}
      columns={tableColumns}
    />
  ))
  .add('Searchable Table', () => (
    <Table
      title={"Searchable Table"}
      data={tableData}
      columns={tableColumns}
      options={searchableTableOptions}
    />
  ))
  .add('Selectable Table', () => (
    <Table
      title={"Searchable Table"}
      data={tableData}
      columns={tableColumns}
      options={selectableTableOptions}
    />
  ));
