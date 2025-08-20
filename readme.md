# "Portfolio" Project
💼 **Responsive single-page SPA application** with authentication and an admin panel for managing data.

### Main tech stack:
- **Vue.js v2** (frontend framework)
- **Pug** (templating engine)
- **PostCSS** (for processing CSS)
- **Webpack 4** (module bundler)
- **JavaScript** (programming language)

<p align='center'>
  <img width="1838" height="900" alt="image" src="https://github.com/user-attachments/assets/81dee03e-9b68-4396-a3f1-6f2665dd4dbe" />
</p>

### Demo

- [Main Application](https://www.bettercallsergeev.pro/)
- [Admin Panel](https://www.bettercallsergeev.pro/admin)

## Installation and Setup

### 1. Make sure you have the following tools installed:
- [Node.js & NPM](https://nodejs.org/en/download/current) (latest version)
- [Yarn](https://yarnpkg.com/ru/docs/install) (latest version)

### 2. Clone the repository and install dependencies:
```sh
$ git clone git@github.com:vofronte/portfolio-website.git
$ cd portfolio-website
$ yarn
````

### 3. Run the project

Start the project in development mode:

```sh
$ yarn dev
```

To build the project for production:

```sh
$ yarn build
```

### 4. Using the Admin Panel

Before working with the admin panel, register a user using the utility:

```sh
$ yarn reg
```

## Scripts from `package.json`

| Script  | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| `dev`   | Starts webpack-dev-server with hot module replacement.                     |
| `build` | Builds the project for **production** (ready for deployment on a server).  |
| `reg`   | User registration utility. Use it before working with the **admin panel**. |

To run any script, use the following command:

```sh
$ npm run script_name
```

or

```sh
$ yarn script_name
```

## Tech Stack

### Frontend:

* **Vue.js**: Main framework for building the interface.
* **Vuex**: State management for the app.
* **Vue-router**: Routing.

### Other:

* **Webpack**: Project bundling and optimization.
* **PostCSS**: Modern tools for processing CSS.
* **Pug**: Templating engine for simplifying HTML markup.
