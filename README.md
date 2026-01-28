# [MacLearn Next](https://maclearn.macweb.app)

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel)

MacLearn is the best online platform for learning and improving your web development skills with high quality articles on HTML, CSS, detailed references, and a playground for you to experiment with your knowledge!

## What is MacLearn?

MacLearn is the best online platform for learning and improving your web development skills with high quality articles on HTML, CSS, detailed references, and a playground for you to experiment with your knowledge!

## What's different about this rewrite?

⚠️ The early beta [here](https://maclearn.macweb.app) is still in development, so some of these features haven't been implemented yet.

We're rewriting MacLearn from scratch in TypeScript using the full-stack web framework Next.js with a MongoDB backend to store user generated data, meaning MacLearn now has exciting new features like accounts, article comments, custom profiles, and more! We're also redesigning the site in Tailwind, so expect a fresh new look!

## Tech stack

This is a [Next.js](https://nextjs.org) app hosted on [Vercel](https://vercel.com) built with [React](https://react.dev), [TypeScript](https://typescriptlang.org), [MongoDB](https://mongodb.com), and [Tailwind](https://tailwindcss.com), and the libraries [NextAuth](https://next-auth.js.org), [Mongoose](https://mongoosejs.com), [Framer Motion](https://motion.dev), and [React Icons](https://react-icons.github.io). The app folder contains the frontend page routes, page-specific components, server actions, and the auth API. The components folder contains UI frontend components. The lib, models, and types folders contain extra stuff for setup and the public folder contains frontend assets like icons and logos.

## Quick start

To host MacLearn on your machine for local development or other purposes, simply follow these steps below:

1. Clone the GitHub [repository](https://github.com/Mac-Web/maclearn-next) using the command
   ```bash
   git clone https://github.com/Mac-Web/maclearn-next.git
   ```
2. Open it with your favorite code editor or through the terminal
3. Create the file `.env.local` at the root folder and initialize the following variables:
   ```
   MONGO_URI=your_mongo_uri
   NEXTAUTH_URL=http://maclearn.macweb.com:3001
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXT_PUBLIC_ROOT_URL=http://maclearn.macweb.com:3001
   NEXT_PUBLIC_AUTH_URL=http://macweb.com:3000
   NEXT_PUBLIC_ROOT_HOST=macweb.com
   NODE_ENV=development
   ```
4. If you don't have a MongoDB cluster/connection string, only guest mode will be available (otherwise the app will crash because of obvious reasons)
5. Edit your operating system's hosts file as an administrator and type in these two custom hosts:

   ```
   127.0.0.1 macweb.com
   127.0.0.1 maclearn.macweb.com
   ```

6. Open the terminal and run the commands

   ```bash
   npm install
   npx next dev -p 3001
   ```

   to start the Next.js dev server at maclearn.macweb.com:3001 and see the magic!

7. Addionally, if you want to host the root MacWeb page as well, open a new terminal and run these commands:

   ```
   cd path_to_local_macweb_folder
   npx next dev -p 3000
   ```

   And you should be able to view the root domain at macweb.com:3000!

## Contribution

Any kind of contribution is welcome, but please follow the guideline below!

- Submit an issue if there's a bug/issue or if you want to suggest new features/subscriptions to be added.
- Submit a pull request if you want to add or improve the code base!
- Commit messages should be specific and address the issue
- Please don't submit random issues that aren't specific
- Please don't submit pull requests that "fix typo" or "improve formatting"
