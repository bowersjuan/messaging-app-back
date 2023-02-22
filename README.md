## Back-End Server and API

### Q'Hubo Messenger Back-End Express Server

---

## Repos and Deployment Links

- [Front-End GitHub Repo](https://github.com/bowersjuan/messaging-app-front)
- [Netlify Front](https://main--leafy-sable-4b9095.netlify.app/)
- [Back-End GitHub Repo](https://github.com/bowersjuan/messaging-app-back)
- [Render Back](https://dashboard.render.com/web/srv-cfkndsha6gductg2n4ug)

- [Project Proposal](https://docs.google.com/document/d/1S91fSIYSEpDHsmWSU9ZTZoKXdKIGnt3kZkhmYfrNw80/edit?usp=sharing)

---

## Project Status

The backend for this project is fully functional allowing users to access messages, users, and messages by users
Validations and more robust logic for requests is still in development
---

## Installation and Setup Instructions

Clone down this repository. You will need `node`, `nodemon` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm run nodemon`

To Visit Back-End App:

`localhost:9999/`

## Endpoints

- List of Messages: `localhost:9999/messages`
- List of Users: `localhost:9999/users`
- List of All Messages belonging to a User: `localhost:9999/users/:id/messages`
- List of a single Message belonging to a User: `localhost:9999/users/:id/messages/:id`

## Reflection

- This is a 2 week long project built during my fourth module of Full-Stack Development at Pursuit. The project goal is to utilize the technologies we have learned so far in the course (JS, Node, React, Express, Postgresql) in order to build a Back-End Server to handle the request of Q'Hubo Messenger

- This project was challenging because I had to be in charge of the whole process from creating the idea; planning out through wireframes, ERDs and user stories; and then development and deployment. It was also challenging to create the logic for signup and login access for users.

- Packages: cors, dotenv, express, morgan, pg-promise, b-crypt
