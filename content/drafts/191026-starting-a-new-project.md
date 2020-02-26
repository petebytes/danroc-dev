---
title: Starting a new project
date: 2019-09-20
slug: deploying-node-apps-dokku
published: true
tags: ['ramblings', 'plans']
series: false
canonical_url: true
description: I recently moved all my apps from Heroku to a DigitalOcean droplet using Dokku. This centralized things and I saved me a bunch of money. Here is a recipe I follow for each new app to get it up-and-running.
---

As I am about to start a new project, I am, as usual, facing anxious choices of how to structure it. In tha past two years I have gone from building something in Flask, then dabbling on jQuery for some fancy UI interactions. That (and the complications of that), let me to Vue, which I ended up loving and adopting as my framework-of-choice. After implementing a whole REST API with Flask, I went over to GraphQL and decided to explore it. Also loved it, and decided to stick to it for all projects. I then went on to develop some static sites, tried Vuepress and then Gridsome. I am now playing around with Nuxt as a starting point for all my apps.

However, I feel there are so many gaps in my current knowledge. I am getting on quite well on the frontend, but have no ideas about testing, CI+CD, logging, etc. In the backend, I managed to understand and configure Postgraphile to work with my Postgres database. However, I feel I do not really know Postgres, and my work is missing migrations, testing (again!), and proper understanding of Postgres more advanced features to feel really comfortable with it.

Therefore, as a new project starts, I want to spend some time learning these things more deeply. My goal for this project is to have it with tests and a complete CI+CD flow. I also want to get a deeper understanding database architecture. It includes learning more about SQL, Postgres, and Postgraphile, to feel really confident using its advanced features, such as row level security.

## About the project

I am building a tool for architects to help them keep their portfolios updated and to organize their job search: hatchbase.io

Since I left my architecture job earlier this year, I've been wanting to build something for architects. Thinking about all the pain points I had during my long careers, talking to colleagues, and checking what can I actually build on my own, I came up with the idea for hatchbase.

### Requirements

Technically, it is a simple CRUD application. For the launch, I am settling on the the following features:

- Each user can have an account with its own dashboard
- The user can organize its job search using Trello-like tables and workflows
- The user can subscribe to specific feeds for open positions 
- The user can get a lot of information about their job openings and the corresponding companies
- The user can upload their CV and Portfolio information
- The user can send application emails directly to job openings which offer application via email, choosing their CV and Portfolio from their file archive (possibility to have multiple portfolio and CV versions)
- The app can watch the user's Gmail inbox for replies, which is organized in a single location within the app

These features require so much knowledge I still do not have. However, I know how to start, how to get a lot done. The rest will come as I do it. And this makes it even more exciting, all the learning in the coming weeks.
