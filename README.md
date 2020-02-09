## Quick Start

1. Unzip the repository
2. Run npm install to install dependencies
3. Run npm start to build and run the application
4. Open localhost:3000 in your browser
5. Run npm test to run test cases

## The Stack

### Backend
This application is written in Node.js because of the large package ecosystem, and the large developer community. The version of Node used is 10.15.x. There is no build process for our server. Express.js is used to serve both content 

### Prerequisites
To develop, you need the following packages:
node > 10.15.0 and npm > 5.5.1

### Environment Variables
The variables in this file will be loaded into the application on startup using the dotenv NPM package

### Test
The application has test cases written in Mocha and can be run by entering the command npm test

### Output
The application creates resultset.json to store the problem result output

## Libraries

### dotenv
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

### express
Fast, minimalist web framework for node

### fs
read clicks.json as input and write resultset.json as output

### underscore
Underscore.js is a utility library for JavaScript that provides support for each, map, reduce, filter, etc

### chai
Chai is a BDD / TDD assertion library for node

### chai-fs
Chai assertion plugin for the Node.js filesystem API. Uses path and synchronous fs to assert files and directories.

### mocha
Simple, flexible, JavaScript test framework for Node.js & The Browser