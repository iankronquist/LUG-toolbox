OSU LUG's Toolbox
=================

A quick app for storing our favorite tools.

Ideas
-----
* Add a hamper plugin and an REST API
* Add a reviews system
* Add a compare and contrast system
* Add a user and data stats page (last thing submitted, most frequent
  submitters, etc.)
* Add some spunk and style!

Getting started
---------------
1. Install node.js on your system
2. Install site dependencies
3. Run migrations
4. Run the app
```shell
$ npm install
$ npm run migrations
$ npm start
```

Some handy commands:
* `npm start`: Start the app
* `npm test`: Test the app. (No tests yet, be the first to write some!)
* `npm run linter`: Run the linter.
* `npm run migrations`: Run migrations.

Useful docs:
* Knex DB backend: http://knexjs.org/#Builder-insert
* Express js web framework: http://expressjs.com/
* Nunjucks templates (like Jinja): https://mozilla.github.io/nunjucks/
* Mocha testing framework: http://mochajs.org/

Testing
-------
Tests are run using mocha.
```shell
$ npm test
```
You can also run the jshint linter quite easily:
```shell
$ npm run lint
```

Configuration
-------------
Configuration is done using environment variables. Sane defaults are provided
for a dev environment, but require dev dependencies to be installed.
