# Welcome to ES7 Node js Web Server API Architecture Carolina ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)
Hey guys, I started to write this repo from the reason that I didn't find any good node js es6/7 architecture across the net.

I call this architecture carolina phase 1.
Everyone is more than welcome to fork this repo upload issue or email me to make a suggestions.

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/sayeko/nodejs-es7-express-architecture.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Install gulp globally
npm i gulp -g

# Then simply start your app with the automation tool gulp
gulp
```

Architecture Core Principle
---------------------------

This main architecture principle is separation, We have currenlty 3 core modules.
Route Modules
Handler Modules
Service Modules

Theses modules are computed by the Environment that gather their data and setup application configuration and
in the end pass it to Initialized to build our application.

The initialized do the main initialization of our architecture, it responsible to take configuration and pass it at the creation
of the core modules by their class name, generate the application route by the route modules route map and bind to every route
map property object the correct handler invoker function! or in other architecture language (controller).

OK!, lets dive in into our core modules.


Route Core Modules
------------------
Every route defined in the routes folder with the prefix `_route`,
the route module should be initialized in her file the rootPath it's me the root route for this router.
```
#for example:

super.init({
   rootPath: '/'
});

for every routing path this is the base route. `/`

and for mapping this routing we should create our routeMap Array object.

 return [
            {
                path: '/',
                method: 'get',
                handler: 'test'
            },
            {
                path: '/authenticate',
                method: 'post',
                handler: 'authenticate'
            },
            {
                path: '/test',
                method: 'get',
                handler: 'testData'
            },
            {
                path: '/user',
                method: 'get',
                handler: 'testDataData'
            }
  ]

  I will not deep dive and explain on it because it seems kinda explanatory.
        
```


# To be continue.