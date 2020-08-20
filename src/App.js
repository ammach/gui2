import React from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import { LoginPage } from "@pages/login/LoginPage";
import { HomePage } from "@pages/home/HomePage";
import { IntroPage } from "@pages/intro/IntroPage";
import { getCurrentUser } from "@services/authService";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/login"
        component={() =>
          !getCurrentUser() ? <LoginPage /> : <Redirect to="/home" />
        }
      />
      <PrivateRoute exact path={["/", "/home"]}>
        <HomePage />
      </PrivateRoute>
      <PrivateRoute exact path="/intro">
        <IntroPage />
      </PrivateRoute>
    </BrowserRouter>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        getCurrentUser() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
