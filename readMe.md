# Virtual Classroom Project

## Overview

The Virtual Classroom project is a web application that facilitates online learning by managing classes, units, sessions, discussions, and student enrollments. It includes features for reviewing sessions, interacting in discussions, and viewing class content.

## Prerequisites

- Node.js and npm (Node Package Manager) installed
- MongoDB (or MongoDB Atlas) set up
- Basic understanding of React.js, Express.js, and MongoDB

## Project Structure

- `frontend/`: Contains the React frontend application
- `backend/`: Contains the Express backend server

## Setup

### Backend Setup

1. **Navigate to the `backend/` directory:**

    ```bash
    cd backend
    ```

2. **Install the required packages:**

    ```bash
    npm install
    ```

3. **Configure the environment variables:**

    Create a `.env` file in the `backend/` directory and add the following configuration:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. **Start the backend server:**

    ```bash
    npm start
    ```

    The server will run on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the `frontend/` directory:**

    ```bash
    cd frontend
    ```

2. **Install the required packages:**

    ```bash
    npm install
    ```

3. **Run the frontend application:**

    ```bash
    npm start
    ```

    The frontend application will run on `http://localhost:3000`.

## Running the Project

1. **Start the backend server** as described in the Backend Setup section.
2. **Start the frontend application** as described in the Frontend Setup section.

Once both the backend server and the frontend application are running, you should be able to access the virtual classroom application in your web browser at `http://localhost:3000`.

## Features

- **Classes Management**: Create and manage classes.
- **Units and Sessions**: Add and organize units and sessions within classes.
- **Discussions**: Engage in class discussions.
- **Attendance Tracking**: Track and manage student attendance.
- **Reviews**: Review sessions with nested replies.

## Troubleshooting

- **Module not found errors**: If you encounter issues with missing Node.js core modules, ensure you have the necessary polyfills installed and configured. Refer to the [Webpack 5 documentation](https://webpack.js.org/) for more information on handling Node.js core modules.

- **Connection issues**: Verify your MongoDB connection string in the `.env` file and ensure MongoDB is running or accessible if using MongoDB Atlas.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. For detailed contribution guidelines, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Contact

For questions or feedback, please contact:

- **Name**: Raghav Laad
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn**: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)

