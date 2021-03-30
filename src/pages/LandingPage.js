import React, { useEffect } from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
// import jsonwebtoken from "../../../backend/node_modules/jsonwebtoken";
import jsonwebtoken from "jsonwebtoken";
import { useGlobalContext } from "../context";
import LoadingComp from "../components/LoadingComp";

function LandingPage() {
  const { state, dispatch } = useGlobalContext();
  useEffect(() => {
    dispatch({ type: "toggleLoading", payload: true });
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: "setToken", payload: token });
      const decodedVal = jsonwebtoken.decode(token);
      dispatch({ type: "setDecodedValues", payload: decodedVal });
    }
    dispatch({ type: "toggleLoading", payload: false });
  }, []);

  return (
    <>
      {state.isLoading ? (
        <LoadingComp />
      ) : state.token ? (
        <HomePage />
      ) : (
        <LoginPage />
      )}
      {/* {state.token ? <HomePage/> : <LoginPage/>} */}
    </>
  );
}

export default LandingPage;
