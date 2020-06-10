import React from "react";
import {render, renderIntoDocument, cleanup } from "@testing-library/react";
import {Login}  from "./Login";
import {Register} from './Register';

afterEach(cleanup);
test("calls onSubmit with name and password", () => {
  const handleSubmit = jest.fn();
  const {  getByText} = render(
    <Login onSubmit={handleSubmit} />
  )
  getByLabelText(/email/i).value = "chuck"
  getByText(/password/i).value = "norris"
  getByText(/enter/i).click();

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

 test ('generates a new user', ()=> {
   const handleSubmit = jest.fn();
   const {getByText}= render(
     <Register onSubmit={handleSubmit}/>
   )
   getByLabelText(/email/i).value = "guy22@email.com"
  getByText(/password/i).value = "123"
  getByText(/enter/i).click();

  expect(users.length).toBe(1)


})