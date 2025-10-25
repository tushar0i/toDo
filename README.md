# toDo Application

This is a simple, full-stack to-do list application built with a React frontend and a Node.js/Express backend.

## Features

* **View** a list of all to-do items.
* **Add** a new to-do item to the list.

## Tech Stack

* **Frontend:** React
* **Backend:** Node.js, Express
* **Middleware:** `cors` (to handle cross-origin requests)

---

## Setup and Installation

You must run both the backend and frontend servers simultaneously in separate terminal windows.

### 1. Backend Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd /path/to/your/backend-folder
    ```
2.  Install the required npm packages:
    ```bash
    npm install
    ```
3.  Start the backend server:
    ```bash
    npm start
    ```
    The server will typically run on `http://localhost:5001` (or your configured port).

### 2. Frontend Setup

1.  Open a **new terminal** and navigate to the `frontend` directory:
    ```bash
    cd /path/to/your/frontend-folder
    ```
2.  Install the required npm packages:
    ```bash
    npm install
    ```
3.  Start the React development server:
    ```bash
    npm start
    ```
    The application will automatically open in your browser at `http://localhost:3000`.

---

## API Endpoints

The backend server exposes the following endpoints:

### `GET /todos`

* **Description:** Retrieves the complete list of to-do items.
* **Method:** `GET`
* **Response (Success):**
    ```json
    [
        { "id": 1, "text": "Example task 1","description": "some thing", "completed": false },
        { "id": 2, "text": "Example task 2","description": "some thing", "completed": false }
    ]
    ```

### `POST /todos`

* **Description:** Creates a new to-do item.
* **Method:** `POST`
* **Request Body (JSON):**
    ```json
    {
        "text": "My new task",
        "description": "some thing"
    }
    ```
* **Response (Success):**
    ```json
    {
        "id": 3,
        "text": "My new task",
        "description": "some thing",
        "completed": false
    }
    ```
