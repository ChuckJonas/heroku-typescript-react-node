# heroku-typescript-react-node

Boilerplate for a typescript react frontend / node backend application.  Setup to be deployed to heroku.

## Setup

Setup similar to [heroku-cra-node](https://github.com/mars/heroku-cra-node) but with webpack & typescript compliation.  Project has 2 package.json files, so you will need to run `npm install` twice.

1. `git clone`
1. `cd`
1. `npm install`
1. `cd react-app`
1. `npm install`

## Deploy to heroku

1. `heroku create`
1. `git push heroku master`

Note: Uses the `heroku-postbuild` script to build the react app upon deployment.

## Development

1. open terminal
1. `npm run dev-server`
1. open new tab
1. `npm run dev-client`

- Uses `nodemon` to automaticly update the server on changes.
- Uses `webpack-dev-server` to hot reload client changes.