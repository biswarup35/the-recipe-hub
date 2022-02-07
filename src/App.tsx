import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { SWRConfig } from "swr";
import { Navbar, Footer, Indian, Recipe, NotFound } from "./views";

const App = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  return (
    <React.Fragment>
      <SWRConfig
        value={{
          fetcher: (url) => fetch(baseUrl + url).then((r) => r.json()),
        }}
      >
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
            <Route index element={<Indian />} />
            <Route path=":recipe_id" element={<Recipe />} />
          </Route>
          <Route path="/category/:category" element={<Indian />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </SWRConfig>
    </React.Fragment>
  );
};

export default App;
