# nodePOC
A basic application built with Node.js and MySQL, demonstrating a clean architecture for scalable application development. It uses Express.js for handling HTTP requests, with a structured flow involving routes, services, and repositories to interact with a MySQL database.
The app is organized into separate folders (route, service, repo) to ensure scalability and maintainability.
Connects to a MySQL database to fetch and interact with data.
REST API: Exposes endpoints to interact with the database using simple GET requests.
app.js: Entry point of the application, where the server is configured.
route/: Contains route handlers to define API endpoints.
service/: Contains business logic that calls repository functions.
repo/: Interfaces with the database to perform CRUD operations.
module/: Contains the database configuration and connection.
