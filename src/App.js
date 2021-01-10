import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import axios from "axios";
import User from "./components/users/User";


class App extends Component {
  state = {
    users: [],
    user:{},
    loading: false,
    alert: null,
  };

 
  // Search Github Users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: response.data.items, loading: false });
  };

  //Get single user
  getUser = async (username) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: response.data, loading: false });
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                    
                  </Fragment>
                )}
              />
              <Route exact path = '/about' component= {About}/>
              <Route exact path ='/user/:login' render={props => (
                <User {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading}/>
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
