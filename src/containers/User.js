import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DocumentLists from "../components/DocumentLists/DocumentLists";
import Controls from "../components/Controls/Controls";
import DateTime from "../components/DateTime/DateTime";
import ComposeForm from "../components/ComposeForm/ComposeForm";
import SubNav from "../components/NavBar/SubNav";
import CompositionLists from "../components/CompositionLists/CompositionLists";
import { connect } from "react-redux";
import SearchBox from "../components/SearchBox/SearchBox";

const mapStateToProps = (state) => ({
  isSignedIn: state.loginUser.isSignedIn,
  username: state.loginUser.username,
  type: state.loginUser.type,
  docDetails: {},
});
const User = ({ isSignedIn, username, type, docDetails }) => {
  if (type === "user") {
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
                  docDetails={docDetails}
                  checked="APPROVED"
                />
              </Route>
              <Route exact path="/onprocess">
                <DocumentLists
                  status="ONPROCESS"
                  docDetails={docDetails}
                  checked="APPROVED"
                />
              </Route>
              <Route exact path="/outgoing">
                <DocumentLists
                  status="OUTGOING"
                  docDetails={docDetails}
                  checked="APPROVED"
                />
              </Route>
              <Route exact path="/compose">
                <ComposeForm />
              </Route>
              <Route exact path="/compositions">
                <SubNav />
                <CompositionLists status="PENDING" docDetails={docDetails} />
              </Route>
              <Route exact path="/compositions/:approval">
                <SubNav />
                <CompositionLists docDetails={docDetails} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  } else {
    return (
      <div
        className="d-flex "
        style={{ width: window.screen.width * 0.95, margin: "0 auto" }}
      >
        <Router>
          <div className="w-25">
            <NavBar userType={type} />
          </div>
          <div className="w-75 p-5">
            <DateTime />
            <SearchBox />
            <DocumentLists userType={type} />
          </div>
        </Router>
      </div>
    );
  }
};

export default connect(mapStateToProps)(User);
