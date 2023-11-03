import React from "react";
import { useState } from "react";
import SignIn from "../components/SignIn";
import ScrollToTop from "../components/ScrollToTop.js";

const SigninPage = () => {
  return (
    <>
      <ScrollToTop />
      <SignIn />
    </>
  );
};

export default SigninPage;
