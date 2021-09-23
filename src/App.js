import React from "react"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import Signin from "./container/Signin";
import Signup from "./container/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import { Products } from "./container/Products";
import { Orders } from "./container/Orders";
import { Category } from "./container/Category";



function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state=>state.auth)
  useEffect(()=>{
    if(!auth.authenticate){
        dispatch(isUserLoggedIn())
    }
    
},[])
  return (
    <>
     <div className="App">
     <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/products"  component={Products} />
          <PrivateRoute path="/orders"  component={Orders} />
          <PrivateRoute path="/category"  component={Category} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch></div>
        
      


    </>
  );
}

export default App;
