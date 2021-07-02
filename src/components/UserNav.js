import DropMenu from './DropMenu'
import UserMenu from './UserMenu'
import '../index.css'

const UserNav = () => {
    return (
        
        <div id="userid" className='userNav'>
            <UserMenu />
            <DropMenu />
        </div>
    )
}

export default UserNav
