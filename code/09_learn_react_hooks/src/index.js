import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01_类组件和函数式组件的区别/App';
// import App from './02_计数器案例/App'
// import App from './03_useState的使用/App'
// import App from './04_useEffect的使用/06_useEffect的第二个参数'
// import App from './05_useContext的使用/App'
// import { ThemeContext, UserContext } from "./05_useContext的使用/context";

// import App from './06_useReducer/App'
// import App from './07_useCallback的使用/04_useCallback的例子'
// import App from './08_useMemo的使用/App'
// import App from './09_useRef的使用/App'
import App from './10_useImperativeHandle的使用/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ThemeContext.Provider value={{color:'#f00',size:'30'}}>
  //   <UserContext.Provider value={{name:'coder',age:21}}>
      <App></App>
  //   </UserContext.Provider>
  // </ThemeContext.Provider>
);
