import UsersList from 'components/pages/home/UsersList/UsersList'; 
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
                      <h1>Users</h1>
                      <UsersList />
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
