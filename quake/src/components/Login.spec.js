import React from "react";
import { renderIntoDocument, cleanup } from "react-testing-library";
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


})