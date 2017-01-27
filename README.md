# Entrance Challenge

This is an entrance challenge for junior software engineer applicants. The exercise instructions
can be found in the `EXERCISE.MD` file. You can follow the installation instructions below
to install the project on your machine.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Ruby](https://rvm.io/)
* [Ruby on Rails](http://rubyonrails.org/)
* [Bundler](http://bundler.io/)

Note: On windows use the [ruby installer](https://rubyinstaller.org) to download ruby version 2.2.x. You will also need to get the ruby development kit from the same website, follow instructions [here](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit#quick-start) to install it.

## Installation

- Clone the repo `git clone https://github.com/Gtlogic/challenge.git`
- Go into the ember directory `cd challenge/ember`
- Install dependencies `npm install && bower install`
- Go into the rails directory `cd ../rails`
- Install dependencies `bundle install`
- Create the database and run the migrations `bin/rake db:create db:migrate`
- Create data in the database `bin/rake db:populate` (re-use this command whenever you want to reset the data)

#### Running / Development

- Run the rails server: from the rails directory run: `rails s`
- Run the ember server: from the ember directory run: `npm start`
- Visit `http://localhost:4200`
