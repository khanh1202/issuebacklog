import * as React from 'react';
import { IssuesTable } from './IssuesTable';

export interface IssuesProps {}

//TODO: uncomment this if needed
// export interface IssuesState {

// }

export class Issues extends React.Component<IssuesProps, {}> {
  state = {
    issues: []
  };

  render() {
    return <p>Hello</p>;
    //<Pagination />
  }
}

export default Issues;
