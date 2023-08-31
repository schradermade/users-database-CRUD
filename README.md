# Atllas Takehome

Welcome! We're excited that you’ve applied to be an engineer, and we’re looking forward to
evaluating your take-home! This project isn’t meant to be anything too scary, it’s just a way for
you to showcase your ability to write a simple, full-stack CRUD application.

This is a bit of a long read, but it’s all important information so make sure you take the time!

### Time Requirements

There are no hard time requirements. We expect it'll take around four hours, but everyone's
different and comfortable with different aspects, so you may take more or less. Just keep in mind
that we won't consider the next phase without the takehome being attempted, so we recommend not
taking more than a week.

### Tech Requirements

* You must use NextJS for the front-end. You are encouraged to use third-party libraries
  such as a form validation library for your own convenience.
* We have set up the front-end with the Tailwind CSS framework, which is what we use in our own
  product. You're not required to use Tailwind, but demonstrating proficiency with it is a plus.
* The back-end must be done with the provided express server. Add on to it as much as you’d like,
  but the assignment must be completed using express.
* You must implement your solution using the provided database schema, since this is what we'll be
  using to test your code. The schema is in `packages/back-end/src/services/db.ts`.

### Important Information

* We've provided a seed script that will scaffold the database with 100 users to test and prototype
  with: `npm run seed`.
* Once you’re ready for hand-off, there’s a script called “seed-prod” that adds 5,000 members. This
  is what we will be testing with, so it’d be a good idea to test it once with “production” data to
  make sure it meets your own expectations: `npm run seed-prod`.

# Assignment

You've been tasked with writing a back-office tool to display all members currently in the database.
Product owners have also signaled that they would like to be able to manage users (add, edit,
delete) and search through the database. Both POs also mentioned that they would like to be able to
do all this on their phone as well, since they find themselves out of the office quite a bit. With
this unfortunately vague set of requirements in mind, you've cobbled together a basic set of
user-stories and got them signed off on as adequate for MVP:

* As a user, I want to be able to use the application on both desktop and mobile.
* As a user, I want to be able to add a new user to the database.
* As a user, I want to be able to update a user in the database.
* As a user, I want to be able to delete a user from the database.
* As a user, I want to be able to sort the table.
* As a user, I want to be able to search the table.
* As a user, I want to be able to infintely scroll the table to view more users.

Outside of the task, there are also some engineering requirements:

* No lint issues - neither warnings nor errors.
* No type issues.

Basically, we must be able to build and run a production build on the first try.

When all’s said and done, you aren’t limited to just these requirements. As long as you complete the
user-stories, you’re free to add whatever else you want, but you’re not in any way required to do
anything extra. We’re not expecting anything outside of the user-stories and engineering
requirements, so it’s completely up to you as to how far you go.

# Submission

_Important: What we expect you submit is **not** just a zipped folder of your source tree._

There are a couple of things to do once you’re ready for hand-off. First and foremost, it’s
important to **make sure everything is committed to the “master” branch**. Once that’s done, run the
NPM script “prepare-submission” in the top-level of the workspace, and that will generate a binary
file called “submission.bundle”. Zip this file up and submit it
to [this google form](https://forms.gle/wLifwTeipsfshekw9).

# Questions/More Information

If you have any questions or concerns, please reach out to us
at [developers@atllas.com](mailto:developers@atllas.com?subject=[Atllas%20Takehome]%20) and include
“[Atllas Takehome]” in the subject line. We’ll be more than happy to answer your questions to the
best of our ability!

Thank you, and good luck!


# PROJECT NOTES - Nathan Schrader

## Frontend
Although Next.js 13 was installed, the "app" router was not implemented. I took the time to convert file tree to "app" router.

Implemented dynamic pages for "users" for Static Site Generation, since we know
the users data in advance. Next.js 13 will cache this for optimization.

However, this then presents the issue of stale data when a new user is added OR an existing user is changed. Next.js will continue to show the cached (stale) data. To handle this, we would want to implement On-Demand revalidation. (I did not get this far in the project)

Built all styles in TailwindCSS

## Backend

Added GET route to fetch a single user, in order to implement Static Site Generation on the frontend with dynamic pages (/app/user/[id])

## Core fundamentals 
I believe that the important, core fundamentals of this challenge were addressed. For example, any time we know what the data will be on a page ahead of time, we should probably be implementing Static Site Generation which reduces latency to almost nothing. This was implemented inside the dynamic page route inside the "app router" for each "user" in the database. I also implemented "server actions", which I believe are still experimental, but absolutely worthwhile to look forward to in the near future as they become stable.

## TailwindCSS
I believe I demonstrated a solid understanding of TailwindCSS by my use of it throughout the UI. If this were a real project there are other things to implement with Tailwind, like adding our own custom styling in the "theme: {extend}" property of Tailwind.config.css. There is also an opportunity to abstract out commonly-used styles into globals.css so that each line of "className=" is not long and repetitive.

## Next.js 13 features
I implemented a number of Next.js 13 features. However, before doing that I first brought the file tree up to speed, since it was still utilizing the "pages" directory from older Next versions.
Features implemented:
- App router
- Static Site Generation
- dynamic pages
- server actions
- client components
- server components

## Backend
I believe I demonstrated a solid understanding of Node.js/Express. I worked within Sequelize to add a second route to fetch a single user, which made SSG in Next.js 13 possible. I also implemented sorting functionality within the Sequelize syntax in the .findAll({where { id: id}}).

## Conclusion
There were a handful of features requested in the project that I did not complete. The full set of features in this take-home project was quite an ask to be honest. I was happy to complete it to the extent that I did, and it only solidified my understanding of the principles and fundamentals used so it was a win for me. I certainly hope to be considered for the position regardless of not having finished all the User stories. The extent to which I completed the project clearly demonstrates that I have the capability and knowledge to complete all the User Stories.





