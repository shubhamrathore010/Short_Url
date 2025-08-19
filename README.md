# 🚀 URL Shortener with Authentication

A modern, full-featured URL Shortener application with robust user authentication, built using **MongoDB**, **JWT tokens**, and **cookie-based session management**. Users can sign up, log in, and manage their collection of short URLs through a personalized dashboard.

---

## 📚 Index

1. [Overview](#overview)
2. [Features](#features)
3. [Technical Stack](#technical-stack)
4. [Usage Guide](#usage-guide)
   - [Signup](#signup)
   - [Login](#login)
   - [Dashboard](#dashboard)
5. [Authentication & Session Flow](#authentication--session-flow)
    - [Signup Flow](#signup-flow)
    - [Login Flow](#login-flow)
    - [Token Verification](#token-verification)
6. [Architecture & Data Flow](#architecture--data-flow)
    - [Class & Entity Relationships](#class--entity-relationships)
    - [Authentication Flow Diagram](#authentication-flow-diagram)
7. [Screenshots](#screenshots)
8. [Security Considerations](#security-considerations)
9. [Extension Ideas](#extension-ideas)

---

## ⚡️ Overview

This project is a secure and user-friendly **URL shortener** that provides:

- **User authentication** (signup/login)
- **Session management** via cookies and JWTs
- **Personalized dashboards** for managing short URLs
- **Database-backed** storage of users and URLs

> All user data and sessions are securely separated.

---

## ✨ Features

| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| **User Authentication**  | Secure login and signup with MongoDB user storage                           |
| **JWT Tokens**           | Session management using JSON Web Tokens                                    |
| **Cookie Storage**       | Secure session persistence through browser cookies                          |
| **Short URL Management** | Create, view, and manage your own short URLs                                |
| **Personalized Dashboard** | See a history of your requests and manage your URLs                        |
| **Session Isolation**    | Each user’s data is protected and isolated via tokens and cookies           |


---

## 🛠️ Technical Stack

- **Backend**: Node.js (assumed), Express.js (common for such setups)
- **Database**: MongoDB
- **Authentication**: JWT tokens (using `jsonwebtoken`), Cookie storage
- **Frontend**: Not specified, but screenshots suggest a web-based UI

---

## 📝 Usage Guide

### 1. Signup

1. Navigate to the **Signup page**
2. Enter your **Full Name, Email, and Password**
3. Submit the form to create your account

### 2. Login

1. Navigate to the **Login page**
2. Enter your **Email and Password**
3. Submit the form
4. Upon success, you’ll be redirected to your **Dashboard**

### 3. Dashboard

- After login, see a dashboard with your previous URL requests
- Create new short URLs
- View and manage your existing short URLs

---

## 🔒 Authentication & Session Flow

### JWT Tokens

- Used to securely transmit information between client and server
- Created and verified using the `jsonwebtoken` library
- Token payload includes **user ID** and **email**
- Signed with a secret key (`process.env.JWT_SECRET`)

### Cookies

- JWT token is stored in a **browser cookie**
- Keeps users logged in after page refresh
- Each session uses a unique cookie/token

---

## 🔑 Authentication Flow

### Signup Flow

1. User submits signup form
2. Server validates and creates a new user in MongoDB
3. A JWT token is generated for the user
4. Token returned to client, stored in a cookie in the browser

### Login Flow

1. User submits login form
2. Server validates credentials and retrieves user from MongoDB
3. New JWT token generated
4. Token sent to client, stored in cookie

### Token Verification

- For protected routes, server checks the JWT token from the cookie
- If valid, access is granted; if invalid/expired, user is redirected to login

---

## 🗂️ Architecture & Data Flow

### Class & Entity Relationships

```mermaid
erDiagram
    USER {
        string _id
        string fullName
        string email
        string password
        string[] shortURLs
        string[] urlIDs
    }
    SHORTURL {
        string _id
        string originalURL
        string shortCode
        string ownerUserID
        date createdAt
    }
    USER ||--o{ SHORTURL : "owns"
```

### Authentication Flow Diagram

```mermaid
flowchart TD
    A[User submits Signup/Login Form] --> B[Server validates input]
    B -->|Valid| C[Server creates/fetches user in MongoDB]
    C --> D[Server generates JWT token]
    D --> E[JWT token sent to client]
    E --> F[Client stores JWT in cookie]
    F --> G[User accesses dashboard/protected routes]
    G --> H[Server verifies JWT from cookie]
    H -->|Valid| I[Access granted]
    H -->|Invalid| J[Redirect to login]
```

---

## 🖼️ Screenshots


|Signup Page
<img width="1672" height="885" alt="signupPage" src="https://github.com/user-attachments/assets/00d0f22a-593f-4750-9e9a-5e847c4f3896" /> 
  Dashboard <img width="1672" height="885" alt="dashboard" src="https://github.com/user-attachments/assets/f6cf6d79-1515-40b6-91f2-da45c9258a42" />   Short URL Management<img width="1672" height="885" alt="url_manage" src="https://github.com/user-attachments/assets/d58fb34a-1050-4dfe-9a52-fc2187fd1ac9" />    Logged-in State<img width="1672" height="885" alt="login" src="https://github.com/user-attachments/assets/3d5b4d10-5840-42b9-9d13-6de3b09a602f" />


---

## 🛡️ Security Considerations

- **Password Hashing:** (Assumed) User passwords should be hashed before storage.
- **Token Expiry:** JWTs should include an expiration time to limit session lifetime.
- **Cookie Flags:** Cookies should be set with `HttpOnly` and `Secure` flags.
- **Input Validation:** All user input must be validated and sanitized to prevent injection attacks.

---

## 💡 Extension Ideas

- Add support for **custom short codes** and link expiration
- Add **email verification** for signup
- Include **analytics** for URL visits
- Implement **OAuth2** login (Google, GitHub, etc.)
- Provide a **public API** for URL shortening

---

## 📬 Questions or Contributions?

Feel free to open an issue or pull request. Happy shortening! 🚀

---

> **Note:** This documentation is based on the provided README. For detailed API, controller, or route documentation, please provide the server-side code files.
