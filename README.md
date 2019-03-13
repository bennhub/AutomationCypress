# Why Cypress?
Cypress does not use Selenium: most of the end to end tools that we have experimented with, are using Selenium, that’s why they have almost the same problems.
Cypress supports any framework or website quite well: There are hundreds of projects using the latest React, Angular, Vue, Elm, etc. frameworks. Cypress also works equally well on older server rendered pages or applications.
Cypress tests are only written in JavaScript: While you can compile down to JavaScript from any other language, ultimately the test code is executed inside the browser itself. There are no languages or driver bindings - there is and will only ever be just JavaScript.
There are no dependencies, you put your test in package.json and that’s it.
Cypress runs much, much faster in comparison with the end to end tools by Selenium that we have experimented.
There is screen shot for every step, of your script, which can be quite helpful if there is any false passing or failing test, yeah good for debugging!!
Cypress has a clear syntax, it is easy to read it, you will like it!!

# install
https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing

# Commands
run headless: 
npm run cy:run 

run visually with test runner: 
npm run cypress:open

run single test:
npm run cy:run --  --spec "cypress/integration/HomePhone/HPLiteAddRemoveCart.spec.js"

run with with dashboard service:
./node_modules/.bin/cypress run --record --key 203f8361-e600-4aa7-b164-f17a5503a072
