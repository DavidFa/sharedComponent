# Links
- https://github.com/lerna/lerna
- https://www.youtube.com/watch?v=zQUpNa1hZIA
- https://www.youtube.com/watch?v=j0FiMekdeOs

# Install Lerna
npm install --global lerna

# Initialize Lerna
lerna init

# Creating a TypeScript app
npx create-react-app common --template typescript


# Add package
<!-- lerna add @david/common --scope=@david/web -->
lerna add button --scope=web

# Define the entry file for @david/common
- update package.json
- add main(entry) file 
{
    "name": "@david/common",
    "version": "0.1.0",
    "private": true,
    // main file
    "main": "./src/index.tsx",
}

# An issue of Failed to compile
```js
Failed to compile
../common/src/components/Button.tsx 4:12
Module parse failed: Unexpected token (4:12)
File was processed with these loaders:
 * ./node_modules/@pmmmwh/react-refresh-webpack-plugin/loader/index.js
You may need an additional loader to handle the result of these loaders.
| $RefreshSetup$(module.id);
| 
> const Button: React.FC<{ red: boolean }> = (props) => {
|     return <button >{props.children}</button>
| }
```

- it is because we are using jsx and tsx code inside our common packets and using that code inside the web packets
- the problem is that create-react-app configures webpack to use bubble loader for the code inside the project
- but in this case it doesn't use the loader for the code that we are importing from the other packets
- so what we need to do is to use bubble loader also for the code from that common package and not just the code from the web packets
- we need to modify the webpack configuration and with create-react-app we can do this with a package called CRACO
- CRADO is a create-react-app configuration override

# Install CRACO
npm install @craco/craco -D

- create craco.config.js
```js 
const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];
packages.push(path.join(__dirname, "../common"));

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName("babel-loader"));
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }

      return webpackConfig;
    },
  },
};

  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
  },
```

# update package.json in root project
```js
  "scripts": {
    "start": "lerna run start",
    "test": "lerna run test",
    "new-version": "lerna version --conventional-commits --yes",
    "diif": "lerna diff"
  }
```

# Removing node_modules from packages
npx lerna clean -y

# Installing packages dependencies to root node_modules
npx lerna bootstrap --hoist

# Run lerna
lerna run start




# Install Styled Component
npm install --save styled-components
npm i --save-dev @types/styled-components


# Add Storybook:
npx sb init

npm run storybook  