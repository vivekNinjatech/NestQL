# NestJS + TypeScript + GraphQL + PostgreSQL Backend

![NestJS Logo](https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg)
![Postgreql Logo](https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg)
![Typescript logo](https://en.wikipedia.org/wiki/TypeScript#/media/File:Typescript.svg)
![GraphQL Logo](https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg)


## Overview

This project demonstrates how to set up a **backend API using NestJS**, leveraging **TypeScript, GraphQL, and PostgreSQL**. It provides a robust and scalable foundation for building GraphQL-based applications with a structured architecture.

## Features

- 🚀 **NestJS** for modular and scalable backend development
- 📜 **TypeScript** for strong typing and maintainability
- 🔥 **GraphQL** API for flexible querying and efficient data retrieval
- 🛢 **PostgreSQL** as the relational database
- 🎭 **TypeORM** for ORM and database interactions
- ✅ **GraphQL Playground** for easy API exploration
- 🔐 **Validation and Error Handling** for input validation

## Technologies Used

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Docker](https://www.docker.com/) *(Optional for database setup)*

## Project Architecture

```
📂 nestjs-graphql-postgres
├── 📁 src
│   ├── 📁 modules
│   │   ├── 📁 players
│   │   │   ├── entities/
│   │   │   ├── players.module.ts
│   │   │   ├── players.resolver.ts
│   │   │   ├── players.service.ts
│   │   ├── 📁 teams
│   │   │   ├── entities/
│   │   │   ├── teams.module.ts
│   │   │   ├── teams.resolver.ts
│   │   │   ├── teams.service.ts
│   ├── 📁 config
│   │   ├── database.config.ts
│   ├── app.module.ts
│   ├── main.ts
├── .env
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
```

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later)
- [PostgreSQL](https://www.postgresql.org/) (or Docker for database setup)

### Clone the Repository
```sh
git clone https://github.com/your-username/nestjs-graphql-postgres.git
cd nestjs-graphql-postgres
```

### Install Dependencies
```sh
npm install
```

### Setup Environment Variables
Create a `.env` file in the root directory and add:
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=nestjs_db
```

### Run PostgreSQL with Docker (Optional)
```sh
docker-compose up -d
```

### Run Migrations (if using TypeORM)
```sh
npm run migration:run
```

### Start the Application
```sh
npm run start:dev
```

## GraphQL API Usage

Once the server is running, navigate to:
```
http://localhost:3000/graphql
```

Here you can explore and test queries/mutations using GraphQL Playground.

### Example GraphQL Query
```graphql
query {
  getTeams {
    id
    name
    stadium
  }
}
```

### Example GraphQL Mutation
```graphql
mutation {
  createPlayer(
    player: {
      name: "Vinicius Jr",
      age: 23,
      nationality: "Brazil",
      jerseyNumber: 7,
      club: "Real Madrid",
      height: 1.76,
      weight: 73,
      positions: ["Left Winger"],
      goals: 12,
      assists: 6,
      yellowCards: 3,
      redCards: 0,
      matchesPlayed: 30,
      teamId: 1
    }
  ) {
    name
  }
}
```

## Docker Setup (Optional)

If you want to run everything using Docker, create a `docker-compose.yml` file:
```yaml
version: '3.8'
services:
  database:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: yourpassword
      POSTGRES_DB: nestjs_db
    ports:
      - "5432:5432"
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - database
    environment:
      DATABASE_HOST: database
      DATABASE_PORT: 5432
      DATABASE_USER: postgres
      DATABASE_PASSWORD: yourpassword
      DATABASE_NAME: nestjs_db
```
Then run:
```sh
docker-compose up -d
```

## Folder Structure Explanation

- **`modules/players`**: Contains the Player entity, service, resolver, and module
- **`modules/teams`**: Contains the Team entity, service, resolver, and module
- **`config/`**: Stores configuration files (e.g., database connection)
- **`main.ts`**: Entry point of the application
- **`app.module.ts`**: Root module that imports other modules

## Images

### GraphQL Playground
![GraphQL Playground](https://graphql.org/img/og_image.png)

### NestJS Architecture
![NestJS](https://docs.nestjs.com/assets/logo-small.svg)

## Contributing

1. Fork the project
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a Pull Request

## License

This project is licensed under the MIT License.

