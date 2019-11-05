import * as React from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

export interface IssuesTableProps {}

//TODO: uncomment if needed
// export interface IssuesTableState {

// }

export class IssuesTable extends React.Component<IssuesTableProps, {}> {
  state = {
    issues: []
  };

  render() {
    console.log('I am here');
    return <p>Hello World</p>;
  }
}

export default IssuesTable;
