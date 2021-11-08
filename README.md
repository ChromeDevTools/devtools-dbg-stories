# DevTools Debugging Stories

[![Netlify Status](https://api.netlify.com/api/v1/badges/8bb6ebef-9656-4ca5-bd98-56f8c605cfe6/deploy-status)](https://app.netlify.com/sites/devtools-dbg-stories/deploys)

This repository contains a couple of demos for core debugging stories, that need to be supported by DevTools to provide a fundamental, seamless debugging experience.

## Usage

### TypeScript Projects

The following projects have been adapted from [todomvc.com](https://todomvc.com/).

#### TypeScript, React, Parcel

```sh
cd typescript-react
yarn install
yarn start
```

#### TypeScript 1.5, Angular, no bundler

```sh
cd typescript-angular
yarn install
yarn compile
python -m SimpleHTTPServer
```

#### TypeScript 1.4, Backbone, local

```sh
cd typescript-backbone
yarn install
yarn compile
open index.html
```

### Simple Test Cases

Clone this repository, and run

```sh
npm install
npm start
```

afterwards point your browser to [http://localhost:8000](http://localhost:8000).
