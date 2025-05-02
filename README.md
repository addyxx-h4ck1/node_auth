# Node Authentication Server

A lightweight Node.js backend for user authentication, featuring JWT-based
login, secure password hashing, and modular architecture.

## Features

- User registration and login
- JWT-based authentication
- Secure password hashing with bcrypt
- Modular structure with controllers, middleware, and routes
- MongoDB integration for user data storage

## Project Structure

```
node_auth_server/
├── controllers/       # Handles request logic
├── database/          # Database connection setup
├── libs/              # Utility functions and helpers
├── middleware/        # Authentication and error handling middleware
├── routes/            # API route definitions
├── index.js           # Application entry point
├── package.json       # Project metadata and dependencies
└── .gitignore         # Files and directories to ignore in version control
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (local or cloud)

### Installation

```bash
git clone https://github.com/addyxx-h4ck1/node_auth_server.git
cd node_auth_server
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Running the Server

```bash
npm start
```

The server will start on `http://localhost:5000` by default.

## API Endpoints

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Authenticate user and return JWT
- **GET** `/api/protected` - Access protected route (requires JWT)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken

## Prisma Docs URL

https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql

## Aiven URL

https://aiven.io

## License

This project is open-source and available under the [MIT License](LICENSE).
