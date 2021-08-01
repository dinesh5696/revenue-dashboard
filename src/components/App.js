
import Signup from "./signup";
import {AuthProvider} from '../contexts/authContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from "./privateRoute";
import Dashboard from "./dashboard";
import Login from "./login";
import ForgotPassword from "./forgotPassword";
import UpdateProfile from "./updateProfile";
import Profile from "./profile";
function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
  );
}

export default App;
