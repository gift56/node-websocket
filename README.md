# Sportz - Real-time Sports Commentary

Sportz is a real-time sports commentary application that allows users to get live updates on sports matches. It uses WebSockets to provide a seamless and instant experience.

## Features

*   Real-time match updates
*   Live commentary
*   PostgreSQL database for data storage
*   Drizzle ORM for database interactions

## Getting Started

### Prerequisites

*   Node.js
*   PostgreSQL

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/gift56/node-websocket.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the root of the project and add the following environment variable:
    ```
    DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>"
    ```
4.  Generate and apply the database migrations:
    ```bash
    npm run db:generate
    npm run db:migrate
    ```

### Running the Application

To start the development server, run the following command:

```bash
npm run dev
```

To start the application in production, run the following command:

```bash
npm start
```

## Database Schema

The database schema is defined in `src/db/schema.js` and consists of two tables:

*   `matches`: Stores information about sports matches, such as the sport, teams, status, and scores.
*   `commentary`: Stores live commentary for the matches.

## Available Scripts

*   `npm run dev`: Starts the development server with hot-reloading.
*   `npm run start`: Starts the production server.
*   `npm run db:generate`: Generates database migrations based on the schema.
*   `npm run db:migrate`: Applies the database migrations.
