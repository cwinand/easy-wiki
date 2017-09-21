# README

## Description

**NOTE: This is an unfinished application. Do not expect it to do anything.**

This application is intended for use as an easy to set up, easy to understand wiki. It is mostly a React/Redux application, and it has a Rails API back end.

## Setup

The API layer uses Postgres, the best way to install it on a Mac is homebrew.

```shell
$ brew install postgresql
$ brew services start postgresql

# Create the DB and user
$ createuser -s easy-wiki
$ createdb -O easy-wiki easy-wiki_development
```

Then clone the repo, install dependencies, and migrate the DB.

```shell
$ git clone https://github.com/cwinand/easy-wiki.git
$ bundle install
$ yarn
$ rake db:migrate
```

Finally, open two terminal windows to start both the front-end build server and the rails server.

```shell
# Currently, the API calls are hardcoded to localhost:3002
$ rails s -p 3002
```

```shell
# Keep the terminal a little quieter...
$ npm start -s
```

Check out the application at localhost:3000


