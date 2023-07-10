# online Judge Web Application using MERN Stack
This is the  high-level structure for developing an Online Judge web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application will allow users to submit C++ code(later more longuage will be added), process it on the backend, and provide a verdict on the output based on the provided input and test cases.

## Frontend 
In fornt part there will be 3 pages and 5 components.

## Page 1 - Login page
In this user authentication will be done using json web token, User will enter its email id and password for login,

## Page 2 - Signup page
new user will provide name , email and password for creating account

## Page 3 - online judge dashboard
In this page 3 componets will be present :
1. problem section
2. code editor section
3. console for result verdict and run and submit button

*remaining 2 compoments are login and signup components*


## back-end
For server side implementation we willl using Node.js and Express.js for the backend. MongoDB will be used as the database for storing user information and submission details.

## main function

1. The backend will compile and execute the submitted C++ code in a controlled environment.
2. Input data and expected output will be provided to the code for testing.
3. Verdict Generation:
    - The output generated by the executed code will be compared against the expected output.
    - The backend will determine whether the code passed all the test cases or not.
    - The verdict will be sent back to the client for display.
4. Submissions and Results:
   - The application will store the user's code submissions and the corresponding verdicts in the database.
   - Users can view their submission history and check the results.







