import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Login from './Login'
import Register from './Register'
import Dashboard from './admin/Dashboard'
import ProtectedRoute from './ProtectedRoute'
import Logout from './Logout'
import './Navigation.css'

class Navigation extends Component {
 render() {
   return (
    <Router>
        <div className="bodyNavigation">
            <Link to="/" className="link">Home</Link>
            <Link to="/contact" className="link">Contact</Link>
             {this.props.authenticated ? (
               <span>
                 <Link to="/dashboard" className="link linkDashboard">Dashboard</Link>
                 <Logout />
               </span>
             ) : (
               <span>
                 <Link to="/login" className="link">Login</Link>
                 <Link to="/register" className="link">Register</Link>
               </span>
             )}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route authenticated={this.props.authenticated} path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <ProtectedRoute authenticated={this.props.authenticated} path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
    </Router>
   );
 }
}

export default Navigation;
