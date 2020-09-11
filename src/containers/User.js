import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import DocumentLists from "../components/Documents/DocumentLists/DocumentLists";
import Controls from "../components/Controls/Controls";
import DateTime from "../components/DateTime/DateTime";
import ComposeForm from "../components/Compositions/ComposeForm/ComposeForm";
import SubNav from "../components/NavBar/SubNav";
import CompositionLists from "../components/Compositions/CompositionLists/CompositionLists";
import { connect } from "react-redux";
import SearchBox from "../components/SearchBox/SearchBox";
import ApprovalLists from "../components/ApprovalLists/ApprovalLists";
import { GetDocuments } from "../components/Documents/DocumentActions";

const mapStateToProps = (state) => ({
  isSignedIn: state.user.isSignedIn,
  username: state.user.username,
  type: state.user.type,
  docDetails: {},
  documents: state.documents.documents,
});

const mapDispatchToProps = (dispatch) => ({
  getDocuments: () => dispatch(GetDocuments()),
});

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDocuments();
  }

  render() {
    const { isSignedIn, username, type, docDetails, documents } = this.props;
    if (type === "user" && isSignedIn) {
      return (
        <div
          className="d-flex "
          style={{ width: window.screen.width * 0.95, margin: "0 auto" }}
        >
          <Router>
            <div className="w-25">
              <NavBar userType="user" username={username} />
            </div>
            <div className="w-75 p-5">
              <DateTime />
              <Controls />
              <Switch>
                <Route exact path={["/", "/incoming"]}>
                  <DocumentLists
                    status="PENDING"
                    docDetails={docDetails}
                    documents={documents}
                    checked="APPROVED"
                  />
                </Route>
                <Route exact path="/onprocess">
                  <DocumentLists
                    status="ONPROCESS"
                    docDetails={docDetails}
                    documents={documents}
                    checked="APPROVED"
                  />
                </Route>
                <Route exact path="/outgoing">
                  <DocumentLists
                    status="OUTGOING"
                    docDetails={docDetails}
                    documents={documents}
                    checked="APPROVED"
                  />
                </Route>
                <Route exact path="/compose">
                  <ComposeForm />
                </Route>
                <Route exact path={"/compositions"}>
                  <SubNav />
                  <CompositionLists
                    status="PENDING"
                    docDetails={docDetails}
                    documents={documents}
                  />
                </Route>
                <Route exact path={"/compositions/:approval"}>
                  <SubNav />
                  <CompositionLists
                    status="PENDING"
                    docDetails={docDetails}
                    documents={documents}
                  />
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
              <NavBar userType={type} username={username} />
            </div>
            <div className="w-75 p-5">
              <DateTime />
              <SearchBox />
              <ApprovalLists userType={type} />
            </div>
          </Router>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
