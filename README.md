
# Book

**Book** is a full-stack web application designed for managing a collection of books. It allows users to view, add, and manage book details, such as titles, authors, and descriptions. The application uses **Node.js** as the backend for handling the API and **React.js** as the frontend for the user interface.

## Features

- **Book List**: Displays a list of books with their titles, authors, and descriptions.
- **Add Books**: Users can add new books to the collection.
- **Edit and Delete Books**: Manage existing books by editing or deleting them.
- **Search Functionality**: Easily search for books by title.
- **RESTful API**: Provides API endpoints for managing books in the backend.

## Tech Stack

### Backend (Node.js)

- **Node.js**: JavaScript runtime used to create the backend server.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB/Mongoose**: NoSQL database used to store book data, with Mongoose as an ORM.
- **Dotenv**: For environment variable management.
  
### Frontend (React.js)

- **React.js**: JavaScript library for building the user interface.
- **Axios**: HTTP client for making API requests to the backend.
- **React Router**: Handles navigation and routing within the application.
- **Bootstrap**: CSS framework used for styling and responsive design.
- **React Hooks**: For managing state and side effects.

## Prerequisites

Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

## Installation

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Asyabani/Book.git
    ```

2. Navigate to the backend folder:
    ```bash
    cd Book/backend
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    - Create a `.env` file and add the following variables:
        ```bash
        MONGO_URI=your_mongodb_connection_string
        PORT=5000
        ```

5. Start the backend server:
    ```bash
    npm start
    ```
   The backend will run on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Navigate to the frontend folder:
    ```bash
    cd Book/frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```
   The frontend will run on [http://localhost:3000](http://localhost:3000).

### Full Stack

Ensure that both the backend (port 5000) and frontend (port 3000) servers are running simultaneously. You can make API requests from the frontend to the backend.

## API Endpoints

The following RESTful API endpoints are available:

- **GET** `/api/books`: Retrieve a list of all books.
- **GET** `/api/books/:id`: Retrieve a single book by ID.
- **POST** `/api/books`: Add a new book.
- **PUT** `/api/books/:id`: Update an existing book.
- **DELETE** `/api/books/:id`: Delete a book.

## Directory Structure

```plaintext
Book/
│
├── backend/                   # Backend Node.js files
│   └── index.js               # Main Backend
│
├── frontend/                  # Frontend React.js files
│   ├── public/                # Static assets
│   ├── src/   
│   │   ├── pages/             # Pages for the app (e.g., Home, AddBook, EditBook)
│   │   └── App.js             # Main React app entry point
│   └── index.js               # React app entry point file                
└── README.md                  # Project documentation
```

## Usage

- **Add Books**: Navigate to the "Add Book" page to input details of a new book.
- **Edit Books**: Edit existing books by clicking on the "Edit" button.
- **Delete Books**: Remove books from the list using the "Delete" button.
- **Search Books**: Use the search bar to filter books by title.

## Future Improvements

- **Book Categories**: Add categories or genres to better organize books.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Asyabani/Book/blob/main/LICENSE) file for details.

Feel free to fork, clone, and contribute to the project.
