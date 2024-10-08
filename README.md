# DevTools Debugging Stories

[![Netlify Status](https://api.netlify.com/api/v1/badges/8bb6ebef-9656-4ca5-bd98-56f8c605cfe6/deploy-status)](https://app.netlify.com/sites/devtools-dbg-stories/deploys)

This repository contains a couple of demos for core debugging stories, that need to be supported by DevTools to provide a fundamental, seamless debugging experience.

## Creating demos (for crbugs)

Demo projects and repros should be pushed to [ChromeDevTools/devtools-dbg-stories],
and will then automatically be available on [devtools-dbg-stories.netlify.app].

When creating a repro for a [crbug](https://crbug.com), the recommended
workflow is as follows:

1.  Create your own
    [fork](https://github.com/ChromeDevTools/devtools-dbg-stories/fork) on
    GitHub.
2.  Check out the fork locally.

    ```
    git clone git@github.com:user/devtools-dbg-stories.git
    git remote add upstream https://github.com/ChromeDevTools/devtools-dbg-stories.git
    ```

    and create a feature branch.

3.  Follow the steps for simple test cases.

    ```
    npm install
    npm start
    ```

    This will serve the examples at http://localhost:8000.

4.  Create a new file `src/crbug-ID.html` (and other resources that are
    necessary), where `ID` refers to the bug number, and add a link to the
    `crbug-ID.html` file to the `src/index.html`.

5.  Once you are happy with your repro, push it to your fork and send a pull
    request to the main repository.

## Usage

### TypeScript Projects

The following projects have been adapted from [todomvc.com](https://todomvc.com/).

What to check: Open the debugger and the console, observe whether breakpoints, the object inspector, the watch expressions, call stacks etc. all work as well as they would when debugging vanilla JS code.

#### TypeScript, React, Parcel

```sh
cd typescript-react
npm install
npm start
```

The server will be running at [http://localhost:1234](http://localhost:1234).

#### TypeScript 1.5, Angular, no bundler

```sh
cd typescript-angular
npm install
npm run compile
python -m SimpleHTTPServer
```

The server will be running at [http://localhost:8000](http://localhost:8000).

#### TypeScript 1.4, Backbone, local

```sh
cd typescript-backbone
npm install
npm run compile
open index.html
```

### Bundler examples

#### NextJS, Webpack

This is an example project following the starter template for [Learn Next.js](https://nextjs.org/learn).

What to check: Open the debugger, search for index.js and other authored files in the Page tree and Quick Open panel.

What is shown: Intertwining of authored and deployed sources.

```sh
cd nextjs-webpack
npm install
npm run build
npm run dev
```

The server will be running at [http://localhost:3000](http://localhost:3000).

#### Webpack, Express, HMR

This is an example project following the guides from [webpack.js.org/guides/hot-module-replacement](https://webpack.js.org/guides/hot-module-replacement).

What to check: Open the debugger, click the button on the page, and make some changes to `second.js` in your favorite editor.

What is shown: HMR will update the page and also add a duplicated script in the Page tree and Quick Open panel.

To run the stock webpack server with HMR:

```sh
cd webpack-basic-hmr
npm install
npm run webpack-serve
```

Or, to use a custom express server with HMR middleware:

```sh
npm run express-serve
```

The server will be running at [http://localhost:8080](http://localhost:8080).

### Performance examples

### Bad animation and scrolling

What to check (not in sequence): 

1. Open the Performance panel, start recording, scroll down. Observe the unnecessary yellow background color changing on the number of comments.
2. Open the Performance panel, start recording, click on a news to toggle the details (slide in and out). Observe the animation. 

What is shown: Animation, long task, paint reflow. This codelab will walk you through the issues and how to fix them: https://developers.google.com/web/fundamentals/codelabs/web-perf

How to run it:
1. Get the code: [https://github.com/googlearchive/udacity-60fps-samples]
2. To run it, use any local server, e.g. [http-server](https://www.npmjs.com/package/http-server).

#### Bad algorithm

What to check: Open the performance panel, start recording, and click on the "+" button on the page. Observe the long tasks.

What is shown: A performance issue in a long task which stems from some expensive computation. There is something that takes a long time (is "hot"), and usually occurs once but it can also happen multiple times. E.g. processing large amounts of data with an inappropriate algorithm on the main thread.

```sh
cd react-redux-bad-algo
npm install
npm start
```

The server will be running at [http://localhost:3000](http://localhost:3000).

#### Bad architecture

What to check: Open the performance panel, start recording, and click on the "+" button on the page. Observe the long tasks.

What is shown: A performance issue in a long task which stems from the broad app architecture, rather than a singular expensive computation. There is something that is inexpensive, but dominates by occurring repeatedly many times. Usually the solution involves having to rethink the execution model. E.g. in case of react+redux, having to compute many selectors for each state change to determine which views must update, in views which would not have to update.

```sh
cd react-redux-bad-arch
npm install
npm start
```

The server will be running at [http://localhost:3000](http://localhost:3000).

### Simple Test Cases

Clone this repository, and run

```sh
npm install
npm start
```

afterwards point your browser to [http://localhost:8000](http://localhost:8000).

  [ChromeDevTools/devtools-dbg-stories]: https://github.com/ChromeDevTools/devtools-dbg-stories
  [devtools-dbg-stories.netlify.app]: https://devtools-dbg-stories.netlify.app
