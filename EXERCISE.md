# Exercises

## Intro

#### Ruby on Rails

[Ruby on Rails](http://rubyonrails.org/) (referred to as Rails) is a framework created on top of the [Ruby programmming language](https://www.ruby-lang.org/en/) that developers use to build web applications. You can build complete websites using Rails - but in this exercise we are only using it to build a [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) that returns [Json](http://json.org/). Ember.js (see below) will be responsible for the remaining part.

Ruby, the language that powers Ruby on Rails, is an [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming), [dynamic language](https://en.wikipedia.org/wiki/Dynamic_programming_language). It is known to increase programmer productivity by letting programmers focus on building the application rather than having to constantly write [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code). One of [Yukihiro Matsumoto](https://en.wikipedia.org/wiki/Yukihiro_Matsumoto)'s priorities when creating Ruby was programmer happiness. For an idea of the simplicity of ruby (as opposed to something like C++), to concatenate two arrays you can do `[1, 2] + [3, 4]` to get `[1, 2, 3, 4]`.

#### Ember.js

[Ember.js](http://emberjs.com/) is a framework created on top of the [Javascript programming language](https://developer.mozilla.org/en-US/docs/Web/JavaScript) that helps you build [Single Page applications](https://en.wikipedia.org/wiki/Single-page_application). This type of applications allows you to build fast native-like
experiences in the browser. The way they work is that all the application logic is written in JavaScript, and only data
is transferred between the browser and the server.

You can follow the [getting started guide](https://guides.emberjs.com/v2.11.0/getting-started/) on the Ember homepage to get a better introduction.

#### Rails + Ember.js

Ember.js cannot be used on its own as it is merely the part that runs in the browser and we need a "backend" framework to feed it data (in this case we are using Ruby on Rails).

As you can see in this project structure, it is split into two main directories: `rails` and `ember`. They are mostly separate apps that complete each other to create the final result that is our Lebtivity app.

#### Version Control

We are using [git](https://git-scm.com/) for version control. Each change should be commited with a message describing what was changed.

#### Ember CLI

We are using [ember-cli](http://www.ember-cli.com/) as the build tool for the Ember app. Build tools allow us to differentiate between the code we write and the code we deploy. While build steps are a necessity for compiled languages such as C++, they are not required for interpreted languages such as ruby and JavaScript. However, even though it is not necessary, professional JavaScript code should go into a build step as well.

For example, Ember CLI converts ES2015 syntax to ES5 as a build step (via [Babel](https://babeljs.io/)), which allows us to use the latest version of JavaScript even before it's supported in current browsers. It concatenates asset files, converts [SASS](http://sass-lang.com/) to plain old CSS, minifies JavaScript and CSS, etc.

Ember CLI also provides us with a development server with live reload (the page reloads when we make changes to the code) as well as CSS hot-reloading (CSS is updated without reloading the page). Ember CLI also dictates our file structure and what to name our files. You can check out the Ember CLI homepage for more info on what it does and how it works.

Since we are using ES2015 (aka ES6) syntax in our app, you will want to familiarize yourself with it. You can check out [this guide](https://babeljs.io/learn-es2015/) on ES2015 features.

#### SQLite

[SQLite](https://www.sqlite.org/) is a lightweight database management system that requires zero configuration. The main purpose
of SQLite is simplicity and ease of installation. SQLite's simplicity however is not suitable for real life applications.
As this is just an exercise, we are using SQLite here to avoid the hassles of setting up a production level database such as [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) - our database of choice.

#### Code Editors

Traditionally, [IDEs](https://en.wikipedia.org/wiki/Integrated_development_environment) were the tool of choice to write code and build
applications. Examples of IDEs include [Microsoft Visual Studio](https://www.visualstudio.com/vs/), [Netbeans](https://netbeans.org/), and [Eclipse](http://www.eclipse.org/).

Nowadays however, simpler, more lightweight code editors are becoming the preferred tool of choice for a big number (if not the majority) of software engineers. That is our preference as well. There are many great code editors out there such as:

- [Atom](https://atom.io/) (Our tool of choice).
- [Visual Studio Code](https://code.visualstudio.com/) (Microsoft's new code editor which is an alternative to their IDE).
- [Sublime Text](https://www.sublimetext.com/).
- [Vim](http://www.vim.org/) (Very hard to learn but extremely productive once mastered - used without a mouse).
- [Emacs](https://www.gnu.org/software/emacs/) (Vim's nemesis)

You may want to install addons to your tool of choice to add support to the languages we use such as Handlebars and SASS.

There's no "One Tool to Rule Them All", so feel free to use any tool that makes you productive (not necessarily listed above).

## Steps

For this exercise, we're going to add or fix features in an existing [Lebtivity](http://www.lebtivity.com/) mini-clone project. The application is a single page JavaScript application built with Rails and Ember.js.

Note that exercises 8 - 10 are independent puzzles (not part of the Lebtivity clone application).

Projects often contain a [README](https://en.wikipedia.org/wiki/README) file that contains instructions on how to install/develop that project. Follow [these README instructions](https://github.com/Gtlogic/lebtivity-exercise/blob/master/README.md) to setup this project and start development.

1) The current design is not flexible and does not account for various device dimensions. With today's devices, we cannot build our applications with the assumption of one screen size in mind. This is were [responsive web design comes in](https://en.wikipedia.org/wiki/Responsive_web_design). Since CSS is part of the front end, we will be working in the `ember` directory. CSS stylesheets are located in `ember/app/styles`. Notice that stylesheets have the `.scss` extension (as opposed to `.css`). That is because we are using [SASS](http://sass-lang.com/). No need to dive into that now, we will only be working in CSS at the moment, and since SCSS is a superset of CSS, knowing CSS should be enough for now.

We're going to add [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) to support different screen sizes:

- Between 0 and 420px we need to have one event card per row.
- Between 420px and 860px, 2 cards per row.
- Between 860px and 1300px, 4 cards per row.
- 6 cards for screens wider than 1300px.

Things to keep in mind while working on it:
- We need to preserve the event cards' dimensions.
- We need to make sure the images don't get pixelated (which shouldn't happen if event cards remain unchanged).
- The spacing _between_ the event cards needs to stay the same. (If there is extra space let it be on the sides by centering the cards).
- Make sure "Add an event" button is visible on all breakpoints.
- If the last row doesn't contain enough cards, the cards in the last row should be aligned to the left.
- Commit your changes using git with the message "Make the app responsive".

2) The events are missing a field called "contact" which contains info on how to contact the event organizer. Adding this field will require changes to the database, Rails, and Ember.
  - You will need to add "contact" (a string column) to the events table in the database. To do that, use the rails [Migration command](http://edgeguides.rubyonrails.org/active_record_migrations.html). The reason we don't create it in the database manually is to keep track of what changed so others can also apply that same change.
  - You will need to update the Ember event form to save the field.
    * Add the "contact" property to the [model hook](https://guides.emberjs.com/v2.11.0/routing/specifying-a-routes-model/) in the `new` route.
    * Add a "contact" [input](http://guides.emberjs.com/v2.11.0/templates/input-helpers/) to the `new` template
  - Configure the rails events controller to permit "contact" as a parameter by adding it to the whitelisted [strong parameters](http://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters).
  - Add the "contact" value to the `event` Ember template.
  - Commit your changes using git with the message "Add contact field to events"

3) The current dates shown in the event page are not user friendly. We're going to make them prettier.
  - Create an [Ember helper](https://guides.emberjs.com/v2.11.0/templates/writing-helpers/) named `pretty-date` that takes a date and renders it in the following format: "Tuesday, January 4, 2015". You will need to use [moment.js](http://momentjs.com/). Follow the same approach used in the `short-date` helper that is used in the home page.
  - Commit your changes with the message "Make event dates pretty".

4) The current delete button doesn't do anything. We should fix that.
  - Add an [Ember action](http://guides.emberjs.com/v2.11.0/templates/actions/) called "remove" that is handled inside the `event` route. According to REST APIs, deleting a record means performing a DELETE ajax to that resource (`/events/:id` in this case).
  - In Rails, add the [DELETE route](http://guides.rubyonrails.org/routing.html) that points to a `destroy` action in the events controller. The controller's `destroy` action fetches the record (just like the `show` action) and then calls `event.destroy`. Just render an empty hash `render json: {}` when the destroy succeeds.
  - In Ember, redirect the user to the home page when the delete succeeds.
  - Commit your changes with the message "Add delete events feature".

5) There is a bug in the events shown. We should not be seeing past events. We also want to sort the events by date and time.
  - Update the rails events controller to sort the events before sending them. Check [here](http://apidock.com/rails/ActiveRecord/QueryMethods/order) how to sort using Active Record.
  - Update the rails events controller (the `index` action) to only send events that have not passed. Check how to add conditions to Rails model queries [here](http://guides.rubyonrails.org/active_record_querying.html).
  - Commit your changes with the message "Exclude past events".

6) Notice how all the events in the home page share the same picture. Fix it so that each event has a different picture while still using `lorempixel.com`.
 - Commit your changes with the message "Fix images".

7) When you visit the page `http://localhost:4200/hourglass`, you will find an hourglass [GIF](https://en.wikipedia.org/wiki/GIF) animation. GIF animations are no longer the recommended way to animate on the web as they are of low quality and fps. Instead,
we are going to animate the hour glass using solely [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)s and
[CSS animations](https://developer.mozilla.org/en/docs/Web/CSS/animation). The
4 SVG images you will require to build the animation are found in the `public/assets/images/hour-glasses` directory.
Replace the GIF in `app/templates/hourglass.hbs` with the SVG images to animate them.

  Things to consider when working on it:

  - You can only use CSS (and the SVGs) to animate it.
  - You will need to work in the `app/styles/hour-glass.scss` stylesheet and the `app/templates/hourglass.hbs` template.
  - The animation needs to be infinite. Whenever it's done the hour glass needs to rotate and repeat (as seen in the GIF).
  - You will want to use [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
  to fade in/out the different hour glasses and [CSS transforms](https://developer.mozilla.org/en/docs/Web/CSS/animation) to rotate it.
  - The animation happens as follows: `hour-glass-1` shows up, then fades away. Half-way through fading, `hour-glass-2` starts fading in.
  Same happens for the rest until the last hour glass is `hour-glass-1` rotated, where it rotates again to repeat the animation.
  - The total duration of one loop of the animation should be 3 seconds.

**The below exercises are puzzle questions that are not applied to the project we're working on.
You can use something like [JSBin](https://jsbin.com/) to test and execute the code of the below puzzles with if you want.**


8) Given the code in the file `puzzles/make-crazy.js`;

  The code should log the following text in the console:

  ```
  Hello omar !!! omar Hello Hello omar !!! omar Hello
  Thank you rami rizk !!! rizk rami you Thank Thank you rami rizk !!! rizk rami you Thank
  ```

  Things to look into when working on this:
  - JavaScript's `console.log` method
  - [Higher order functions](https://en.wikipedia.org/wiki/Higher-order_function)
  - The JavaScript[Spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)

  Complete the code in the `makeCrazy` function in `puzzles/make-crazy.js` and commit with the message "Make functions crazy".
  You can use [JSBin](https://jsbin.com/) to test and execute the code.

9) Given the code in the file `puzzles/whats-my-name.js`:

 What is the code inside the `whatsMyName` function such that the executed code logs the following strings:

 ```
 teddy
 rami
 omar
 ```

 Note that if we change the calling order the log order should also change:

 ```js
 people.omar(); // logs 'omar'
 people.teddy(); // logs 'teddy'
 people.rami(); // logs 'rami'
 ```

 Logs:

 ```
 omar
 teddy
 rami
 ```

 While working on this you'll want to look into:

 - JavaScript's `console.log` method.
 - What is the value of `this` inside a JavaScript function.
 - JavaScript's `Object.keys` method.

 Complete the code in `puzzles/whats-my-name.js` and commit your changes with the message "What's my name".
 You can use [JSBin](https://jsbin.com/) to test and execute the code.

10) Given the code in `puzzles/call-after.js`:

  Please fill in the code inside the `callAfter` function such that the code would:

  - pause 3 seconds
  - log "3000ms have passed"
  - pause 2 seconds
  - log "2000ms have passed"
  - pause 4 seconds
  - log "4000ms have passed"

  You'll want to look into:
  - JavaScript's array `reduce` method
  - JavaScript's `setTimeout`

  Complete the `puzzles/call-after.js` code and commit with the message "Use reduce to call async functions consecutively".
  You can use [JSBin](https://jsbin.com/) to test and execute the code.
