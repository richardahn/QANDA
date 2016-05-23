# QANDA
A simple web app to help me learn more about angular.
The app lets you write your own questions and answer your own questions(feeling like Socrates yet?)

# How to run
1. Clone the repository.
2. Install npm and bower dependencies using:
~~~~
npm install // The 'postinstall' script is configured to install bower dependencies
~~~~
3. By default, the web page will be served locally on port 8080. To start,
~~~~
npm start
~~~~

# How to test
## Unit-testing
Jasmine is used as the BDD testing framework, and Karma runs them. To test,
~~~~
npm test
~~~~
## End-to-end testing
Protractor and Jasmine are used to test e2e functionality. Protractor uses a local Selenium server to proxy requests from the test script to the browser driver on port 4444. To test,
~~~~
npm run protractor
~~~~
