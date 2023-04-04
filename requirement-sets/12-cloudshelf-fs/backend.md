# Backend
You have been provided with a NestJS backend project that exposes a GraphQL API for
managing products.

Assuming you are only completing the backend section of this exercise, it is completely
acceptable to run your GraphQL queries and mutations through Apollo Studio.

You should continue to follow the Object Oriented Programming approach set out by the code
you have been provided, if new functionality is required you should demonstrate a good level of
abstraction, and adhere the SOLID principles to produce easily maintainable and testable code.

In the context of this project a Product should consist of the following properties:
- A name
- A price
- A description
- At least one image (images can be stored as a URL)

Please complete the following tasks:
- Ensure products can be created
- Ensure products can be deleted
- Ensure products can be retrieved as a paginated list
- Ensure a single product can be returned
- Ensure all mutations can only be run by an authenticated user
- Ensure the user of any given endpoint is returned a relevant error if a problem occurs.

The following credentials can be used to connect to your dockerized database with TypeORM
- Host: localhost
- Port: 5432
- Schema: cloudshelf-junior-exercise
- User: cloudshelf
- Password: cloudshelf
- Entity Directory: dist/**/*.entity.ts

## Hints
- The NestJS documentation is usually good, and will be helpful if you have no experience
with this framework.
- A docker-compose file has been included in the project and can be found in the
/tools/docker directory; this will configure redis and postgres for you.
- You can start the project by running yarn start in your terminal.
- You can ensure the project is correctly running by visiting
http://localhost:3100/hello-candidate in your browser of choice.
- Authentication has not been provided for you.
- It is your responsibility to ensure that the project correctly follows the specification
outlined above, you should not assume all the code that has been provided to you is
correct.