import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UserProfile from './UserProfile'
import { GoogleLogout } from 'react-google-login';

const logout = async () => {

        sessionStorage.clear()
        window.location.href ='http://localhost:3000/'   
}

const UserMenu = () => {
    return (

        <Router>
            <div className="usermenu dropright">

                <a id="menuDropdown" role="button" data-toggle="dropdown" className='dropMenuBtn' href="#">
                    <i className="fas fa-user"></i>
                </a>

                <div className="dropdown-menu" aria-labelledby="menuDropdown">

                    <div className="dropdown-item" ><GoogleLogout
                        clientId="405204557273-prd5vmng5vcshg3ul604gl97reom0i7r.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                    >
                    </GoogleLogout></div>

                </div>

            </div>

            <Route path='/profile/' component={UserProfile} />
        </Router>
    )
}

export default UserMenu


