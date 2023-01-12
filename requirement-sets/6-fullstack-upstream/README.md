# Fullstack Engineer - Home Assignment

You will write a web application that shows information about a business entry like the business' name, address and opening hours.

## Upstream REST API
We provide you a (fake) REST API to fetch data about "places" (business entries). The places resource is located at
https://storage.googleapis.com/coding-session-rest-api/{place_id}

Two valid place ids are: `GXvPAor1ifNfpF0U5PTG0w` and `ohGSnJtMIC5nPfYRi_HTAg`

The properties `displayed_what`, `displayed_where` and `opening_hours` will provide you the needed information.

## Backend service
Write a "backend for frontend" service that fetches data for a given place id from the upstream API, prepares the data for the UI and offers it as a REST or GraphQL API to the web application.

## Web application
Write a web application that displays at least the following details about a place (e.g. a restaurant):

- name
- address
- opening hours

The information about the place is fetched from a backend REST service that you'll write, by providing an id of the place.

The result could look like this:

<table><tr><td>
<img src="https://user-images.githubusercontent.com/783861/72618823-4cf27300-393c-11ea-9e6f-4b7e81dcb6c7.png">
</td></tr></table>

Days with the same opening hours are grouped together (like "Tuesday - Friday" in the example).

Feel free to make it look nicer (!), by using a different styling or additional data from the json you'll load from the upstream API.

# Last words
You can use technologies of your choice for the web app and backend service, but they must be two separate applications. It's important that you're experienced with the technologies and frameworks you choose. Don't try to impress us by choosing fancy new things. ;-)

Please provide us a link to the git repos for your web app and the backend service. Please quickly mention how you bootstrapped your app and mention any sources that helped you doing that (sample apps, blog posts etc.).

Don't spend more then 4 hours on this task.

---
Taken from: https://gist.github.com/ractive/8ea5e93b26ab24e5caf58d1c8c235b0d
