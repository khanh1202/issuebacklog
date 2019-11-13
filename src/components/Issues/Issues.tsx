import * as React from 'react';
import { issues, IIssue } from 'services/DummyIssueService';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination
} from '@material-ui/core';
import TablePaginationActions from 'components/Issues/TablePaginationActions';

import { withRouter, RouteComponentProps } from 'react-router';

interface IIssuesState {
  issues: IIssue[];
  rowsPerPage: number;
  currentPage: number;
}

export class Issues extends React.Component<RouteComponentProps, IIssuesState> {
  state: IIssuesState = {
    issues: [],
    rowsPerPage: 3,
    currentPage: 0
  };

  componentDidMount() {
    this.setState({
      issues
    });
  }

  createIssueClickHandler = (issue: IIssue) => () => {
    const { history } = this.props;

    history.push(`/issues/${issue._id}`);
  };

  handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    this.setState({ currentPage: page });
  };

  handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10),
      currentPage: 0
    });
  };

  render() {
    const { issues, rowsPerPage, currentPage } = this.state;
    const issuesToDisplay =
      rowsPerPage > 0
        ? issues.slice(
            currentPage * rowsPerPage,
            currentPage * rowsPerPage + rowsPerPage
          )
        : issues;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Assigned To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {issuesToDisplay.map(issue => (
            <TableRow
              key={issue._id}
              onClick={this.createIssueClickHandler(issue)}
              hover
            >
              <TableCell>{issue._id}</TableCell>
              <TableCell>{issue.name}</TableCell>
              <TableCell>{issue.priority.name}</TableCell>
              <TableCell>{issue.size.name}</TableCell>
              <TableCell>{issue.status.name}</TableCell>
              <TableCell>{issue.assignedTo.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[3, 6, 9]}
              count={issues.length}
              rowsPerPage={rowsPerPage}
              page={currentPage}
              onChangePage={this.handlePageChange}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            ></TablePagination>
          </TableRow>
        </TableFooter>
      </Table>
    );
  }
}

//TODO: Research HOC / Higher Order Component
export const WrappedIssues = withRouter(Issues);

// export default WrappedIssues;
