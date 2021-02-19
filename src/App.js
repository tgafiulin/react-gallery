import Users from 'components/pages/home/Users/Users'; 
import User from 'components/pages/user/User/User';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return <Router>
          <div className="main">
                <div className="container">
                  <Switch>
                    <Route exact path="/">
                      <Users />
                    </Route>
                    <Route path="/user/:id">
                      <User />
                    </Route>
                    <Redirect to="/" />
                  </Switch>
                </div>
            </div>
        </Router>;
}

export default App;
