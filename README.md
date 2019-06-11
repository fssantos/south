# Live Demo

You can find a live demo [here](http://south-frontend.s3-us-east-2.amazonaws.com/testing1).

Also, a live demo of each component using [Storybook](https://storybook.js.org) is available [here](http://south-storybook.s3-us-east-2.amazonaws.com/index.html).

# Usage

```
yarn
yarn start
```

# Testing

```
yarn test
```

All tests are based on Storyshot to structural tests and also Jest to unit tests.

# Deploy

In order to deploy the application to an Amazon S3 bucket:

```
yarn deploy
```

in order to deploy its Stories from Storybook:

```
yarn deploy-storybook
```

The bucket name is changeable on `package.json`. All files are generated using webpack at `build` folder and they are automatically uploaded to AWS using `aws cli`.

# Tools

This projects uses [Webpack](https://webpack.js.org/) as bundler, [React](https://reactjs.org/) as frontend library, [Redux](https://redux.js.org/) as state management library, [Redux-saga](https://github.com/redux-saga/redux-saga) as side effect handler, [styled-components](https://www.styled-components.com/) to css styling and Flexbox to responsiveness.
