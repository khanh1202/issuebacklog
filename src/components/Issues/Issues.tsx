import * as React from 'react';
import { issues, IIssue } from 'services/DummyIssueService';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

import { withRouter, RouteComponentProps } from 'react-router';

interface IIssuesState {
  issues: IIssue[];
}

export class Issues extends React.Component<RouteComponentProps, IIssuesState> {
  state: IIssuesState = {
    issues: []
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

  render() {
    const { issues } = this.state;

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
          {issues.map(issue => (
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
      </Table>
    );
  }
}

//TODO: Research HOC / Higher Order Component
export const WrappedIssues = withRouter(Issues);

// export default WrappedIssues;
