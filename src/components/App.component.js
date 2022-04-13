import React from "react";
import StyledApp from "./App.style";
import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import Header from "./Header/Header.component";
class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </StyledApp>
    );
  }
}

export default App;
