Since the app was not consistently working on port 3000, I created a mock server on port:3100 with the same endpoints and continued writing the tests. 

In a real life scenario, I would report the issue with the real server (3000) to the engineering team. 

In the meanwhile I will create a mock server on port 3100 and continue manual and automated testing. 

After the issue is resolved, the tests can be configured to run on the real server by changing one line of code.

The above approach will not block the QA team and enable them to continue testing while DEV team fixes the issue.

### Instructions for running tests on mock server

- `npm install`
- `npm run mock-server`
  - wait for the iteractive CLI to start
  - select `Select Collection` (press ENTER)
  - select `IDN10016` (press Enter)
  - do not close this process, open another terminal and run the below command for testing
- `npm run mock:test`