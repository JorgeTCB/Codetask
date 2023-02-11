# Crossbridge Codeskill 

This project is focused to showcase some of the coding skills and test analysis skills from Jorge Tellez.

The following scenarios are being covered by the automation. Due to some of the limitations on the provided Demo page (https://www.demoblaze.com) not all of the requested scenarios can be covered. 



## Not Covered Scenarios

Here is a list of them and the reason:

Epic User Management:
- Point 3 cannot be automated nor tested since the provided URL [https://www.demoblaze.com/] does not support forgot password functionality.
- Point 4 cannot be automated nor tested since the provided URL [https://www.demoblaze.com/] does not support chat.
- Point 5 cannot be automated nor tested since the provided URL [https://www.demoblaze.com/] does not support password change.
- Point 6 cannot be automated nor tested since the provided URL [https://www.demoblaze.com/] does not support chat.

Epic User chat system.
- This Epic was not automated since the provided URL [https://www.demoblaze.com/] does not support chat.


## Covered Scenarios

Epic User Management:
- Point 1:
---
    - Given a user with a valid account
    - When the user clicks Login
    - And the user enters his credentials
    - And clicks Login
    - Then the user should be located on the home page logged in
---
    - Given a user with an invalid account
    - When the user clicks Login
    - And enters his credentials
    - And clicks Login
    - Then the user should receive a warning indicating wrong credentials
---
    - Given a user with no credentials
    - When the user clicks Login
    - And then the user clicks Close
    - Then the user should be located on the homepage
- Point 2:
---
    - Given a user with no account
    - When the user clicks Signup
    - And the user enters his desired username
    - And the user enters his desired password
    - And clicks Sign Up
    - Then the user should receive a pop up indicating he signed up correctly


## Installation

Install the project by running npm i

**Execute** the test cases by running npm run test

To run the API tests, you need postman. Then just import the collection that is in the root of this project and run the collection from postman.
The API contain validation tests to verify some of the content of the call as well as the status response code.
    
