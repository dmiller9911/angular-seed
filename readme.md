# Angular Seed

This project is an application start for a basic [AngularJS](http://angularjs.org/) web app.

It contains a sample AngularJS application with a few development tools configured to help you along the way.  It has also been written to follow 
"most" of the styles outlined in the [angular-styleguide](https://github.com/johnpapa/angular-styleguide) put together by [John Papa](https://github.com/johnpapa/).

The seed application itself is only 1 state, but displayed ways to use each of Angular's main methods (Config, Controllers, Directives, Factories).

[Demo Here](http://dmiller9911.github.io/angular-seed)

## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone this repository. You can install git from
[http://git-scm.com/](http://git-scm.com/).

The development tools provided require node.js. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed

Clone the angular-seed repository using git:

```
git clone https://github.com/dmiller9911/angular-seed
cd angular-seed
```

If you just want to start a new project without the angular-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/dmiller9911/angular-seed <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

This project uses both npm and bower dependencies. Too install them run the following:

```
npm install
bower isntall
```

### Run the Application

To run the application without any minification or concatination you can simply run the following:

```
grunt server
```

You can now browse to the app at [http://localhost:9000](http://localhost:9000).

To run the application WITH minification and concatination run:

```
grunt server-dist
```

### Build the Application

To build the application and deploy it to the dist directory run the following:

```
grunt build
```

## Directory Layout

```
src/                    --> all of the source files for the application
  app/                  --> Angular App Files (Including Templates)
    app.module.js       --> Main Module Declaration
    blocks/             --> Reuseable Blocks
        blocks.module.js        --> Module Declaration
        interceptor.factory.js  --> Factory that can be used as a http interceptor
        logger.factory.js       --> Logging Factory to keep logging easy and consistant
        storage.factory.js      --> Angular Wrapper for Local and Session Storage
    components/         --> Contains all components or "widgets" for the app
        header/         --> Contains the directive, controller, and template for the main header
    core/               --> Contains all core config or providers for the app.
        core.module.js  --> Module Declaration
        api.provider.js --> Provider to set the base url for your api
        core.config.js  --> Main config (outside of routing)
        core.routes.js  --> Main route redirects anything to /
        core.constants.js   --> Sets any constants needed. Sets globals to injectables.
    home/               --> Home Module. Contains an example of using state provider.
    photos/             --> Photos Module. Contains an example factory using $http.
  assets/               --> Contains all images for the site
  styles/               --> Contains all SASS files
    main.scss           --> Starts the process for sass.
    modules/            --> Contains Sass mixins that do not produce css.
    partials/           --> Contains Sass that DOES process css.
```