import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p></p>
    </div>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Outlet />
            </main>
          }
        >
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
