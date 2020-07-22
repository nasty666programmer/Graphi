import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory"
import Profile from './Profile'
import Plans from './Plans'
import AboutMe from './AboutMe'


const history = createBrowserHistory();

class Menu extends React.Component {
    render(){
        return(
            <BrowserRouter history={history}>
            <div>
                <div className="containerMenu">
                    <span id="MenuProfile" className="MenuItem"><Link to="/Profile">Profile</Link></span>
                    <span id="MenuPlans" className="MenuItem"><Link to="/Plans">Plans</Link></span>
                    <span className="MenuAboutProject" className="MenuItem"><Link to="/AboutMe">About Me</Link></span >
                </div>
           
            
            <Route  path="/Profile" component={Profile} />
            <Route  path="/Plans" component={Plans} />
            <Route path="/AboutMe" component={AboutMe} />
            </div>
            </BrowserRouter>
        )
    }
}

export default Menu;