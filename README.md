# URL Shortener with Authentication

Overview:

This project is a URL shortener application that includes user authentication using MongoDB, 
JWT tokens, and cookies for session management. 
Users can log in if they already have an account or sign up for a new account. 
Once logged in, users can check their previous requests for short URLs. 
The application stores user data, including full name, email, password, short URLs, and URL IDs in the database.
Tokens and cookies are used to manage user sessions, ensuring that each user's data is securely separated.


Features:

   User Authentication: Login and signup functionality using MongoDB to store user details.   JWT Tokens: JSON Web Tokens are used for secure session management.
   Cookies: Cookies are stored in the browser to maintain user sessions.
   Short URL Management: Users can create and manage short URLs.
   Personalized Dashboard: Each user has a personalized dashboard displaying their short URLs and other data.


 #  Usage

  Signup:  
        Navigate to the signup page.
        Enter your full name, email, and password.
        Submit the form to create a new account.

   Login:
        Navigate to the login page.
        Enter your email and password.
        Submit the form to log in.
        If successful, you will be redirected to the main page.

  Dashboard:
       Once logged in, you will see a dashboard with
       your previous requests for short URLs.
       You can create new short URLs and view details of existing ones.


# Technical Details 
  
  JWT Tokens:-
    JWT tokens are used to securely transmit information between the client and the server.
    The 'jsonwebtoken' library is used to create and verify tokens.
    Tokens include user information such as '_id' and 'email'.
    Tokens are signed with a secret key defined in the environment variables.

   Cookies:
    Cookies are used to store the JWT token in the user's browser.
    Cookies ensure that the user remains logged in even after refreshing the page.
    Each user's session is unique, with different cookies and tokens.


  # Authentication Flow

  Signup:
        User submits the signup form.
        Server validates the data and creates a new user in MongoDB.
        A JWT token is generated for the user and sent back to the client.
        The token is stored in a cookie in the user's browser.

  Login:
    User submits the login form.
    Server validates the credentials and retrieves the user from MongoDB.
    A JWT token is generated and sent back to the client.
    The token is stored in a cookie in the user's browser.

Token Verification:
    For protected routes, the server verifies the JWT token from the cookie.
    If the token is valid, the user is allowed access to the resource.
    If the token is invalid or expired, the user is redirected to the login page.  

![Screenshot from 2024-07-24 22-55-20](https://github.com/user-attachments/assets/36eecc5b-13a1-4e59-bd6e-291236322bd9)


![../img/Screenshot from 2024-07-24 22-58-11](https://github.com/user-attachments/assets/bbd1caf6-5ebe-4a7c-8c3c-2634dc2bdbb7)


![Screenshot from 2024-07-24 22-56-11](https://github.com/user-attachments/assets/6da393e9-dbb4-480a-8595-77f86cd08000)


![Screenshot from 2024-07-24 22-57-11](https://github.com/user-attachments/assets/12245cce-b578-4f5b-9a7e-87b7a2d54464)


![Screenshot from 2024-07-24 23-00-10](https://github.com/user-attachments/assets/9cb506a0-d1af-49d7-ac60-6c3924598b92)
