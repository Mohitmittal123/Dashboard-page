import './App.css';
import SideMenu from './components/SideMenu';
import {
  BrowserRouter as Router , 
  Switch,
  Route,
} from "react-router-dom";

import { useState } from 'react';

const DashBoard=()=>{
  return <h1>DashBoard</h1>
};
const Content=()=>{
  return <h1>Content</h1>
};
const Courses=()=>{
  return <h1>Content/Courses</h1>
};
const Videos=()=>{
  return <h1>Content/Videos</h1>
};
const Design=()=>{
  return <h1>Design</h1>
};

function App() {
   
  const[inactive , setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
      <SideMenu onCollapse={(inactive)=>{
        console.log(inactive);
        setInactive(inactive);
      }}/>
      <div className={`container ${inactive ? 'inactive' : "" }`}>
      <Switch>
        <Route exact path={"/"}>
          <DashBoard/>

        </Route>
        <Route exact path={"/Content"}>
          <Content/>

        </Route>
        <Route path={"/Content/Courses"}>
          <Courses/>

        </Route>
        <Route path={"/Content/Videos"}>
          <Videos/>

        </Route>
        <Route path={"/Design"}>
          <Design/>

        </Route>
      </Switch>
      </div>
      

      
      </Router>

      
      
      
    </div>
  );
}

export default App;
