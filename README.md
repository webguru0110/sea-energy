# Sea-energy Admin Demo


Sea-energy admin (React 18.3.1) usually requires a REST/GraphQL server to provide data. In this demo however, the API is simulated by the browser (using [FakeRest](https://github.com/marmelab/FakeRest)). The source data is generated at runtime by a package called [data-generator](https://github.com/marmelab/react-admin/tree/master/examples/data-generator).

To explore the source code, start with [src/App.tsx](/src/App.tsx).

**Note**: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Install Project

In the project directory, you can run:

### `yarn install`


## Available Scripts

In the project directory, you can run:

### `yarn demo` or `npm run demo`

### `yarn dev` or `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost.seaenergy.com:8000](http://localhost.seaenergy.com:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

hosts file setting:

127.0.0.1        localhost.seaenergy.com

### `npm run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run deploy`

Deploy the build to GitHub gh-pages.


## Dev Environment

node-version: v23.0.0
yarn-version: v1.22.22
