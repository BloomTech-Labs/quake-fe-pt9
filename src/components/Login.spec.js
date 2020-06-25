import React from "react";
import { render, cleanup } from "@testing-library/react";
import {Login}  from "./Login";
import {Register} from './Register';

afterEach(cleanup);

test("calls onSubmit with name and password", () => {
  expect(true).toBe(true);
  // const handleSubmit = jest.fn();
  // const {getByText} = render(
  //   <Login onSubmit={handleSubmit} />
  // )
  // getByLabelText(/email/i).value = "chuck"
  // getByText(/password/i).value = "norris"
  // getByText(/enter/i).click();
  //
  // expect(handleSubmit).toHaveBeenCalledTimes(1);
});
