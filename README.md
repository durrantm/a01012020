# a01012020

Budget: $100

Fix React dependency array for useEffect in a sample app that fetches BTC price and updates number of API calls made.

The app is intended to get the btc price every x second (e.g. 2 as currently set).

The app works and the current test (App) pass.

I am having trouble getting the dependency aray for useEffect correct though.  App.js, line 27
For instance VScode is currently giving a warning about not having "getData" in there but when I add getData or replace current with it, either:

- i get runaway infinite API calls.  This is not good and if not caught in second will then lead to API blocking with 403's for a few minutes.
- I break the app with a different error
- The app no longer updates.

Also I notice that the "#calls" counter is not increasing every two seconds consitently, only when the price changes.  I also tried adding that to the dependency array and got similar and even worse errors and runaway infinite calls.


Your task is to address these issues.  
The requirements are:

- A PR
- code changes
- explanation / suggestions
- tests to cover the code

This is a code only request, not for a pairing session.

I'm paying more than my previous becuase I want good tests.

Your biggest challenge may be in avoiding the infinite calls and API blocking issue while testing so be careful!
The good news is that the API is public and no keys are needed so I don't need to give you any.
