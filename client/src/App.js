import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";
import Shoe from "./component/shoes/Shoe";
import Belt from "./component/belt/Belt";
import MySnackBar from "./component/common/MySnackBar";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Shoe} />
          <Route path="/belt" exact component={Belt} />
        </Switch>
        <MySnackBar />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
