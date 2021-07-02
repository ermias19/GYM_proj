import { useState, useEffect, useCallback } from 'react'
import { useHistory as History } from 'react-router-dom';


const Status = () => {


    let [status, setStatus] = useState({})

    useEffect(() => {

        const getstat = async () => {
            const stat = await getStatus()

            setStatus(stat)
        }
        getstat()

    }, [])

    const getStatus = async () => {

        const response = await fetch(`http://localhost:5000/api/userinfo/${sessionStorage.getItem('tokenId')}`);
        const data = response.json()
        return data

    }

    const addUser = async () => {

        const settings = {

            method: 'POST',
            mode: 'cors',
            body: sessionStorage.getItem("tokenId"),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        const res = await fetch('http://localhost:5000/api/newuser/', settings)

        const data = await res.json()

        return data

    }


    var color = " "
    var cat = " "
    let history = History();

    function bmiCatagory(bmi) {

        if (bmi <= 18.5 & bmi > 0) {

            color = "rgb(134 177 217)"
            cat = "under weigth"

        }

        else if (bmi <= 24.9) {

            color = "rgb(61 211 101)"
            cat = "Normal"

        }

        else if (bmi <= 29.9) {

            color = "rgb(238 225 51)"
            cat = "Over weigth"

        }


        else if (bmi >= 34.9) {

            color = "rgb(253 128 46)"
            cat = "Obese"

        }

        else {

            color = "yellow"
            cat = " "

        }
    }



    if (status == 404) {

        addUser()
        history.push('/profile/')

    }

    let bmi = '-'
    let plan = '-'
    let week = '-'
    let level = '-'
    let fat = '-'
    let cal = '-'
    if (status['uInfo'] !== undefined) {

        bmi = status['uInfo'].bmi
        fat = status['uInfo'].fat
        cal = status['uInfo'].calorie

        bmiCatagory(bmi)

        if(status['plan'] !== undefined){

            
            plan = status['plan']['exercise_plan']
            week = status['plan']['week']
            level = status['plan']['level']
           
        }
    }

    return (


        <div className='status'>

            <div className='row text-center stats'>
                <div className='col-4 brf' style={{ borderLeft: '0px' }}><p className='mt-2 statTitle'>Body mass index</p><br />
                    <div className='bar mb-2'>
                        <div style={{ color: color }} className='bmi'>

                            {bmi}

                            <p className='bmiCat'>-{cat}</p>

                        </div>

                    </div>

                </div>
                <div className='col-4 brt'><p className='mt-2 statTitle'>Body fat percentage %</p><br />
                    <div className='cbar mb-2'>
                        <div className="fat">{fat}%</div>
                    </div></div>
                <div className='col-4 brf' style={{ borderRight: '0px' }}><p className='mt-2 statTitle'>Average calorie intake(needed)</p><br />
                    <div className='cbar mb-2'>
                        <p className='statTitle' style={{ fontSize: '2rem' }} >{cal}kc</p>
                    </div>
                </div>
            </div>

            <div className='row text-center stats'>
                <div className='col-4 brr'><p className='mt-3 statTitle'>Exercise plan</p>
                    <br />
                    <div className='cbar mb-2'>
                        <p className='statTitle' style={{ fontSize: '2rem' }} >{plan}</p>
                    </div>
                </div>
                <div className='col-4 brr'><p className='mt-3 statTitle'>Week</p>

                    <br />
                    <div className='cbar mb-2'>
                        <p className='statTitle' style={{ fontSize: '3rem' }} >{week}</p>
                    </div>
                </div>
                <div className='col-4'><p className='mt-3 statTitle'>Level</p>

                    <br />
                    <div className='cbar mb-2'>
                        <p className='statTitle' style={{ fontSize: '2rem' }} >{level}</p>
                    </div>
                </div>
            </div>


        </div>


    )


}

export default Status
