import React from "react";
import { useState } from "react";
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Form,
  Text,
} from "./SignInElements";
import Sidebar from "../Sidebar";
import SignInNavbar from "../SignInNavbar";

const SignIn = () => {
  const [isOpen,setIsOpen]=useState(false);

  const toggle=()=>{
    setIsOpen(!isOpen);
}
  return (
    <>
      <Container>
        <FormWrap>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <SignInNavbar toggle={toggle} />
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account!</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
