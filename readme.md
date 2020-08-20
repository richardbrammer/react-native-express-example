# React Native app with Express back end
An example using TypeScript, Redux, Expo for Express and React Native.

**Requirements**
Node.js > 14.3

## Backend

The backend API is based on NodeJS and [Express](http://expressjs.com/). To run the development server, you have to install the dependencies first.

- Install dependencies
`$ npm i`

- Start Server
`$ npm start`

The API is exposed on http://localhost:8000/api/v1

The only available resource is `users`: `GET http://localhost:8000/api/v1/users`, which is a list of user objects `{"id":"1", "avatar": "https://i.pravatar.cc/150?img=1", "name": "Morgan James"}`.

## App

You will find the source code for the React Native application in the directory `app`. 
The application has been setup using [Expo](https://expo.io/).
To setup your development environment you have to install Expo globally and install the npm dependencies.

1. Install Expo globally using npm
`$ npm i -g expo`

2. Install dependencies
`$ npm i`

### Development

The app is dependent on the backend API, so you should make sure to start the backend API server first. 

To run the app in development mode execute

`$ npm start`

Open your browser on http://localhost:19002/ to see the Metro Bundler. From there you can check the app in the browser, or in the iOS or Android simulators.

### Test

The app uses Jest for unit tests. To run the tests execute
`$ npm test`

