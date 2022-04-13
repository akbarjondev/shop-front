import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import StyledApp from "./App.style";
import Home from "./../pages/Home";
import Header from "./Header/Header.component";
import store from "../store/common.store";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});
class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <StyledApp>
              <h1 className="visually-hidden">
                Make easy your online shopping
              </h1>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </StyledApp>
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
