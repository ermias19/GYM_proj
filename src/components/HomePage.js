import HomeBody from './HomeBody'
import LoginCon from './LoginCon'

const HomePage = () => {

    return (

        <div className='row home'>

            <div className='col-3'><LoginCon /></div>
            <div className='col-8'>  <HomeBody /></div>

        </div>
    )
}

export default HomePage
