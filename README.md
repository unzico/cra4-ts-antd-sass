# Features

- create-react-app v2.x
- TypeScript v3.x
- Support for absolute path imports via [tsconfig.paths.json](./tsconfig.paths.json) and [craco](https://github.com/sharegate/craco) (see [example](./src/components/NestedComponent/NestedComponent.tsx))
- SASS support
- Includes [Ant Design](https://ant.design/) using [craco-antd](https://github.com/FormAPI/craco-antd)

## Adding another absolute path

**Important**: Don't forget to extend your `tsconfig.json` file (see [tsconfig file](./tsconfig.json))

1. Add new path to `tsconfig.paths.json` file.
2. Add new path to `craco.config.js` file

Let's say, we want to import files from our utils subfolder using `@utils`, the updated config files would look like this:

```json
// tsconfig.paths.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```

```javascript
// craco.config.js
const path = require("path");
...

module.exports = {
  ...,
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    }
  }
};
```

We are then able to import files from the utils subfolder.

```javascript
// NestedComponent.tsx
import * as React from "react";
import AbsolutePathComponent from "@/AbsolutePathComponent";
import sayHello from "@utils/sayHello";

type Props = {};

const NestedComponent: React.SFC<Props> = ({ children }) => {
  sayHello();

  return (
    <span>
      <AbsolutePathComponent>{children}</AbsolutePathComponent>
    </span>
  );
};

export default NestedComponent;
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
