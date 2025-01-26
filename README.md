# User Management App

The **User Management App** is a React-based web application that allows users to manage their personal and professional details. It includes features like adding, editing, and displaying user information with a clean and responsive design.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Author](#author)

## Features

- Add new users with fields like First Name, Last Name, Email, and Department.
- Edit existing user information.
- Responsive design, optimized for desktop and mobile devices.
- Clean UI with intuitive form validation.
- Toast notifications for user actions like adding, updating, or errors.
  
## Tech Stack

- **Frontend:** ReactJS, React Router, CSS (responsive design)
- **Dependencies:**
  - Axios: API calls
  - React Toastify: Notifications

## Installation

Follow the steps below to set up the app locally.

1. Clone the repository:
   ```bash
   git clone https://github.com/sunilkanugula/user-management-app.git
2.Navigate to the project directory:
   cd user-management-app

3.Install dependencies:
   npm install
   
4.Start the development server:
  npm start
  
5. Open your browser and visit:
  http://localhost:3000
  
## Usage
On the homepage, you can view all added users.
Use the Add User form to add new users.
Click the Edit button on a user to update their details.
The application is fully responsive, so you can use it on both desktop and mobile devices.

## Screenshots

Below is a screenshot showcasing the User Management App interface:

![User Management App](https://res.cloudinary.com/di1e0mwbu/image/upload/v1737906306/User_Management_System_-_Google_Chrome_26-01-2025_21_02_19_dque6x.png)

## Folder Structure
```bash
user-management-app/
├── public/
├── src/
│   ├── components/         # Reusable components (Pagination, UserInput,UserTable)
│   ├── styles/             # CSS files
│   ├── App.js              # Main app entry point
│   ├── index.js            # ReactDOM entry point
│   └── ...                 # Additional files
├── package.json            # Project dependencies and scripts
└── README.md               # Documentation



