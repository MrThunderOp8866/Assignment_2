# Assignment_2
# README.md - Client-Side Scripting: JavaScript Assignment#2

## Assignment Overview

This assignment focuses on demonstrating your skills in using HTML form elements, CSS, and various JavaScript concepts. You will create a simple website with two pages, index.html and excel.html, and use JavaScript to handle user input and perform calculations. The main objectives are:

- Create HTML forms for user input.
- Implement JavaScript functions for form validation and calculations.
- Use DOM manipulation to display results on the page.
- Apply CSS to style the pages.

## Folder Structure

The assignment folder should have the following structure:


JS-Assignment2/
├── index.html
├── excel.html
├── js/
│   └── script.js
└── css/
    └── styles.css


## Submission

Submit your assignment through GitHub and Blackboard as follows:

### GitHub Repo:

- Create a GitHub repository for your assignment.
- Upload the contents of your assignment to the repository.
- Add a README.md file to the repository with a link to the live demo of your assignment using GitHub Pages.

### Blackboard Assignment Section:

- Provide the link to your GitHub repository containing the assignment.
- Upload a PDF file containing screenshots of your code and the output of your JavaScript functions.

## Page 1 (Home Page): index.html

Create a web form that asks the user to enter their personal information. The form should include the following fields:

- First Name: `<input type="text">`
- Last Name: `<input type="text">`
- Email Address: `<input type="email">`
- Address: `<input type="text">`
- City: `<input type="text">`
- Province: `<input type="text">`
- Membership Options (Radio Buttons):
  - Premium Membership
  - Standard Membership (Default)
  - Basic Membership

Implement the following JavaScript functionalities:

- Create a function `userForm()` that retrieves form information and displays it on the page after clicking the "Send" button.
- Provide a "Cancel" button to reset the form elements.

Display the user information as follows:


Full Name: Martin Smith
Email: martinsmith2018@yahoo.ca
Address: 123 Yonge St.
Toronto, ON
Membership: Standard


## Page 2 (Excel Page): excel.html

Create a web form for Excel calculations. The form should have the following elements:

- Input box for the user to enter numbers separated by spaces.
- Radio buttons for the following Excel functions (AutoSum selected by default):
  - AutoSum
  - Average
  - Max
  - Min
- "Calculate" button to trigger the function `myExcelFuns()`.

Implement the following JavaScript functionalities:

- Create a function `myExcelFuns()` that calculates the selected Excel function based on user input and displays the result on the page.
- Provide two buttons or labels for switching themes (e.g., Dark/Light or Blue/Red).

The results of the Excel functions should be displayed on the page.

## Note

Feel free to use any coding style, layouts, and HTML elements to present your results. The main focus is on implementing JavaScript functionalities correctly.

### Happy Coding! 🚀
