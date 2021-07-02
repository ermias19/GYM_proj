import { GoogleLogin } from "react-google-login"
import { useHistory as History } from 'react-router-dom';
import Logo from './Logo'

const loginCon = () => {

    let history = History();
    const autenticate = async (response) => {

        const res = await fetch(`http://localhost:5000/api/authorize/${response.tokenId}`)
        const data = await res.json()

        if (data != 404) {

            history.push('/status/')
            sessionStorage.setItem("tokenId", response.tokenId)
        }

    }

    //Google btn
    const googleBtn = <GoogleLogin
        clientId="405204557273-prd5vmng5vcshg3ul604gl97reom0i7r.apps.googleusercontent.com"
        onSuccess={autenticate}
        onFailure={autenticate} />

    return (

        <div className='loginCon'>

            <div className="text-center">

                <Logo classname='homeLogo' />

            </div>

            <div className='text-center loginBtn'>

                {googleBtn}

            </div>

        </div>
    )
}

export default loginCon


