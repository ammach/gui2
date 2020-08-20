import React from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import { LoginPage } from "@pages/login/LoginPage";
import { HomePage } from "@pages/home/HomePage";
import { IntroPage } from "@pages/intro/IntroPage";
import { ProStep1 } from "@pages/pro/step1/ProStep1";
import { ProStep2 } from "@pages/pro/step2/ProStep2";
import { ProStep3 } from "@pages/pro/step3/ProStep3";
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
      <PrivateRoute exact path="/pro/step1">
        <ProStep1 />
      </PrivateRoute>
      <PrivateRoute exact path="/pro/step2">
        <ProStep2 />
      </PrivateRoute>
      <PrivateRoute exact path="/pro/step3">
        <ProStep3 />
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
