# nodejs-es7-clean-boilerplate

Nodes JS latest es7 features clean boilerplate include test with coverage. (18/11/2016)

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/sayeko/nodejs-es7-clean-boilerplate.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Install gulp globally
npm i gulp -g

# Then simply start your app with the automation tool gulp
gulp
```

Test & Coverage
---------------

A healthy application is a tested one ;),
For unit test with Mocha, Chai, Isparta(coverage)

```gulp
# Run in cmd or whatever tool your kick in gulp task
gulp coverage

This well create a coverage folder, and run all unit test in the test root folder.
```