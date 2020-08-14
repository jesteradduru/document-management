import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DocumentLists from "../components/DocumentLists/DocumentLists";
import Controls from "../components/Controls/Controls";
import DateTime from "../components/DateTime/DateTime";
import ComposeForm from "../components/ComposeForm/ComposeForm";
// import ViewDoc from "../components/ViewDoc/ViewDoc";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: true,
      name: "Jester Adduru",
      type: "user",
      docDetails: {},
    };
  }

  showDocDetails = (document) => {
    this.setState({ docDetails: document });
  };

  render() {
    return (
      <div
        className="d-flex "
        style={{ width: window.screen.width * 0.95, margin: "0 auto" }}
      >
        <Router>
          <div className="w-25">
            <NavBar />
          </div>
          <div className="w-75 p-5">
            <DateTime />
            <Controls />
            <Switch>
              <Route exact path={["/", "/incoming"]}>
                <DocumentLists
                  status="PENDING"
                  showDocDetails={this.showDocDetails}
                  docDetails={this.state.docDetails}
                />
              </Route>
              <Route exact path="/onprocess">
                <DocumentLists
                  status="ONPROCESS"
                  showDocDetails={this.showDocDetails}
                  docDetails={this.state.docDetails}
                />
              </Route>
              <Route exact path="/outgoing">
                <DocumentLists
                  status="OUTGOING"
                  showDocDetails={this.showDocDetails}
                  docDetails={this.state.docDetails}
                />
              </Route>
              <Route exact path="/compose">
                <ComposeForm />
              </Route>
              {/* <Route exact path="/viewdoc">
                <ViewDoc />
              </Route> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default User;
