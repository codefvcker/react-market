import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Main,
  Profile,
  SignIn,
  SignUp,
  About,
  Advert,
  AdvertCreator
} from "./pages";
import { Header, Footer } from "./containers";
import { RouteWrap } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteWrap>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/advert/:id" component={Advert} />
          <Route path="/about" component={About} />
          <Route path="/advertcreator" component={AdvertCreator} />
        </Switch>
      </RouteWrap>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
