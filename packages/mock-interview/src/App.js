import React, { Suspense } from 'react';
// import Users from './components/users/Users';
import Cats from './components/Cats/Cats';
// const Cats = React.lazy(() => import('./components/Cats/Cats'));

const App = () => {

  // const date = new Date().toLocaleString();
  // console.log(date);
  // const arr = [[3, 4, [5, 6]], [3, 4, [5, 6]], [3, 4, [5, 6]], [[3, 4, [5, 6]], [3, 4, [5, 6]], [3, 4, [5, 6]]]];

  // to enable deep level flatten use recursion with reduce and concat
  // function flatDeep(arr) {
  //   return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), []);
  // };
  // console.log(flatDeep(arr));

  // const flatResult = (myArr) => {
  //   return myArr ? myArr.reduce((total, val) => {
  //     return total.concat(Array.isArray(val) ? flatResult(val) : val)
  //   }, []) : []
  // }
  // console.log(flatResult(arr));

  // debugger
  return (
    <div>
      {/* <div>{date}</div>
      <div>{new Date().toISOString()}</div>
      <div>{new Date().toUTCString()}</div>
      <div>{new Date().toLocaleDateString()}</div>
      <div>{new Date().toLocaleString()}</div> */}
      <div>{new Date().toLocaleTimeString()}</div>
      
      
      <Suspense fallback={<div>Loading...</div>}>
        <Cats />
      </Suspense>
      {/* <Users /> */}
    </div>
  );
}

export default App;
