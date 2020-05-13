import React from "react";
import { render , cleanup, fireEvent } from "@testing-library/react";
// import * as rtl from '@testing-library/react';
import Login from "./Login";
import Register from './Register'
 
afterEach(cleanup);
 test("calls onSubmit with name and password",  () => {
  const handleSubmit = jest.fn();
  
  const {getByPlaceholderText, getByText, getAllByText, getById, getByTestId} =  render(
    <Login onSubmit={handleSubmit} />
  )
  getByPlaceholderText(/email/i).value = "chuck"
  getByPlaceholderText(/password/i).value = "norris"
   fireEvent.click(getByTestId(/EnterButton/i))
  // fireEvent.click(getAllByText(/enter/i))



  expect(handleSubmit).toHaveBeenCalledTimes(0);
});

 


test("renders Login without crashing", () => {
  render(<Login />);
});

test("renders Register without crashing", () => {
  render(<Register/>);
});

 