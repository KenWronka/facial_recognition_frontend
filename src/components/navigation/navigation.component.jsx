import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <React.Fragment>
      {isSignedIn ? (
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            className="f3 link dim black underline pa3 pointer"
            onClick={() => onRouteChange("signin")}
          >
            Sign out
          </p>
        </nav>
      ) : (
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            className="f3 link dim black underline pa3 pointer"
            onClick={() => onRouteChange("home")}
          >
            Sign in
          </p>
          <p
            className="f3 link dim black underline pa3 pointer"
            onClick={() => onRouteChange("register")}
          >
            Register
          </p>
        </nav>
      )}
    </React.Fragment>
  );
};

export default Navigation;
