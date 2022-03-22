# Bookstore-Redis

New Timesheet for Business User

- [Introduction](#introduction)
- [Quick Start](#quick-start)
- [Docker Test](#docker-test)
## Introduction

[Create React App](https://github.com/facebook/create-react-app) is a quick way to get started with React development and it requires no build configuration. But it completely hides the build config which makes it difficult to extend. It also requires some additional work to integrate it with an existing Node.js/Express backend application.

This is a full stack [React - 16.13](https://reactjs.org/) application with a [Node.js - v14.17.0](https://nodejs.org/en/) and [Express](https://expressjs.com/) backend. Client side code is written in React and the backend API is written using Express.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/hailam15/Lab-redis.git

# Go inside the back-end directory
cd Lab-redis/server

# Then install the back-end dependencies
npm install

# Install fron-end dependencies
cd ..
cd Lab-redis/client
npm install

# Start development back-end server
npm start

# Start front-end server
npm start

## Documentation

**[Front-end]After running, the client will run at http://localhost:3000/, here you can order any book you want and check list of book you've ordered at http://localhost:3000/admin
**[Back-end]Back-end server will run at port http://localhost:5000 and redis will run at port 6379
