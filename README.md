# MyApp

## Setup Instructions

### Prerequisites
- Node.js
- MySQL

### Installation
1. Clone the repository:
   
   git clone https://github.com/izafar22/myAppUserProfileManagement.git
   cd myapp
   node app.js

   server is running on port=3000

   configuration for .env file
    DB_HOST=
    DB_USER=
    DB_PASSWORD=
    DB_DATABASE=
    JWT_SECRET=
    PORT=

   Authentication

	•	POST /auth/register - Register a new user
	•	POST /auth/login - Login a user

   User Profile Management

	•	GET /users/profile - Get current user’s profile
	•	PUT /users/profile - Update current user’s profile
	•	DELETE /users/profile - Delete current user’s profile

   User Management (Admin)

	•	GET /users - Get all users (with pagination)
	•	GET /users/:id - Get a user by ID
	•	DELETE /users/:id - Delete a user by ID


 