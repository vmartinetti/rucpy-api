# Typescript Express REST API

This is a project template for building a REST API using Typescript with Node.js and Express.

## Project Structure

The project has the following file structure:

- `src/app.ts`: Entry point of the application. Creates an instance of the express app and sets up middleware and routes.
- `src/controllers/index.ts`: Exports a class `IndexController` which has a method `getIndex` that handles the root route of the application.
- `src/routes/index.ts`: Exports a function `setRoutes` which sets up the routes for the application. It uses the `IndexController` to handle the root route.
- `src/models/index.ts`: Exports a class `User` which represents a user in the application. It has properties `id`, `name`, and `email`.
- `src/middleware/index.ts`: Exports a middleware function `logger` which logs the incoming requests to the console.
- `src/config/index.ts`: Exports a constant `PORT` which specifies the port number for the application to listen on.
- `src/types/index.ts`: Exports interfaces `Request` and `Response` which extend the interfaces from the `express` library. It also exports an interface `User` which extends the `User` class from `src/models/index.ts`.
- `tsconfig.json`: Configuration file for TypeScript. Specifies the compiler options and the files to include in the compilation.
- `package.json`: Configuration file for npm. Lists the dependencies and scripts for the project.
- `README.md`: This file.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Build the project with `npm run build`.
4. Start the server with `npm start`.

## API Endpoints

- `GET /`: Returns a welcome message.
- `GET /users`: Returns a list of all users.
- `GET /users/:id`: Returns the user with the specified ID.
- `POST /users`: Creates a new user.
- `PUT /users/:id`: Updates the user with the specified ID.
- `DELETE /users/:id`: Deletes the user with the specified ID.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.