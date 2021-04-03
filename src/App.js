import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {GlobalProvider} from './Global/GlobalState';
import "./App.css";
const Loader = lazy(() => import("./components/Loader"));
const Nav = lazy(() => import("./components/Nav"));
const Cart = lazy(() => import("./components/Cart"));
const Home = lazy(() => import("./components/Home"));
const AddItem = lazy(() => import("./components/AddItem"));

function App() {
  

  return (

      <Suspense fallback={<h1>Loading Web App...</h1>}>
          < GlobalProvider>
        <div className="App"> 
            <Router>
              <Nav/>
              <div className="this">
                <Suspense fallback={<Loader />}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/additem" component={AddItem} />
                  
                    <Route
                      path="*"
                      render={() => <p className="link">Not found</p>}
                    />
                  </Switch>
                </Suspense>
              </div>
            </Router>
            
          
        </div>
        </GlobalProvider>
      </Suspense>
  
  );
}
export default App;
