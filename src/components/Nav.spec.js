import React from "react";
import { render, cleanup } from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import Nav from "./Nav.js";

afterEach(cleanup);

test('renders all links', () => {
  const { getByText } = render(<Router><Nav /></Router>);
  expect(getByText(/home/i));
  expect(getByText(/login/i));
  expect(getByText(/register/i));
  expect(getByText(/prepare/i));
});
