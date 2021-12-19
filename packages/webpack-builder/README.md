## References

- [How to set up & deploy your React app from scratch using Webpack and Babel](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4)
- [Setup react with webpack and babel](https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9)

### 1. Create a new directory

- mkdir webpack-builder
- cd webpack-builder

### 2. Initialize NPM project

- npm init -y

### 3. React & React-Dom
- npm install react react-dom

### 4. Webpack
- npm install --save-dev webpack webpack-dev-server webpack-cli

This will install:

- webpack module — which include all core webpack functionality
- webpack-dev-server — this development server automatically rerun webpack when our file is changed
- webpack-cli — enable running webpack from the command line

- package.json
```
"scripts": {
 "start": "webpack-dev-server --mode development",
},
```

### 5. Index.html
Now create an index.html file in your root project with the following content:
```
<!DOCTYPE html>
<html>
 <head>
 <title>My React Configuration Setup</title>
 </head>
 <body>
 <div id="root"></div>
 <script src="./dist/bundle.js"></script>
 </body>
</html>
```

Create a new directory named src and inside it, create a new index.js file
```
import React from "react";
import ReactDOM from "react-dom";
class Welcome extends React.Component {
  render() {
    return <h1>Hello World from React boilerplate</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById("root"));
```

### 6. Configuring Babel
- npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

Why do we need these packages?

- @babel/core is the main dependency that includes babel transform script.
- @babel/preset-env is the default Babel preset used to transform ES6+ into valid ES5 code. Optionally configures browser polyfills automatically.
- @babel/preset-react is used for transforming JSX and React class syntax into valid JavaScript code.
- babel-loader is a webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.

- webpack.config.js
```
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    static: './dist',  // contentBase: './dist'
  },
  module: {
    rules: [
        {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
        }
    ]
  },
};
```
This webpack config is basically saying that the entry point of our application is from index.js, so pull everything that’s needed by that file, then put the output of the bundling process into the dist directory, named bundle.js. Oh, if we’re running on webpack-dev-server, then tell the server to serve content from contentBase config, which is the same directory this config is in. For all .js or .jsx files, use babel-loader to transpile all of them.

In order to use Babel presets, create a new .babelrc file
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

### 7. Adding Prettier
- npm install --save-dev --save-exact prettier

Now we need to write the .prettierrc configuration file:
```
{
 "semi": true,
 "singleQuote": true,
 "trailingComma": "es5"
}
```

The rules means that we want to add semicolon for the end of every statement, use a single quote whenever appropriate and put trailing commas for multi-line ES5 code like objects or arrays.

You can run Prettier from the command line with:
- npx prettier --write "src/**/*.js"

Or add a new script to our package.json file:

```
"scripts": {
 "test": "echo \"Error: no test specified\" && exit 1",
 "start": "webpack-dev-server --mode development",
 "format": "prettier --write \"src/**/*.js\""
},
```
Now we can run Prettier using npm run format.

Additionally, if you’re using VSCode for development, you can install the Prettier extension and run it every time you save your changes by adding this setting:

"editor.formatOnSave": true

### 8. Setting up ESLint
- npm --save-dev install eslint eslint-loader babel-eslint eslint-config-react eslint-plugin-react eslint-plugin-react

- eslint is the core dependency for all functionalities, while eslint-loader enables us to hook eslint into webpack. Now since React used ES6+ syntax, we will add babel-eslint — a parser that enables eslint to lint all valid ES6+ codes.
- eslint-config-react and eslint-plugin-react are both used to enable ESLint to use pre-made rules.
- eslint-plugin-react: This contains some standard linting rules for React code.

```
module.exports = {
  // modify the module
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'] // include eslint-loader
    }]
  },
};
```

Then create an eslint config file named .eslintrc with this content:
```
{
  "parser": "babel-eslint",
  "extends": ["plugin:react/recommended"],
  "env": {
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

The config is basically saying, “Hey ESLint, please parse the code using babel-eslint before you check it, and when you’re checking it, please check if all the rules from our React rules config is passed. Take global variables from the environment of browser and node. Oh, and if it’s React code, take the version from the module itself. That way the user won’t have to specify the version manually.”

Rather than specifying our own rules manually, we simply extend react rules which were made available by eslint-config-react and eslint-plugin-react.

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "webpack-dev-server --mode development",
  "format": "prettier --write \"src/**/*.js\"",
  "eslint-fix": “eslint --fix \"src/**/*.js\"", // the eslint script
  "build": "webpack --mode production"
},
```
Then run it with npm run eslint-fix.

### 9. Adding CSS LESS processor
- npm install --save-dev less less-loader css-loader style-loader

less-loader will compile our less file into css, while css-loader will resolve css syntax like import or url(). The style-loader will get our compiled css and load it up into style tag in our bundle. This is great for development because it lets us update our style on the fly, without needing to refresh the browser.

Now let’s add some css files to create a new style directory in src/style

```
cd src && mkdir style && touch header.less && touch main.less
```

header.less content:
```
.header {
  background-color: #3d3d;
}
```

main.less content:

```
@import "header.less";
@color: #f5adad;
body {
  background-color: @color;
}
```

Now import our main.less file from index.js:

```
import "./style/main.less";
```
Then update our webpack configuration module property:
```
module: {
  rules: [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader']
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
    ],
  },
 ]
},
```


### 9.1 Add Sass
- npm i -D sass sass-loader

### 10. Typescript [Creating React and TypeScript apps with Webpack](https://www.carlrippon.com/creating-react-and-typescript-apps-with-webpack/)
- npm install --save-dev typescript ts-loader
- npm install --save-dev @types/react @types/react-dom
#### 10.1 Configuring Babel
- npm install --save-dev @babel/preset-typescript @babel/plugin-transform-runtime @babel/runtime
- @babel/preset-typescript: This is a plugin that enables Babel to transform TypeScript code into JavaScript.
- @babel/plugin-transform-runtime and @babel/runtime: These are plugins that allow us to use the async and await JavaScript features.

#### 10.2 Adding linting
- npm install --save-dev eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
- eslint-plugin-react-hooks: This includes some linting rules for React hooks code.
- @typescript-eslint/parser: This allows TypeScript code to be linted.
- @typescript-eslint/eslint-plugin: This contains some standard linting rules for TypeScript code.

```
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react-hooks"
  ],
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  }
}
```


#### 21 Host in Firebase [Firebase CLI reference](https://firebase.google.com/docs/cli?authuser=0#mac-linux-npm)
- Install the Firebase CLI via npm by running the following command:
  npm install -g firebase-tools
- Log in and test the Firebase CLI
  firebase login
  firebase init
  firebase deploy

