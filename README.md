# er4

Yet another personal site rebuild project, this time to learn the ins and outs of:

* [React.js](http://facebook.github.io/react)
* [React Redux](https://github.com/reactjs/react-redux)
* [Babel.js](https://babeljs.io)
* [Webpack](https://webpack.github.io)
* [CSS Modules](https://github.com/css-modules/css-modules)
* [PostCSS](http://postcss.org)
* [Express](http://expressjs.com)
* [Knex.js](http://knexjs.org)

## Prerequisites

You will need the following software properly installed on your computer:

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)

## Installation

* `git clone git@github.com:evrowe/er4.git` this repository
* change into the new directory
* `npm install`

## Running / Development

The development server assumes that `NODE_ENV=development` means that the server(s)
will run in development mode. You can set this in your terminal, in your `.profile`
or `.zshrc` or `.bashrc` whatever dang file you use to set up your terminal session.

The node server will run at `localhost:3000`; the webpack hot reload server runs at
`localhost:4200`, and will automatically proxy API requests to the node server.

To start up:
* `npm run server:dev` starts the node server in development mode, using `nodemon`
to auto restart when files change. Very useful.
* `npm run server:webpack` starts the webpack server. Modules will hot reload when
they update.
* Visit the app at [http://localhost:4200](http://localhost:4200).

## Production

Run the app in production mode for better Express performance when you want to
deploy to a real server. Only I should ever need this but meh.

* `npm run build` builds a production-ready artifact of the UI application
* `npm run start` boots the server in production mode.

## Deploying

We'll figure that out soon enough.

## Further Reading / Useful Links

* Development Browser Extensions
  * [React Dev Tools](https://github.com/facebook/react-devtools)
  * [Redux Dev Tools](https://github.com/gaearon/redux-devtools)
