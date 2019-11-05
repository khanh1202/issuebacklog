import * as React from 'react';
import { issues, IIssue } from 'services/DummyIssueService';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { withRouter, WithRouterProps, RouteComponentProps } from 'react-router';

interface IIssuesState {
  issues: IIssue[];
}

class Issues extends React.Component<RouteComponentProps, IIssuesState> {
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
      <List>
        {issues.map(issue => (
          <ListItem>
            <ListItemText
              primary={issue.name}
              onClick={this.createIssueClickHandler(issue)}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

//TODO: Research HOC / Higher Order Component
const WrappedIssues = withRouter(Issues);

export default WrappedIssues;
