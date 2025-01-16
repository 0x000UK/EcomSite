# EcomSite

EcomSite is a modern e-commerce platform designed to provide a seamless shopping experience. This README provides instructions to set up the project locally, run the client and server, and configure the environment variables.

---

## Table of Contents
- [Getting Started](#getting-started)
- [Setting Up Environment Variables](#setting-up-environment-variables)
- [Running the Application](#running-the-application)
- [Admin Login Setup](#admin-login-setup)
- [Happy Coding!](#happy-coding)

---

## Getting Started
To clone the project and set it up locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/EcomSite.git
   ```
2. Navigate into the project directory:
   ```bash
   cd EcomSite
   ```

---

## Setting Up Environment Variables
Before running the application, you need to set up the environment variables for both the client and server.

1. Create or edit the `.env` file in the `server` directory.
2. Add the following variables:
   ```env
   PORT=<your-port-number>
   MONGODB_URI=<your-mongodb-uri>
   ```

Replace `<your-port-number>` with the desired port for the server and `<your-mongodb-uri>` with the connection string for your MongoDB database.

---

## Running the Application
The application consists of two parts: the client (frontend) and the server (backend). To run the application locally, follow these steps:

1. Open two terminal windows or tabs.
2. In the first terminal, navigate to the client directory:
   ```bash
   cd client
   ```
   Install the dependencies and start the client:
   ```bash
   npm install
   npm start
   ```

3. In the second terminal, navigate to the server directory:
   ```bash
   cd server
   ```
   Install the dependencies and start the server:
   ```bash
   npm install
   npm run dev
   ```

The client will typically run on `http://localhost:5173`, and the server will run on the port you specified in the `.env` file (e.g., `http://localhost:5000`).

---

## Admin Login Setup
To set up an admin account for the platform:

1. Create a user account with a name, email, and password using the application.
2. In your database, update the role of this user from `user` to `admin`. For example, if you are using MongoDB, you can update the user role as follows:
   ```javascript
   db.users.updateOne(
     { email: "admin@example.com" },
     { $set: { role: "admin" } }
   );
   ```

Now, you can log in as an admin and access the admin functionalities.

---

## Happy Coding!
Enjoy building and enhancing your e-commerce platform! If you encounter any issues, feel free to open an issue on the repository or reach out for support.

