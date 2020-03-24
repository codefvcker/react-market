import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main, Profile, SignIn, SignUp, About } from "./pages";
import { Header, Footer } from "./containers";
import { RouteWrap } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteWrap>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/profile" component={Profile} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/about" component={About} />
        </Switch>
      </RouteWrap>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
