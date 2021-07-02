import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import UserNav from './UserNav'
import Status from './Status'
import ExercisePlan from './ExercisePlan'
import Diet from './Diet'
import UserProfile from './UserProfile'



const UserBody = () => {


    return (
       
        <Router>
            
            <div className='mainPage userpage'>
          
                <div className='mainMenu text-center row'>

                    <div className='col-3'><Link className='menuTitle' to="/status">Status<i className="fas fa-edit ml-3"></i></Link></div>
                    <div className='col-3'><Link className='menuTitle' to="/plan">Exercise<i className="fas fa-walking ml-3"></i></Link></div>
                    <div className='col-3'><Link className='menuTitle' to="/diet">Diet<i className="fas fa-utensils ml-3"></i></Link></div>
                    <div className='col-3'><Link className='menuTitle' to="/profile">Profile<i className="fas fa-user ml-3"></i></Link></div>

                </div>
                <hr />

             
                <Route path='/status' component={() => <Status/>}/>
                <Route path='/plan' component={ExercisePlan} />
                <Route path='/diet' component={Diet} />     
                <Route path='/profile' component={UserProfile} />        
   
            </div>

            <UserNav />
        </Router>
    )
}

export default UserBody
