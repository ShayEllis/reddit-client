Client for Reddit - Practice Project
===

[![Netlify Status](https://api.netlify.com/api/v1/badges/9091da31-d1f0-4be4-95cd-3b3e94341d1e/deploy-status)](https://app.netlify.com/sites/sae-reddit-client-project/deploys)
[![Github Last Commit](https://img.shields.io/github/last-commit/ShayEllis/reddit-client)]
General Information -

A basic client for Reddit, created with Vite-React, Redux, and React Router

Introduction -

I created this single page app to use the technologies covered in the first half of Codecademy’s Full-Stack Developer course which allowed me to get a better understanding of how they are used, and it helped me learned additional aspects of each as I developed the app. I used Vite-React to scaffold the initial react code then NPM to setup React Router and Redux. I also setup testing with Vitest, Jest DOM and React Testing Library so that I could start writing functional tests.

Technologies - 

Vite React - v4.0.4
React - v18.0.26
React Redux - v8.0.5
Redux JS Toolkit - v1.9.1
React Router - v6.7
Nanoid - v4.0
Dashjs - v4.5.2
Vitest - v0.28.3
Jest DOM - v5.16.5
React Testing Library - v13.4
User Event - v14.4.3
Coverage C8 - v0.28.3

Setup - 

This project is hosted on Netlify:
https://sae-reddit-client-project.netlify.app

Features -

- This SPA is responsive so that it can be used on desktop or mobile devices.

- When the app is initially loaded it fetches posts from Reddit’s hot chart, the chart can then be changed using the sidebar on the left or a search can be entered using the search bar at the top of the page.

- The page theme will be automatically selected based on the system theme, it can also be manually toggled by clicking on the user avatar button at the top right of the page.
