## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

The Architecture of the app is pretty simple and looks like this:

![](./chatArch.jpg)

In order to run locally:
git clone https://github.com/NitsanCohen770/authorizon-task

npm install && npm start

### The challenge

Users should be able to:

- Login with email and password using the Auth0 service.
- See all messages of other users in realtime.
- Admin users should be able to filter messages by choosing a filter.
- If a message if filtered, it is only visible to the Admin user.
- If a user uses a filtered word, he will get a message from the system informing him that the word is not allowed.
- An Admin user can invite other users to be Admins as well.

### Screenshot

![](./screenshot.png)

-

### Links

- Live Site URL: [See Live](https://authorizon.netlify.app/)

## My process

First I built the front-end part

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

It was very nice to get familiar with the Auth0 service. Integrating it to the app was a breeze thanks to the great official docs they have.

Besides that It was really fun getting involved with the auth

### Continued development

I would like to upgrade the app the serverless using AWS services and Next.js

### Useful resources

- [Auth0 offical docs](https://auth0.com/docs/) - This helped me for integrating the Auth0 in the React app. I really liked the straight forward tutorials with explained examples.

## Author

- LinkedIn - [@Nitsan Cohen](https://www.linkedin.com/in/nitsan-cohen-64b73920b/)

## Acknowledgments

I would like to thank Authorizon staff for giving me this interesting assignment. I learned a lot from it and it improved my skills as a developer.
