import React from "react";
import { useGlobalContext } from "../context";

function HomePage() {
  const {state, dispatch} = useGlobalContext();
  return (
    <>
      Home Page
      <button
        onClick={() => {
          localStorage.removeItem("token");
          dispatch({ type: "setToken", payload: "" });
          dispatch({ type: "setUserId", payload: null });
          dispatch({ type: "setUserEmail", payload: "" });
        }}
      >
        LogOut
      </button>
      <h2>Hello {state.userName}</h2>
    </>
  );
}

export default HomePage
