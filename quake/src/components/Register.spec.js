import React from "react";
import { render , cleanup, fireEvent } from "@testing-library/react";
import Register from './Register'

const regClick = jest.fn();
test ('contains input fields', () =>{  
const {getByPlaceholderText, getByText, getAllByText, getById, getByTestId} =  render(
  <Register/>
)
 
 
getByPlaceholderText(/email/i).value = 'email.com'
getByPlaceholderText(/city/i).value = 'Philadelphia'
getByPlaceholderText(/country/i).value= 'U.S.A'
fireEvent.click(getByTestId(/reg-button/i))

expect(regClick).toHaveBeenCalledTimes(0)


});

console.log(getByPlaceholderText(/first_name/i).value )

test("renders Register without crashing", () => {
  render(<Register/>);
});

 