
import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Repositories from "./components/Repositories";
import Stars from "./components/Stars";
import Header from "./components/Header";
import UserInformation from "./components/UserInformation";
import './styles/generic/Content.scss';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/repositories" render={() =>
        <main>
          <UserInformation />
          <section>
            <Header />
            <Repositories />
          </section>
        </main>} 
        />
      <Route exact path="/stars" render={() =>
        <main>
          <UserInformation />
          <section>
            <Header />
            <Stars />
          </section>
        </main>} 
        />
      <Route path="/signup" component={() => <h1>SignUp</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;