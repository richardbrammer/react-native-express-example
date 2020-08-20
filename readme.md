# React Native app with Express backend API
An example using TypeScript, Redux, Expo for Express and React Native.
The app loads a list of user objects from the backend API and displays the users name and avatar in a `<FlatList>`. While the user objects are being loaded from the API, the app displays a `Loading...` state. If the connection to the API cannot be established or an error occurs, an error message is displayed.

**Requirements**
- Node.js > 14.3 including npm

## Backend

The backend API is based on NodeJS and [Express](http://expressjs.com/). The source code for the backend resides in the subdirectory `backend`. To run the development server, you have to install the dependencies first. 

- Install dependencies

```
$ cd backend`
$ npm i
```

- Start Server

`$ npm start`

The API is exposed on http://localhost:8000/api/v1

Currently, the only available resource is `users`:

`GET http://localhost:8000/api/v1/users` 

This is a list of user objects like this:

`{"id":"1", "avatar": "https://i.pravatar.cc/150?img=1", "name": "Morgan James"}`.

To change the list of users, modify the `users.json` in the `./db` directory.

## App

You will find the source code for the React Native application in the subdirectory `app`. 
The application has been setup using [Expo](https://expo.io/).
To setup your development environment you have to install Expo globally and install the npm dependencies.

1. Install Expo globally using npm

```
$ cd app
$ npm i -g expo
```

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

