import React, { Component } from "react";

import { UserContext } from "../../providers/UserProvider";
import { Redirect } from "@reach/router";

class ProtectedPage extends Component {
  static contextType = UserContext;

  render() {
    const Component = this.props.component;

    // Give Firebase a chance to load user from local storage
    if (this.context.firstLoad) {
      return null;
    }
    let authorized = this.context.user !== undefined;
    return <>{authorized ? <Component user={this.context.user} /> : <Redirect to="/auth" />}</>;
  }
}

export default ProtectedPage;
