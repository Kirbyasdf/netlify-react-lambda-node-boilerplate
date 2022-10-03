# - ![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) This is working as of 20221003T11:48-0600 
# - ![#c5f015](https://via.placeholder.com/15/c5f015/c5f015.png) [LIVE](https://netlfiy-node-lambda-serverless-demo.netlify.app/)
## There is alot of issues with various webpacks and proxy issues in regards to react + build commands....this right now will work locally or on deployment to netlify, it also has some files already modified for you such as redirects so you can use react-router etc with ease.


## React-Netlify-Lambda-KIRBYASDF-EDITION

Deploy to netlify or run locally.... simply change any notice of yarn to npm during netlify deployment set up. 

Added POST demo

Added Node boiler plate

## to start

npm i -g netlify-cli

clone repo

npm i 

npm run dev


[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg?utm_source=github&utm_medium=swyx-CRAL&utm_campaign=devex)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/create-react-app-lambda&utm_source=github&utm_medium=swyx-CRAL&utm_campaign=devex)

## Babel/webpack compilation

All functions (inside `src/lambda`) are compiled with webpack using Babel, so you can use modern JavaScript, import npm modules, etc., without any extra setup.

## Local Development

```bash
## prep steps for first time users
npm i -g netlify-cli # Make sure you have the [Netlify CLI](https://github.com/netlify/cli) installed
git clone https://github.com/Kirbyasdf/netlfiy-lambda-boilerplate.git ## clone this repo
cd create-react-app-lambda ## change into this repo
npm i # install all dependencies

## done every time you start up this project
ntl dev ## nice shortcut for `netlify dev`, starts up create-react-app AND a local Node.js server for your Netlify functions
```

This fires up [Netlify Dev](https://www.netlify.com/docs/cli/?utm_source=github&utm_medium=swyx-CRAL&utm_campaign=devex#netlify-dev-beta), which:

- Detects that you are running a `create-react-app` project and runs the npm script that contains `react-scripts start`, which in this project is the `start` script
- Detects that you use `netlify-lambda` as a [function builder](https://github.com/netlify/netlify-dev-plugin/#function-builders-function-builder-detection-and-relationship-with-netlify-lambda), and runs the npm script that contains `netlify-lambda build`, which in this project is the `build:lambda` script.

You can view the project locally via Netlify Dev, via `localhost:8888`.

Each function will be available at the same port as well:

- `http://localhost:8888/.netlify/functions/hello` and 
- `http://localhost:8888/.netlify/functions/async-dadjoke`

## Deployment

During deployment, this project is configured, inside `netlify.toml` to run the build `command`: `npm build`.

`npm build` corresponds to the npm script `build`, which uses `npm-run-all` (aka `run-p`) to concurrently run `"build:app"` (aka `react-scripts build`) and `build:lambda` (aka `netlify-lambda build src/lambda`).


## Routing and authentication with Netlify Identity

For a full demo of routing and authentication, check this branch: https://github.com/netlify/create-react-app-lambda/pull/18 This example will not be maintained but may be helpful.
