import {PureComponent} from 'react'
import { withRouter, RouteComponentProps } from 'react-router';
class ForumBase extends PureComponent<RouteComponentProps>{
  render() {
    return <h1>hey</h1>
  }
}
export const Forum = withRouter(ForumBase);