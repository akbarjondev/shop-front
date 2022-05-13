import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import StyledApp from "./App.style";
import Home from "./../pages/Home";
import Header from "./Header/Header.component";
import NoPage from "./NoPage/NoPage.component";
import CartPage from "./../pages/CartPage";
import ProductInfo from "./ProductInfo/ProductInfo.component";

import { PersistGate } from "redux-persist/integration/react";
import store, { Persistor } from "../store/common.store";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={Persistor}>
            <BrowserRouter>
              <StyledApp>
                <h1 className="visually-hidden">
                  Make easy your online shopping
                </h1>
                <Header />
                <div className="container">
                  <Switch>
                    <Route path="/" exact>
                      <Home />
                    </Route>
                    <Route path="/bag" exact>
                      <CartPage />
                    </Route>
                    <Route path="/product/:productId" component={ProductInfo} />
                    <Route path="*">
                      <NoPage />
                    </Route>
                  </Switch>
                </div>
              </StyledApp>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
