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

### 5 Index.html
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
