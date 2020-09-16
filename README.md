# Blackthornrx Functional UI Tests

### Summary
This directory contains the UI Tests for the Blackthornrx front-end projects, these tests are written in nodejs using [cypress.io](https://www.cypress.io) and [mocha](https://mochajs.org/) test framework.

### Test approach 
We try to minimise the number of e2e tests that we have, as by nature these are slow, due to that it's flaky. Given the majority of Blackthornrx pages are with limited functionality it is important to ***focus on core functional areas/user journeys only***.

### Code Guidelines
- Please familiarise yourself with the code structure and the existing tests. 
- Please follow the existing patterns. Re-use/DRY (don't repeat yourself) is key. 
- Code should be clean and kept to the same standard as production code, i.e. no lazy coding - make sure unused variables and methods are removed, code is correctly formatted, with no random newlines and whitespaces. Where possible node js style guidelines should be followed.
- We recommend using [Visual Studio Code](https://code.visualstudio.com/) and installing the eslintrc extension. ***Warnings must not be ignored.***

### Stable Tests
Non-Determinism in tests is worse than not having any tests at all. Before pushing any new tests run them ***five times in a row***  without a single fail. 

### Test Quarantine Process


## Failure threshold

### Spec Classes
- Inside mocha specs there should be minimal logic. Here we should only, call methods on Page Classes, get values from Page Class methods and assert on them. This is not the place for loops, if statements or finding UI elements on a screen.
- Do not include any implementation details in specs. For example. cy.get('element').click() . These commands and actions should be kept in the lower level Page.Extension class. 

Simple Logic Examples:
- Go to page X
- Perform action on page
- Assert Z is Y- etc..

Good Example:
```js 
    it('should allow users to log-in', () => {
       home
           .visit()
           .clickLogin();
    });
```

### Page Classes
A Page Class/Object is an object-oriented class that serves as an representation of a page in your web application. 
Page classes should only do these things:
- Store UI element locators
- Actions (No output)
- Queries (With answers)
- Highly descriptive actions/queries (As directed by demands of Tests)
- DO NOT SHARE PAGES WITHIN PAGES, pages should be independent to the page that you're current on.

***They should NEVER include assertions.***

### Utility Helpers
Favour small reusable javascript classes over json files.

### Test Data
Try to avoid using hard coded test data 


### Wait Strategy

### Installation
You should have Node.js installed. If you don't have Node installed, we recommend installing NVM to assist managing multiple active Node.js versions.
Blackthornrx recommended version is `10+`.
    
Once node is installed, execute:   

    npm install

### How do I run the tests on my local machine?

To Test on UI:
 
    npm run cypress

To Test on headless:
 
    npm test

    
### Test Environments 
    
### Launch Arguments


### Run Single feature, or test
During test development you may wish to execute a single test or spec. This should not be handled via the package.json. It should be done so via commandline. 

    npm run test --spec spec_name_with_path (need to debug)
    
    OR

    npx cypress run --spec spec_name_with_path    

### Set default timeout for all commands before run
    npx cypress run --config defaultCommandTimeout=10000 
# UIAutomation
